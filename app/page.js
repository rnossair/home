import SiteHeader from '../components/SiteHeader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import { site } from '../data/site';

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />

      <SiteHeader site={site} />

      <div className="content-wrap">
        <HeroSection site={site} />
        <AboutSection site={site} />
        <ExperienceSection site={site} />
        <ProjectsSection site={site} />
        <SkillsSection site={site} />
        <ContactSection site={site} />
      </div>

      <footer className="site-footer">
        <p>Built with Next.js</p>
      </footer>
    </main>
  );
}
