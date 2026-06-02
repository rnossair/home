export default function SiteHeader({ site }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Jump to top">
        <span className="brand-mark">&lt;</span>
        <span className="brand-name">{site.name}</span>
        <span className="brand-mark">/&gt;</span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
