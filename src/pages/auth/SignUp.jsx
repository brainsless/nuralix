import { useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import {
  birthDateRange,
  emailLink,
  passwordProblem,
  returnToFromLocation,
  signUp,
  validateProfile,
  withReturnTo,
} from '../../lib/auth.js';

const BORN = birthDateRange();

export default function SignUp({ content }) {
  const { base, links, messages, signUp: t } = content;
  const [returnTo] = useState(returnToFromLocation);
  const [sentTo, setSentTo] = useState(null);

  const { busy, error, onSubmit } = useSubmit(async (fields) => {
    const { profile, error: profileError } = validateProfile(fields);
    if (profileError) throw new Error(profileError);
    const problem = passwordProblem(fields.password, fields.confirmation);
    if (problem) throw new Error(problem);

    const email = fields.email.trim();
    await signUp(profile, email, fields.password, emailLink(`${base}/verify-email`, returnTo));
    setSentTo(email);
  }, t.failed, messages);

  const signInHref = withReturnTo(`${base}/sign-in`, returnTo);

  if (sentTo) {
    return (
      <AuthShell content={content} title={t.sentTitle}>
        <p className="auth-lede">
          {t.sent[0]}<strong dir="ltr">{sentTo}</strong>{t.sent[1]}
        </p>
        <a className="button" href={signInHref}>{t.proceed}</a>
      </AuthShell>
    );
  }

  return (
    <AuthShell content={content} title={t.title} lede={t.lede}>
      <form onSubmit={onSubmit}>
        <div className="field-pair">
          <Field label={t.firstName} name="firstName" autoComplete="given-name" required />
          <Field label={t.lastName} name="lastName" autoComplete="family-name" required />
        </div>
        <Field label={content.email} name="email" type="email" autoComplete="email" dir="ltr" required />
        <div className="field-pair">
          <Field label={t.sex} hint={t.sexHint}>
            {(control) => (
              <select name="gender" defaultValue="" required {...control}>
                <option value="" disabled>{t.select}</option>
                {t.sexes.map((sex) => (
                  <option key={sex.value} value={sex.value}>{sex.label}</option>
                ))}
              </select>
            )}
          </Field>
          <Field label={t.born} name="dateOfBirth" type="date" autoComplete="bday" min={BORN.min} max={BORN.max} required />
        </div>
        <Field
          label={content.password}
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          maxLength={128}
          hint={content.passwordHint}
          dir="ltr"
          required
        />
        <Field label={content.confirmPassword} name="confirmation" type="password" autoComplete="new-password" dir="ltr" required />
        <label className="check">
          <input type="checkbox" name="accepted" required />
          <span>
            {t.agree[0]}<a href={links.terms}>{t.agree[1]}</a>{t.agree[2]}<a href={links.privacy}>{t.agree[3]}</a>{t.agree[4]}
          </span>
        </label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={busy}>{busy ? t.busy : t.submit}</button>
      </form>
      <p className="auth-switch">
        {t.haveAccount} <a href={signInHref}>{t.signIn}</a>
      </p>
    </AuthShell>
  );
}
