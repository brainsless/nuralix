import PageShell from '../components/PageShell.jsx';
import Actions from '../components/Actions.jsx';
import Counts from '../components/Counts.jsx';

// A titled set of named lists: condition areas, trait groups.
function Groups({ section }) {
  return (
    <section className="split">
      <div>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </div>
      <div className="groups">
        {section.groups.map((group) => (
          <details key={group.title}>
            <summary>
              {group.title}
              <span>{group.items.length}</span>
            </summary>
            <ul className="plain columns">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function Genetics({ content }) {
  const { counts, conditions, traits, medication, therapies, close, fine } = content;

  return (
    <PageShell content={content} title={content.title} lede={content.lede}>
      <section>
        <Counts counts={counts} />
      </section>

      <Groups section={conditions} />
      <Groups section={traits} />

      <section className="split">
        <div>
          <h2>{medication.title}</h2>
          <p>{medication.body}</p>
        </div>
        <dl className="ledger">
          {medication.levels.map((level) => (
            <div key={level.title}>
              <dt>{level.title}</dt>
              <dd>{level.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="split">
        <div>
          <h2>{therapies.title}</h2>
          <p>{therapies.body}</p>
        </div>
        <ul className="plain columns">
          {therapies.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="closing">
        <h2>{close.title}</h2>
        <Actions actions={close.actions} />
        <p className="fine">{close.note}</p>
        <p className="fine">{fine}</p>
      </section>
    </PageShell>
  );
}
