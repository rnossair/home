'use client';

import { useEffect, useState } from 'react';

function formatUpdatedAt(dateString) {
  const date = new Date(dateString);
  const diffMs = Date.now() - date.getTime();
  const hours = Math.trunc(diffMs / 1000 / 60 / 60);

  if (hours < 24) {
    if (hours < 1) {
      return 'just now';
    }

    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span>{project.language || 'Code'}</span>
        <span>{project.stargazers_count ?? 0} stars</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description || 'No description was provided for this repository.'}</p>
      <div className="project-meta">
        <span>Updated {formatUpdatedAt(project.pushed_at)}</span>
      </div>
      <div className="project-actions">
        <a href={project.html_url} target="_blank" rel="noreferrer">
          Repository
        </a>
        <a
          href={`${project.html_url}/archive/refs/heads/${project.default_branch || 'main'}.zip`}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <article className="project-card project-card-skeleton" aria-hidden="true">
      <div className="skeleton skeleton-line short" />
      <div className="skeleton skeleton-line" />
      <div className="skeleton skeleton-block" />
      <div className="skeleton skeleton-line short" />
    </article>
  );
}

export default function ProjectsSection({ site }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${site.projects.username}/repos?sort=updated&direction=desc`
        );
        const repos = await response.json();

        const picked = Array.isArray(repos)
          ? [...repos].filter((repo) => !repo.fork).slice(0, site.projects.recentCount)
          : [];

        if (active) {
          setProjects(picked);
        }
      } catch {
        if (active) {
          setProjects([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      active = false;
    };
  }, [site.projects.recentCount, site.projects.username]);

  return (
    <section className="section panel" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>{site.projects.heading}</h2>
      </div>

      <div className="project-grid">
        {loading
          ? Array.from({ length: site.projects.recentCount }).map((_, index) => <SkeletonCard key={index} />)
          : projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
