import { contact, footer } from '../data/content';
import Reveal from './Reveal';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import './Contact.css';

function CopyableItem({ label, icon, value, href, displayValue }) {
  const { copiedValue, copy } = useCopyToClipboard();
  const isCopied = copiedValue === value;
  const isExternal = href.startsWith('http');

  return (
    <div className="contact-card__item">
      <i className={`hn ${icon} contact-card__label-icon`} aria-hidden="true" />
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        aria-label={label}
      >
        {displayValue}
      </a>
      <button
        type="button"
        className="contact-card__copy"
        onClick={() => copy(value)}
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        <i className={`hn ${isCopied ? 'hn-check' : 'hn-copy'}`} aria-hidden="true" />
      </button>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal as="div" className="contact-card">
          <div className="contact-card__heading section-heading-row">
            <i className="hn hn-envelope heading-icon heading-icon--invert" aria-hidden="true" />
            <h2 className="section-heading">{contact.heading}</h2>
          </div>
          <p className="contact-card__blurb">{contact.blurb}</p>

          <div className="contact-card__grid">
            <CopyableItem
              label="Email"
              icon="hn-envelope"
              value={contact.email}
              href={`mailto:${contact.email}`}
              displayValue={contact.email}
            />
            <CopyableItem
              label="GitHub"
              icon="hn-github"
              value={contact.github}
              href={contact.github}
              displayValue={contact.github.replace('https://', '')}
            />
            <CopyableItem
              label="LinkedIn"
              icon="hn-linkedin"
              value={contact.linkedin}
              href={contact.linkedin}
              displayValue={contact.linkedin.replace('https://', '')}
            />
            <div className="contact-card__item contact-card__item--static">
              <i className="hn hn-location-pin contact-card__label-icon" aria-hidden="true" />
              {contact.location}
            </div>
            <div className="contact-card__item contact-card__item--static contact-card__item--full contact-card__copyright">
              © {new Date().getFullYear()} {footer.name}. All rights reserved.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
