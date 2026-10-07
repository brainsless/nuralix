// Run with: node --test src/lib
import assert from 'node:assert/strict';
import { test } from 'node:test';

globalThis.location = { origin: 'https://nuralix.ai', search: '' };
const { HEALTH_HUB, safeReturnTo, validateProfile, passwordProblem, withReturnTo } = await import('./auth.js');

test('safeReturnTo only allows this site and trusted Nuralix origins', () => {
  assert.equal(safeReturnTo(null), HEALTH_HUB);
  assert.equal(safeReturnTo('https://evil.example/steal'), HEALTH_HUB);
  assert.equal(safeReturnTo('//evil.example'), HEALTH_HUB);
  assert.equal(safeReturnTo('/\\evil.example'), HEALTH_HUB);
  assert.equal(safeReturnTo('javascript:alert(1)'), HEALTH_HUB);
  assert.equal(safeReturnTo('https://app.nuralix.ai.evil.example/'), HEALTH_HUB);
  assert.equal(safeReturnTo('/sign-in'), HEALTH_HUB);
  assert.equal(safeReturnTo('/ar/sign-up?x=1'), HEALTH_HUB);
  assert.equal(safeReturnTo('/ar/genetics'), '/ar/genetics');
  assert.equal(safeReturnTo('x'.repeat(2049)), HEALTH_HUB);
  assert.equal(safeReturnTo('/genetics?a=1#b'), '/genetics?a=1#b');
  assert.equal(safeReturnTo('https://app.nuralix.ai/genetics?startCheckout=1'), 'https://app.nuralix.ai/genetics?startCheckout=1');
  assert.equal(safeReturnTo('https://hospital.nuralix.ai/family'), 'https://hospital.nuralix.ai/family');
  assert.equal(safeReturnTo('https://genetics.nuralix.ai/reports'), 'https://app.nuralix.ai/reports');
});

test('withReturnTo drops the default destination', () => {
  assert.equal(withReturnTo('/sign-in', HEALTH_HUB), '/sign-in');
  assert.equal(withReturnTo('/sign-in', '/genetics'), '/sign-in?returnTo=%2Fgenetics');
});

test('validateProfile checks names, sex and date of birth', () => {
  const now = new Date(2026, 9, 7);
  const base = { firstName: ' Nour ', lastName: 'Saif', gender: 'Female', dateOfBirth: '1990-02-28' };
  assert.deepEqual(validateProfile(base, now).profile, {
    firstName: 'Nour', lastName: 'Saif', name: 'Nour Saif', gender: 'Female', dateOfBirth: '1990-02-28',
  });
  assert.equal(validateProfile({ ...base, firstName: ' ' }, now).error, 'Enter your first name.');
  assert.equal(validateProfile({ ...base, gender: '' }, now).error, 'Select your sex at birth.');
  assert.equal(validateProfile({ ...base, dateOfBirth: '1990-02-30' }, now).error, 'Enter a valid date of birth.');
  assert.equal(validateProfile({ ...base, dateOfBirth: '2026-10-08' }, now).error, 'Date of birth cannot be in the future.');
  assert.match(validateProfile({ ...base, dateOfBirth: '1906-10-06' }, now).error, /within the last 120 years/);
});

test('passwordProblem requires a match, a letter and a number', () => {
  assert.equal(passwordProblem('abc12345', 'abc12346'), 'Passwords do not match.');
  assert.match(passwordProblem('abcdefgh', 'abcdefgh'), /letter and one number/);
  assert.match(passwordProblem('12345678', '12345678'), /letter and one number/);
  assert.equal(passwordProblem('abc12345', 'abc12345'), null);
});
