import PageShell from '../components/PageShell.jsx';
import Actions from '../components/Actions.jsx';
import Rich from '../components/Rich.jsx';

export default function Family({ content }) {
  const { actions, steps, points, fine } = content;

  return (
    <PageShell content={content} title={content.title} lede={content.lede}>
      <section>
        <Actions actions={actions} />
      </section>

      <section className="split">
        <h2>{steps.title}</h2>
        <ol className="steps">
          {steps.items.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <ul className="thirds">
          {points.map((point) => (
            <li key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </li>
          ))}
        </ul>
        <p className="fine"><Rich parts={fine} /></p>
      </section>
    </PageShell>
  );
}
