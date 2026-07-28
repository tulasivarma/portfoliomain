import { experience } from '../data/content';
import Reveal from './Reveal';
import StaggerReveal from './StaggerReveal';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal as="div" className="experience__heading section-heading-row">
          <i className="hn hn-badge-check heading-icon" aria-hidden="true" />
          <h2 className="section-heading">{experience.heading}</h2>
        </Reveal>

        <StaggerReveal as="div" className="experience__list" blur>
          {experience.items.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.dates}`}>
              <div className="experience-card__head">
                <h3>{item.role}</h3>
                <span className="experience-card__dates">{item.dates}</span>
              </div>
              <p className="experience-card__company">{item.company}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 24)}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
