import { useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Reports from '../components/Reports.jsx';
import Alerts from '../components/Alerts.jsx';
import Rich from '../components/Rich.jsx';
import Footer from '../components/Footer.jsx';

export default function Landing({ content }) {
  const { nav, hero, reportsLabel, reports, counts, countsFine, tracking, compare, trust, price, faq, footer } = content;

  // The page is rendered after load, so a link that arrives with a #section is followed by hand.
  useEffect(() => {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <>
      <Nav nav={nav} />

      <main id="top">
        <Hero hero={hero} />
        <Reports label={reportsLabel} reports={reports} counts={counts} fine={countsFine} />

        <section className="tracking" id="tracking">
          <h2>{tracking.statement}</h2>
          <Alerts from={tracking.from} alerts={tracking.alerts} />
          <p className="fine">{tracking.fine}</p>
        </section>

        <section className="compare" id="compare">
          <h2>{compare.title}</h2>
          <ul className="rows">
            {compare.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="fine"><Rich parts={compare.fine} /></p>
        </section>

        <section className="trust" id="trust">
          <h2>{trust.title}</h2>
          <ul className="thirds">
            {trust.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="price" id="price">
          <div className="price-panel">
            <div>
              <h2 dir="ltr">{price.amount}</h2>
              <p className="price-terms">{price.terms}</p>
            </div>
            <div className="price-detail">
              <ul>
                {price.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button" href={price.cta.href}>{price.cta.label}</a>
              <p className="fine"><Rich parts={price.fine} /></p>
            </div>
          </div>
          <ul className="price-others">
            {price.others.map((other) => (
              <li key={other.label}>
                {other.ask}
                <a className="button quiet" href={other.href}>{other.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="faq">
          <h2>{faq.title}</h2>
          <div>
            {faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer footer={footer} />
    </>
  );
}
