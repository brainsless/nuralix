import { useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { emailLink, requestPasswordReset, returnToFromLocation, withReturnTo } from '../../lib/auth.js';

export default function ForgotPassword({ content }) {
  const { base, messages, forgot: t } = content;
  const [returnTo] = useState(returnToFromLocation);
  const [sentTo, setSentTo] = useState(null);

  const { busy, error, onSubmit } = useSubmit(async ({ email }) => {
    await requestPasswordReset(email.trim(), emailLink(`${base}/reset-password`, returnTo));
    setSentTo(email.trim());
  }, t.failed, messages);

  const backToSignIn = (
    <p className="auth-switch">
      <a href={withReturnTo(`${base}/sign-in`, returnTo)}>{t.back}</a>
    </p>
  );

  if (sentTo) {
    return (
      <AuthShell content={content} title={t.sentTitle}>
        <p className="auth-lede">
          {t.sent[0]}<span dir="ltr">{sentTo}</span>{t.sent[1]}
        </p>
        {backToSignIn}
      </AuthShell>
    );
  }

  return (
    <AuthShell content={content} title={t.title} lede={t.lede}>
      <form onSubmit={onSubmit}>
        <Field label={content.email} name="email" type="email" autoComplete="email" dir="ltr" required />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={busy}>{busy ? t.busy : t.submit}</button>
      </form>
      {backToSignIn}
    </AuthShell>
  );
}
