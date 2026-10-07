// Renders copy that mixes plain text with links: an array of strings and { href, label } parts.
export default function Rich({ parts }) {
  return parts.map((part, i) =>
    typeof part === 'string' ? part : <a key={i} href={part.href}>{part.label}</a>,
  );
}
