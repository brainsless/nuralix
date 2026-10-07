import AuthShell from '../../components/AuthShell.jsx';
import { returnToFromLocation, withReturnTo } from '../../lib/auth.js';

// Where the link in the verification email lands. The account service adds ?error when it has expired.
export default function VerifyEmail({ content }) {
  const t = content.verify;
  const expired = new URLSearchParams(location.search).has('error');

  return (
    <AuthShell
      content={content}
      title={expired ? t.expiredTitle : t.verifiedTitle}
      lede={expired ? t.expired : t.verified}
    >
      <a className="button" href={withReturnTo(`${content.base}/sign-in`, returnToFromLocation())}>{t.proceed}</a>
    </AuthShell>
  );
}
