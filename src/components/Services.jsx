import { services } from '../data/content';
import Reveal from './Reveal';
import StaggerReveal from './StaggerReveal';
import './Services.css';

export default function Services() {
  return (
    <section id="work" className="section services">
      <div className="container">
        <Reveal as="div" className="services__heading section-heading-row">
          <i className="hn hn-briefcase heading-icon" aria-hidden="true" />
          <h2 className="section-heading">{services.heading}</h2>
        </Reveal>

        <StaggerReveal as="div" className="services__grid" blur>
          {services.items.map((item) => (
            <article className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
