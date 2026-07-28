import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Mobile browsers show/hide their address bar while scrolling, which fires a
// resize event and would otherwise trigger a ScrollTrigger.refresh() mid-scrub —
// causing scrub-linked animations to visibly jump/glitch.
ScrollTrigger.config({ ignoreMobileResize: true });

export const SCROLL_DEFAULTS = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

export default gsap;
