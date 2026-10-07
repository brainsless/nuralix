import { usePlayInView } from '../hooks/usePlayInView.js';

export default function Footer({ footer }) {
  const ref = usePlayInView();

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-top">
        <div>
          <p className="footer-pitch">{footer.pitch}</p>
          <div className="footer-actions">
            <a className="button" href={footer.cta.href}>{footer.cta.label}</a>
            <a className="button quiet" href={footer.secondary.href}>{footer.secondary.label}</a>
          </div>
        </div>

        <nav className="footer-links" aria-label={footer.linksLabel}>
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} lang={link.lang}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* The logo, cut out of the opening footage. */}
      <div className="footer-mark" aria-hidden="true">
        <video src="/media/hero.mp4" poster="/media/hero.jpg" preload="none" muted loop playsInline />
      </div>

      <div className="footer-base">
        <p>{footer.disclaimer}</p>
        <p>© {new Date().getFullYear()} Nuralix · {footer.city}</p>
      </div>
    </footer>
  );
}
