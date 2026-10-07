import PageShell from '../components/PageShell.jsx';

export default function Founder({ content }) {
  const { name, role, photo, mission, about, details } = content;

  return (
    <PageShell content={content} title={name} lede={role} className="founder">
      <section className={photo ? 'founder-lead with-photo' : 'founder-lead'}>
        {photo && <img src={photo} alt={name} />}
        <blockquote>{mission}</blockquote>
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
    </PageShell>
  );
}
