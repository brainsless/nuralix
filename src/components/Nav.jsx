import { useId } from 'react';
import Wordmark from './Wordmark.jsx';

function SectionLinks({ links }) {
  return links.map((link) => (
    <a key={link.href} href={link.href}>{link.label}</a>
  ));
}

// Language, account and secondary action. Shown inline on wide screens and inside the menu on narrow ones.
function Actions({ nav }) {
  return (
    <>
      {nav.switch && (
        <a className="lang" href={nav.switch.href} lang={nav.switch.lang}>{nav.switch.label}</a>
      )}
      {nav.account?.map((link) => (
        <a key={link.href} href={link.href}>{link.label}</a>
      ))}
      {nav.secondary && (
        <a className="button quiet" href={nav.secondary.href}>{nav.secondary.label}</a>
      )}
    </>
  );
}

export default function Nav({ nav }) {
  const menuId = useId();

  // Following a link inside the menu leaves it open by default; in-page links need it closed.
  const closeOnLink = (event) => {
    if (event.target.closest('a')) event.currentTarget.hidePopover();
  };

  return (
    <header className="nav">
      <Wordmark href={nav.home.href} label={nav.home.label} />

      <nav className="nav-links" aria-label={nav.sectionsLabel}>
        <SectionLinks links={nav.links} />
      </nav>

      <div className="nav-end">
        <div className="nav-actions">
          <Actions nav={nav} />
        </div>
        <a className="button" href={nav.cta.href}>{nav.cta.label}</a>
        <button type="button" className="menu-toggle" popoverTarget={menuId}>{nav.menuLabel}</button>
      </div>

      <nav id={menuId} className="menu" popover="auto" aria-label={nav.menuLabel} onClick={closeOnLink}>
        <SectionLinks links={nav.links} />
        <Actions nav={nav} />
      </nav>
    </header>
  );
}
