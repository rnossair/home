function SkillBar({ skill }) {
  return (
    <div className="skill-row">
      <div className="skill-label-row">
        <span>{skill.name}</span>
        <span>{skill.value}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${skill.value}%` }} />
      </div>
    </div>
  );
}

export default function SkillsSection({ site }) {
  return (
    <section className="section panel" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>{site.skills.heading}</h2>
      </div>

      <div className="skills-grid">
        <div className="skills-card">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {site.skills.technical.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="skills-card">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            {site.skills.soft.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
