import AuthShell from '../../components/AuthShell.jsx';
import { returnToFromLocation, withReturnTo } from '../../lib/auth.js';

// Where the link in the verification email lands. The account service adds ?error when it has expired.
export default function VerifyEmail({ content }) {
  const expired = new URLSearchParams(location.search).has('error');
  const { title, lede } = expired ? content.verify.expired : content.verify.verified;

  return (
    <AuthShell content={content} title={title} lede={lede}>
      <a className="button" href={withReturnTo('/sign-in', returnToFromLocation())}>Continue to sign in</a>
    </AuthShell>
  );
}
