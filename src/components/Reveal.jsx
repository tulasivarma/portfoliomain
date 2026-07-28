import { useRef, useEffect } from 'react';
import gsap, { SCROLL_DEFAULTS } from '../lib/gsapConfig';

const DIRECTIONS = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { y: 0, x: -50 },
  right: { y: 0, x: 50 },
};

export default function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const { x, y } = DIRECTIONS[direction] ?? DIRECTIONS.up;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(el, {
          opacity: 0,
          x,
          y,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            ...SCROLL_DEFAULTS,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
