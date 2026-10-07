import { usePlayInView } from '../hooks/usePlayInView.js';
import Wordmark from './Wordmark.jsx';
import Rich from './Rich.jsx';

// The account pages: the form on one side, the opening footage and pitch on the other.
export default function AuthShell({ content, title, lede, children }) {
  const ref = usePlayInView();

  return (
    <main className="auth">
      <div className="auth-form">
        <div className="auth-top">
          <Wordmark href={content.home.href} label={content.home.label} />
          <a className="lang" href={content.switch.href} lang={content.switch.lang}>{content.switch.label}</a>
        </div>
        <div className="auth-body">
          <h1>{title}</h1>
          {lede && <p className="auth-lede">{lede}</p>}
          {children}
        </div>
        <p className="fine"><Rich parts={content.providerNote} /></p>
      </div>

      <div className="auth-art" ref={ref} aria-hidden="true">
        <video src="/media/hero.mp4" poster="/media/hero.jpg" muted loop playsInline />
        <p>{content.pitch}</p>
      </div>
    </main>
  );
}
