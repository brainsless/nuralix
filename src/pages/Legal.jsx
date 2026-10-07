import PageShell from '../components/PageShell.jsx';
import Rich from '../components/Rich.jsx';

export default function Legal({ content }) {
  return (
    <PageShell content={content} title={content.title} lede={content.notice} className="legal">
      {/* The legal text is English in every language, so it keeps its own direction. */}
      <p className="fine legal-updated" lang="en" dir="ltr">{content.updated}</p>
      {content.sections.map((section) => (
        <section key={section.title} className="split" lang="en" dir="ltr">
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
