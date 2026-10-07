import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

export default function Founder({ content }) {
  const { name, role, photo, mission, about, details } = content;

  return (
    <>
      <Nav nav={content.nav} />
      <main className="page founder" id="top">
        <section className="founder-top">
          <img src={photo} alt={name} width="800" height="800" />
          <div>
            <h1>{name}</h1>
            <p className="founder-role">{role}</p>
            <blockquote>{mission}</blockquote>
          </div>
        </section>

        <section className="split">
          <h2>{about.title}</h2>
          <div>
            <p className="prose">{about.body}</p>
            <dl className="details">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer footer={content.footer} />
    </>
  );
}
