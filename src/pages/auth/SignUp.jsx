import { useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { birthDateRange, passwordProblem, returnToFromLocation, signUp, validateProfile, withReturnTo } from '../../lib/auth.js';

const SEXES = ['Male', 'Female'];
const BORN = birthDateRange();

export default function SignUp({ content }) {
  const [returnTo] = useState(returnToFromLocation);
  const [sentTo, setSentTo] = useState(null);

  const { busy, error, onSubmit } = useSubmit(async (fields) => {
    const { profile, error: profileError } = validateProfile(fields);
    if (profileError) throw new Error(profileError);
    const problem = passwordProblem(fields.password, fields.confirmation);
    if (problem) throw new Error(problem);

    const email = fields.email.trim();
    await signUp(profile, email, fields.password, returnTo);
    setSentTo(email);
  }, "We couldn't create your account. Please try again.");

  if (sentTo) {
    return (
      <AuthShell content={content} title="Check your email">
        <p className="auth-lede">
          We sent a verification link to <strong>{sentTo}</strong>. Verify your email, then sign in with this same
          account everywhere Nuralix is available.
        </p>
        <a className="button" href={withReturnTo('/sign-in', returnTo)}>Continue to sign in</a>
      </AuthShell>
    );
  }

  return (
    <AuthShell content={content} title={content.signUp.title} lede={content.signUp.lede}>
      <form onSubmit={onSubmit}>
        <div className="field-pair">
          <Field label="First name" name="firstName" autoComplete="given-name" required />
          <Field label="Last name" name="lastName" autoComplete="family-name" required />
        </div>
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <div className="field-pair">
          <Field label="Sex at birth" hint="Used to personalize relevant health and genetics insights.">
            {(control) => (
              <select name="gender" defaultValue="" required {...control}>
                <option value="" disabled>Select</option>
                {SEXES.map((sex) => (
                  <option key={sex}>{sex}</option>
                ))}
              </select>
            )}
          </Field>
          <Field label="Date of birth" name="dateOfBirth" type="date" autoComplete="bday" min={BORN.min} max={BORN.max} required />
        </div>
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          maxLength={128}
          hint="Use 8–128 characters with at least one letter and one number."
          required
        />
        <Field label="Confirm password" name="confirmation" type="password" autoComplete="new-password" required />
        <label className="check">
          <input type="checkbox" name="accepted" required />
          <span>
            I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </span>
        </label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={busy}>{busy ? 'Creating account…' : 'Create a free account'}</button>
      </form>
      <p className="auth-switch">
        Already have an account? <a href={withReturnTo('/sign-in', returnTo)}>Sign in</a>
      </p>
    </AuthShell>
  );
}
