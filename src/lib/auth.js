// Talks to the Nuralix account service. Credentials go only to this origin, over HTTPS, and are
// never stored or logged here.
const AUTH_URL = `${import.meta.env?.VITE_AUTH_ORIGIN ?? 'https://api.nuralix.ai'}/api/auth`;
const TIMEOUT_MS = 12000;

export const HEALTH_HUB = 'https://app.nuralix.ai/health';
const APP_ORIGIN = new URL(HEALTH_HUB).origin;
const LEGACY_GENETICS_ORIGIN = 'https://genetics.nuralix.ai';
const TRUSTED_ORIGINS = new Set([APP_ORIGIN, 'https://hospital.nuralix.ai']);
const AUTH_PATHS = new Set(['/sign-in', '/sign-up', '/forgot-password', '/reset-password', '/verify-email']);

// Where to send someone after they sign in. Anything that is not a page on this site or on a
// trusted Nuralix origin falls back to the Health Hub, so a crafted link cannot redirect elsewhere.
export function safeReturnTo(value) {
  if (!value || value.length > 2048 || value.includes('\\')) return HEALTH_HUB;
  try {
    if (value.startsWith('/') && !value.startsWith('//')) {
      const local = new URL(value, location.origin);
      return AUTH_PATHS.has(local.pathname) ? HEALTH_HUB : `${local.pathname}${local.search}${local.hash}`;
    }
    const url = new URL(value);
    if (AUTH_PATHS.has(url.pathname)) return HEALTH_HUB;
    if (url.origin === LEGACY_GENETICS_ORIGIN) return new URL(`${url.pathname}${url.search}${url.hash}`, APP_ORIGIN).toString();
    return TRUSTED_ORIGINS.has(url.origin) ? url.toString() : HEALTH_HUB;
  } catch {
    return HEALTH_HUB;
  }
}

export const returnToFromLocation = () => safeReturnTo(new URLSearchParams(location.search).get('returnTo'));

// Keeps the destination when moving between the account pages.
export function withReturnTo(path, returnTo) {
  return returnTo === HEALTH_HUB ? path : `${path}?returnTo=${encodeURIComponent(returnTo)}`;
}

// The page an emailed link should come back to, carrying the destination with it.
function callbackUrl(path, returnTo) {
  return new URL(withReturnTo(path, returnTo), location.origin).toString();
}

class AuthError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

async function request(path, body) {
  let response;
  try {
    response = await fetch(`${AUTH_URL}${path}`, {
      method: body ? 'POST' : 'GET',
      credentials: 'include',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    throw new AuthError('Nuralix could not reach the secure sign-in service. Please check your connection and try again.');
  }
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new AuthError(data?.message?.trim() ?? '', data?.code);
  return data;
}

// The message to show for a failed request, with `fallback` when the service gave none.
export function errorMessage(error, fallback) {
  if (error?.code === 'EMAIL_NOT_VERIFIED') {
    return 'Verify your email before signing in. Check your inbox for the Nuralix verification link.';
  }
  return error?.message || fallback;
}

export async function hasSession() {
  try {
    return Boolean((await request('/get-session'))?.user);
  } catch {
    return false;
  }
}

export const signIn = (email, password) => request('/sign-in/email', { email, password });

export const signUp = (profile, email, password, returnTo) =>
  request('/sign-up/email', {
    email,
    password,
    ...profile,
    callbackURL: callbackUrl('/verify-email', returnTo),
    acceptedTerms: true,
    acceptedPolicyVersions: { termsOfService: '1.0', privacyPolicy: '2.0' },
  });

export const requestPasswordReset = (email, returnTo) =>
  request('/request-password-reset', { email, redirectTo: callbackUrl('/reset-password', returnTo) });

export const resetPassword = (newPassword, token) => request('/reset-password', { newPassword, token });

const DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const OLDEST_AGE = 120;

function parseDate(value) {
  const match = DATE.exec(value);
  if (!match) return null;
  const [year, month, day] = match.slice(1).map(Number);
  const date = new Date(year, month - 1, day);
  const real = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  return real ? date : null;
}

// The earliest and latest dates of birth the sign-up form accepts, as yyyy-mm-dd.
export function birthDateRange(now = new Date()) {
  const format = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const oldest = new Date(now.getFullYear() - OLDEST_AGE, now.getMonth(), now.getDate());
  return { min: format(oldest), max: format(now) };
}

// Returns { profile } for the account service, or { error } with the message to show.
export function validateProfile({ firstName, lastName, gender, dateOfBirth }, now = new Date()) {
  const first = firstName.trim();
  const last = lastName.trim();
  if (!first) return { error: 'Enter your first name.' };
  if (!last) return { error: 'Enter your last name.' };
  if (!gender) return { error: 'Select your sex at birth.' };

  const born = parseDate(dateOfBirth);
  if (!born) return { error: 'Enter a valid date of birth.' };
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (born > today) return { error: 'Date of birth cannot be in the future.' };
  const oldest = new Date(today.getFullYear() - OLDEST_AGE, today.getMonth(), today.getDate());
  if (born < oldest) return { error: `Enter a date of birth within the last ${OLDEST_AGE} years.` };

  return { profile: { firstName: first, lastName: last, name: `${first} ${last}`, gender, dateOfBirth } };
}

// Returns the message to show, or null when the passwords are acceptable.
export function passwordProblem(password, confirmation) {
  if (password !== confirmation) return 'Passwords do not match.';
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return 'Password must include at least one letter and one number.';
  }
  return null;
}
