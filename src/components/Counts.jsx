export default function Counts({ counts }) {
  return (
    <dl className="counts">
      {counts.map((count) => (
        <div key={count.label}>
          <dt>{count.value}</dt>
          <dd>{count.label}</dd>
        </div>
      ))}
    </dl>
  );
}
