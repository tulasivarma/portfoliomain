import { useRef, useEffect } from 'react';
import gsap, { SCROLL_DEFAULTS } from '../lib/gsapConfig';

export default function BlurReveal({ children, as: Tag = 'div', delay = 0, scrub = false, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(el, {
          opacity: 0,
          filter: 'blur(10px)',
          duration: 0.9,
          delay,
          ease: 'power2.out',
          scrollTrigger: scrub
            ? {
                trigger: el,
                start: 'top bottom',
                end: '130% bottom',
                scrub: 1,
              }
            : {
                trigger: el,
                ...SCROLL_DEFAULTS,
              },
        });
      });
    }, el);

    return () => ctx.revert();
  }, [delay, scrub]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
