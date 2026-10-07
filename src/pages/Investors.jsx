import PageShell from '../components/PageShell.jsx';
import Actions from '../components/Actions.jsx';
import Counts from '../components/Counts.jsx';

export default function Investors({ content }) {
  const { stats, traction, roadmap, close } = content;

  return (
    <PageShell content={content} title={content.title} lede={content.lede}>
      <section>
        <Counts counts={stats} />
      </section>

      <section className="split">
        <h2>{traction.title}</h2>
        <dl className="ledger">
          {traction.items.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                <strong>{item.value}</strong>
                {item.note}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>{roadmap.title}</h2>
        <ul className="thirds">
          {roadmap.phases.map((phase) => (
            <li key={phase.title}>
              <h3>
                {phase.title}
                <span className="tag">{phase.status}</span>
              </h3>
              <ul className="plain">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing">
        <p>{close.body}</p>
        <Actions actions={close.actions} />
      </section>
    </PageShell>
  );
}
