import Rings from './Rings.jsx';

// Example notes from the assistant: where the signal came from, what changed, and what to do about it.
export default function Alerts({ from, alerts }) {
  return (
    <ul className="alerts">
      {alerts.map((alert) => (
        <li key={alert.title}>
          <p className="alert-from">
            <Rings />
            {from}
            <span>{alert.source}</span>
          </p>
          <h3>{alert.title}</h3>
          <p>{alert.action}</p>
        </li>
      ))}
    </ul>
  );
}
