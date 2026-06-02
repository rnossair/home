export default function ContactSection({ site }) {
  return (
    <section className="section contact-panel" id="contact">
      <div className="section-heading centered">
        <p className="eyebrow">Reach Out</p>
        <h2>{site.contact.heading}</h2>
      </div>

      <p className="contact-copy">
        {site.contact.message} <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </p>
    </section>
  );
}
