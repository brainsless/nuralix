import Rings from './Rings.jsx';

export default function Wordmark({ href, label }) {
  return (
    <a className="wordmark" href={href} aria-label={label}>
      <Rings />
      nuralix
    </a>
  );
}
