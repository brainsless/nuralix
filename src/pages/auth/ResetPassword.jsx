import { useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { passwordProblem, resetPassword, returnToFromLocation, withReturnTo } from '../../lib/auth.js';

export default function ResetPassword({ content }) {
  const { base, messages, reset: t } = content;
  const [returnTo] = useState(returnToFromLocation);
  const [token] = useState(() => new URLSearchParams(location.search).get('token'));
  const [done, setDone] = useState(false);

  const { busy, error, onSubmit } = useSubmit(async ({ password, confirmation }) => {
    const problem = passwordProblem(password, confirmation);
    if (problem) throw new Error(problem);
    await resetPassword(password, token);
    setDone(true);
  }, t.failed, messages);

  if (done) {
    return (
      <AuthShell content={content} title={t.doneTitle}>
        <a className="button" href={withReturnTo(`${base}/sign-in`, returnTo)}>{t.signIn}</a>
      </AuthShell>
    );
  }

  if (!token) {
    return (
      <AuthShell content={content} title={t.badLinkTitle} lede={t.badLink}>
        <a className="button" href={withReturnTo(`${base}/forgot-password`, returnTo)}>{t.requestNew}</a>
      </AuthShell>
    );
  }

  return (
    <AuthShell content={content} title={t.title} lede={t.lede}>
      <form onSubmit={onSubmit}>
        <Field
          label={content.newPassword}
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
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={busy}>{busy ? t.busy : t.submit}</button>
      </form>
    </AuthShell>
  );
}
