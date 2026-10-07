import { useState } from 'react';
import AuthShell from '../../components/AuthShell.jsx';
import Field from '../../components/Field.jsx';
import { useSubmit } from '../../hooks/useSubmit.js';
import { passwordProblem, resetPassword, returnToFromLocation, withReturnTo } from '../../lib/auth.js';

export default function ResetPassword({ content }) {
  const [returnTo] = useState(returnToFromLocation);
  const [token] = useState(() => new URLSearchParams(location.search).get('token'));
  const [done, setDone] = useState(false);

  const { busy, error, onSubmit } = useSubmit(async ({ password, confirmation }) => {
    const problem = passwordProblem(password, confirmation);
    if (problem) throw new Error(problem);
    await resetPassword(password, token);
    setDone(true);
  }, 'This reset link is invalid or expired. Request a new one.');

  if (done) {
    return (
      <AuthShell content={content} title="Password updated">
        <a className="button" href={withReturnTo('/sign-in', returnTo)}>Sign in</a>
      </AuthShell>
    );
  }

  if (!token) {
    return (
      <AuthShell content={content} title="This reset link is invalid or expired." lede="Request a new one to choose a password.">
        <a className="button" href={withReturnTo('/forgot-password', returnTo)}>Request a new link</a>
      </AuthShell>
    );
  }

  return (
    <AuthShell content={content} title={content.reset.title} lede={content.reset.lede}>
      <form onSubmit={onSubmit}>
        <Field
          label="New password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          maxLength={128}
          hint="Use 8–128 characters with at least one letter and one number."
          required
        />
        <Field label="Confirm password" name="confirmation" type="password" autoComplete="new-password" required />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={busy}>{busy ? 'Updating…' : 'Update password'}</button>
      </form>
    </AuthShell>
  );
}
