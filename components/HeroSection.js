import Image from 'next/image';

export default function HeroSection({ site }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{site.role}</p>
        <h1>{site.name}</h1>
        <p className="hero-text">{site.intro}</p>

        <div className="hero-actions">
          <a className="button primary" href="#about">
            More about me
          </a>
          <a className="button secondary" href={site.about.resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        <div className="social-links" aria-label="Social links">
          {site.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span className="social-dot" aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="profile-card">
          <Image src={site.about.imageHref} alt="Portrait of Rayane Nossair" width={420} height={420} priority />
        </div>
      </div>
    </section>
  );
}
