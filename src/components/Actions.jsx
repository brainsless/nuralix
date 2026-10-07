// A row of call-to-action links. An action marked `quiet` is drawn as an outline.
export default function Actions({ actions }) {
  return (
    <div className="actions">
      {actions.map((action) => (
        <a key={action.label} className={action.quiet ? 'button quiet' : 'button'} href={action.href}>
          {action.label}
        </a>
      ))}
    </div>
  );
}
