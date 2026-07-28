import { projects } from '../data/content';
import Reveal from './Reveal';
import StaggerReveal from './StaggerReveal';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal as="div" className="projects__heading section-heading-row">
          <i className="hn hn-folder-open heading-icon" aria-hidden="true" />
          <h2 className="section-heading">{projects.heading}</h2>
        </Reveal>

        <StaggerReveal as="div" className="projects__list" blur>
          {projects.items.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>

                <ul className="project-card__bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 24)}>{bullet}</li>
                  ))}
                </ul>

                <p className="project-card__role">{project.roleLabel}</p>

                <ul className="project-card__stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {(project.codeUrl || project.demoUrl) && (
                <div className="project-card__actions">
                  {project.codeUrl && (
                    <a className="pill-btn" href={project.codeUrl} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      className="pill-btn pill-btn--solid"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
