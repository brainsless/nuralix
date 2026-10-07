import { useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { requestPasswordReset, returnToFromLocation, withReturnTo } from '../../lib/auth.js';

export default function ForgotPassword({ content }) {
  const [returnTo] = useState(returnToFromLocation);
  const [sentTo, setSentTo] = useState(null);

  const { busy, error, onSubmit } = useSubmit(async ({ email }) => {
    await requestPasswordReset(email.trim(), returnTo);
    setSentTo(email.trim());
  }, "We couldn't send the reset email. Please try again.");

  const backToSignIn = (
    <p className="auth-switch">
      <a href={withReturnTo('/sign-in', returnTo)}>Back to sign in</a>
    </p>
  );

  if (sentTo) {
    return (
      <AuthShell content={content} title="Check your email">
        <p className="auth-lede">If an account exists for {sentTo}, a password-reset link is on its way.</p>
        {backToSignIn}
      </AuthShell>
    );
  }

  return (
    <AuthShell content={content} title={content.forgot.title} lede={content.forgot.lede}>
      <form onSubmit={onSubmit}>
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send reset link'}</button>
      </form>
      {backToSignIn}
    </AuthShell>
  );
}
