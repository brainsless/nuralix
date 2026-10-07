import { useEffect, useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { hasSession, returnToFromLocation, signIn, withReturnTo } from '../../lib/auth.js';

export default function SignIn({ content }) {
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
  }, "We couldn't sign you in. Check your email and password and try again.");

  return (
    <AuthShell content={content} title={content.signIn.title} lede={content.signIn.lede}>
      {checking ? (
        <p className="auth-status">Checking your Nuralix account…</p>
      ) : (
        <form onSubmit={onSubmit}>
          <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            aside={<a href={withReturnTo('/forgot-password', returnTo)}>Forgot password?</a>}
          />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button" type="submit" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        </form>
      )}
      <p className="auth-switch">
        New to Nuralix? <a href={withReturnTo('/sign-up', returnTo)}>Create a free account</a>
      </p>
    </AuthShell>
  );
}
