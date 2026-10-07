import { useState } from 'react';
import { errorMessage } from '../lib/auth.js';

// Runs an account request from a form. `action` gets the form's fields and may throw an Error whose
// message is shown as it is, or let a service error through to be shown with `fallback`.
export function useSubmit(action, fallback) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (busy) return;
    setError(null);
    setBusy(true);
    try {
      await action(Object.fromEntries(new FormData(event.currentTarget)));
    } catch (failure) {
      setError(errorMessage(failure, fallback));
    } finally {
      setBusy(false);
    }
  };

  return { busy, error, onSubmit };
}
