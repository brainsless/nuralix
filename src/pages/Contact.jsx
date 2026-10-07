import PageShell from '../components/PageShell.jsx';

export default function Contact({ content }) {
  return (
    <PageShell content={content} title={content.title} lede={content.lede} className="contact">
      <section>
        <a className="contact-email" href={content.email.href}>{content.email.label}</a>
        <p className="fine">{content.place}</p>
      </section>
    </PageShell>
  );
}
