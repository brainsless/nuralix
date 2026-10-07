import { useEffect, useState } from 'react';

// `getText` may be async, so a file can be fetched at click time.
export default function CopyButton({ getText, label, copiedLabel, className, style }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(await getText());
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" className={className} style={style} onClick={copy}>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
