import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navLinks, company } from '../../data/site';
import logo from '../../assets/logo.png';
import Button from '../ui/Button';
import './Header.css';

function MobileMenu({ open, onClose, links }) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="mobile-menu__backdrop"
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                  }
                  end={link.path === '/'}
                  onClick={onClose}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <Button href="/contact" variant="primary" size="lg" className="mobile-menu__cta">
            Contact Us
          </Button>
          <a href={`tel:${company.phone[0].replace(/\s/g, '')}`} className="mobile-menu__phone">
            {company.phone[0]}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Header({ transparent = false }) {
  const scrolled = useScrollPosition(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const overlayMode = transparent && isHome && !scrolled && !menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const headerClass = [
    'header',
    overlayMode ? 'header--transparent' : 'header--solid',
    scrolled ? 'header--scrolled' : '',
    menuOpen ? 'header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="header__inner container">
          <Link
            to="/"
            className="header__logo"
            aria-label={`${company.name} home`}
            onClick={() => menuOpen && setMenuOpen(false)}
          >
            <img
              src={logo}
              alt={company.name}
              className="header__logo-img"
              width={220}
              height={64}
            />
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `header__link ${isActive ? 'header__link--active' : ''}`
                    }
                    end={link.path === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <Button href="/contact" variant="primary" size="md" className="header__cta">
              Contact Us
            </Button>
            <button
              type="button"
              className={`header__menu-btn ${menuOpen ? 'header__menu-btn--close' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
