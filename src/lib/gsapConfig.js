import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Mobile browsers show/hide their address bar while scrolling, which fires a
// resize event and would otherwise trigger a ScrollTrigger.refresh() mid-scrub —
// causing scrub-linked animations to visibly jump/glitch.
ScrollTrigger.config({ ignoreMobileResize: true });

// iOS Safari's elastic/rubber-band overscroll reports erratic scroll positions
// at the top and bottom of the page, which scrub animations follow literally —
// that's the source of the jump that only shows up on Safari iOS (Chrome iOS
// doesn't rubber-band the same way). normalizeScroll replaces native touch
// scroll handling with a consistent one, eliminating that jump.
if (ScrollTrigger.isTouch) {
  ScrollTrigger.normalizeScroll(true);
}

export const SCROLL_DEFAULTS = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

export default gsap;
