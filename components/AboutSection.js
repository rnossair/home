import Image from 'next/image';

export default function AboutSection({ site }) {
  return (
    <section className="section panel" id="about">
      <div className="section-heading">
        <p className="eyebrow">Introduction</p>
        <h2>{site.about.heading}</h2>
      </div>

      <div className="about-grid">
        <div className="about-image-wrap">
          <Image
            src={site.about.imageHref}
            alt="Rayane Nossair"
            width={560}
            height={560}
            className="about-image"
          />
        </div>
        <div className="about-copy">
          <p>{site.about.message}</p>
          <div className="inline-actions">
            <a className="button primary" href={site.about.resumeHref} target="_blank" rel="noreferrer">
              Open Resume
            </a>
            <a className="button ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
