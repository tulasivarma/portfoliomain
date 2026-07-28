import { useRef, useEffect } from 'react';
import { hero } from '../data/content';
import { useTypewriter } from '../hooks/useTypewriter';
import heroPortrait from '../assets/images/hero-portrait.png';
import StaggerReveal from './StaggerReveal';
import gsap from '../lib/gsapConfig';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Hero.css';

export default function Hero() {
  const typedRole = useTypewriter(hero.roles);
  const heroRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const portraitEl = portraitRef.current;
    if (!heroEl || !portraitEl) return undefined;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        '(max-width: 900px) and (prefers-reduced-motion: no-preference)',
        () => {
          let endMargin = -portraitEl.offsetHeight * 2;

          const trigger = ScrollTrigger.create({
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onRefresh: () => {
              endMargin = -portraitEl.offsetHeight * 2;
            },
            onUpdate: (self) => {
              const margin = gsap.utils.interpolate(-200, endMargin, self.progress);
              heroEl.style.marginBottom = `${margin}px`;
            },
          });

          return () => {
            trigger.kill();
            heroEl.style.marginBottom = '';
          };
        }
      );
    }, heroEl);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>


      <div className="container">
        <StaggerReveal as="div" className="hero__content" stagger={0.1}>
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 className="hero__name section-heading">{hero.name}</h1>

          <p className="hero__role" aria-live="polite">
            {typedRole}
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </p>

          <p className="hero__subheadline">{hero.subheadline}</p>

          <div className="hero__actions">
            <a
              className="pill-btn pill-btn--icon"
              href={hero.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <i className="hn hn-github" aria-hidden="true" />
            </a>
            <a
              className="pill-btn pill-btn--icon"
              href={hero.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="hn hn-linkedin" aria-hidden="true" />
            </a>
            <a className="pill-btn" href={hero.resumeHref} download>
              Resume
            </a>
            <a className="pill-btn" href={hero.projectsHref}>
              View Projects
            </a>
          </div>
        </StaggerReveal>
      </div>
      <div className="hero__portrait" ref={portraitRef}>
        <img
          src={heroPortrait}
          alt="Portrait of Tulasi Ram"
          onLoad={() => ScrollTrigger.refresh()}
        />
      </div>
    </section>
  );
}
