import { useRef, useEffect } from 'react';
import { about } from '../data/content';
import gsap from '../lib/gsapConfig';
import BlurReveal from './BlurReveal';
import './About.css';

export default function About() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to(el, {
          maxWidth: '100vw',
          borderRadius: '0px',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section">
      <div ref={cardRef} className="about-card">
        <div className="about-card__inner">
          <div className="about-card__heading section-heading-row">
            <i className="hn hn-info-circle heading-icon heading-icon--invert" aria-hidden="true" />
            <h2 className="section-heading">{about.heading}</h2>
          </div>

          <BlurReveal as="div" className="about-card__body" scrub>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </BlurReveal>

          <div className="about-card__brings">
            <h3>{about.whatIBring.heading}</h3>
            <p>{about.whatIBring.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
