import { skills } from '../data/content';
import Reveal from './Reveal';
import StaggerReveal from './StaggerReveal';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="div" className="skills-card">
          <div className="skills-card__heading section-heading-row">
            <i className="hn hn-code heading-icon heading-icon--invert" aria-hidden="true" />
            <h2 className="section-heading">{skills.heading}</h2>
          </div>

          <div className="skills-card__groups">
            {skills.groups.map((group) => (
              <div className="skills-group" key={group.label}>
                <h3>{group.label}</h3>
                <StaggerReveal as="ul" stagger={0.05} blur>
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </StaggerReveal>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
