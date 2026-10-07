import PageShell from '../components/PageShell.jsx';
import Rich from '../components/Rich.jsx';

export default function Legal({ content }) {
  return (
    <PageShell content={content} title={content.title} lede={content.updated} className="legal">
      {content.sections.map((section) => (
        <section key={section.title} className="split">
          <h2>{section.title}</h2>
          <div className="prose">
            {section.paragraphs.map((parts, i) => (
              <p key={i}><Rich parts={parts} /></p>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
