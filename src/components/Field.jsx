import { useId } from 'react';

// A labelled input. `hint` is tied to the input for screen readers; `aside` sits beside the label.
export default function Field({ label, hint, aside, children, ...input }) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className="field">
      <div className="field-label">
        <label htmlFor={id}>{label}</label>
        {aside}
      </div>
      {children ? children({ id, 'aria-describedby': hintId }) : <input id={id} aria-describedby={hintId} {...input} />}
      {hint && <p id={hintId}>{hint}</p>}
    </div>
  );
}
