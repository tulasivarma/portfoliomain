import { useScrolled } from '../hooks/useScrolled';
import './BackToTop.css';

export default function BackToTop() {
  const visible = useScrolled(500);

  return (
    <a
      href="#top"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      aria-label="Back to top"
    >
      <i className="hn hn-chevron-up" aria-hidden="true" />
    </a>
  );
}
