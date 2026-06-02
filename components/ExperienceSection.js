import Image from 'next/image';

export default function ExperienceSection({ site }) {
  return (
    <section className="section panel" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Background</p>
        <h2>{site.experiences.heading}</h2>
      </div>

      <div className="experience-list">
        {site.experiences.items.map((item) => (
          <article className="experience-card" key={item.role} tabIndex={0}>
            <div className="experience-logo">
              <Image
                src={item.imageHref}
                alt={item.company}
                fill
                sizes="72px"
                className="experience-logo-image"
              />
            </div>
            <div className="experience-copy">
              <h3>{item.role}</h3>
              <p>{item.date}</p>
            </div>

            {item.responsibilities && (
              <div className="experience-popover" aria-hidden="true">
                <ul>
                  {item.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
