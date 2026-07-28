import { useState } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { nav, site } from '../data/content';
import logo from '../assets/images/logo.svg';
import './Header.css';

export default function Header() {
  const scrolled = useScrolled(120);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--open' : ''}`}
    >
      <div className="header__inner">
        <a
          href="#top"
          className="header__logo"
          aria-label={`${site.displayName} — home`}
          onClick={closeMenu}
        >
          <img src={logo} alt={site.displayName} />
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} download={item.download || undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`hn ${menuOpen ? 'hn-window-close' : 'hn-bars'}`} aria-hidden="true" />
        </button>
      </div>

      <nav className="header__mobile-nav" aria-label="Mobile">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} download={item.download || undefined} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
