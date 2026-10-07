import { useEffect } from 'react';
import { usePlayInView } from '../hooks/usePlayInView.js';

const SETTLE_AFTER = 8;

export default function Hero({ hero }) {
  const ref = usePlayInView();

  // The header sits inside this card until the page is scrolled, then settles into a bar.
  useEffect(() => {
    const settle = () => document.documentElement.classList.toggle('settled', scrollY > SETTLE_AFTER);
    settle();
    addEventListener('scroll', settle, { passive: true });
    return () => removeEventListener('scroll', settle);
  }, []);

  return (
    <section className="hero" ref={ref}>
      <video src="/media/hero.mp4" poster="/media/hero.jpg" muted loop playsInline aria-hidden="true" />
      <div className="hero-copy">
        <h1>{hero.title}</h1>
        <a className="button" href={hero.cta.href}>{hero.cta.label}</a>
      </div>
    </section>
  );
}
