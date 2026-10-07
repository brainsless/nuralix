import { useEffect, useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { hasSession, returnToFromLocation, signIn, withReturnTo } from '../../lib/auth.js';

export default function SignIn({ content }) {
  const { base, messages, signIn: t } = content;
  const [returnTo] = useState(returnToFromLocation);
  const [checking, setChecking] = useState(true);

  // Someone who is already signed in goes straight on.
  useEffect(() => {
    let current = true;
    hasSession().then((signedIn) => {
      if (!current) return;
      if (signedIn) location.assign(returnTo);
      else setChecking(false);
    });
    return () => { current = false; };
  }, [returnTo]);

  const { busy, error, onSubmit } = useSubmit(async ({ email, password }) => {
    await signIn(email.trim(), password);
    location.assign(returnTo);
  }, t.failed, messages);

  return (
    <AuthShell content={content} title={t.title} lede={t.lede}>
      {checking ? (
        <p className="auth-status">{t.checking}</p>
      ) : (
        <form onSubmit={onSubmit}>
          <Field label={content.email} name="email" type="email" autoComplete="email" placeholder={content.emailExample} dir="ltr" required />
          <Field
            label={content.password}
            name="password"
            type="password"
            autoComplete="current-password"
            dir="ltr"
            required
            aside={<a href={withReturnTo(`${base}/forgot-password`, returnTo)}>{t.forgot}</a>}
          />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button" type="submit" disabled={busy}>{busy ? t.busy : t.submit}</button>
        </form>
      )}
      <p className="auth-switch">
        {t.newHere} <a href={withReturnTo(`${base}/sign-up`, returnTo)}>{t.create}</a>
      </p>
    </AuthShell>
  );
}
