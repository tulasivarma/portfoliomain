import { useRef, useEffect } from 'react';
import gsap, { SCROLL_DEFAULTS } from '../lib/gsapConfig';

const DIRECTIONS = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

export default function StaggerReveal({
  children,
  as: Tag = 'div',
  stagger = 0.15,
  direction = 'up',
  blur = false,
  className,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return undefined;

    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        const vars = {
          opacity: 0,
          duration: 0.8,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            ...SCROLL_DEFAULTS,
          },
        };

        if (direction === 'alternate') {
          vars.x = (i) => (i % 2 === 0 ? -48 : 48);
          vars.y = 24;
        } else {
          const { x, y } = DIRECTIONS[direction] ?? DIRECTIONS.up;
          vars.x = x;
          vars.y = y;
        }

        if (blur) {
          vars.filter = 'blur(10px)';
        }

        gsap.from(container.children, vars);
      });
    }, container);

    return () => ctx.revert();
  }, [stagger, direction, blur]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
