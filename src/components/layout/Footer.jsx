import { Link } from 'react-router-dom';
import { company, navLinks, footerServices, socialLinks } from '../../data/site';
import logo from '../../assets/logo.png';
import SocialIcon from '../ui/SocialIcon';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt={company.name} width={180} height={54} />
          </Link>
          <p className="footer__tagline">
            ROI-driven digital growth for brands that demand excellence.
          </p>
          <div className="footer__social">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="footer__social-link"
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {footerServices.map((service) => (
              <li key={service}>
                <Link to="/services">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4>Contact</h4>
          <address>
            <p>{company.location}</p>
            {company.phone.map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </p>
            ))}
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </address>

          <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email for newsletter
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              aria-label="Newsletter email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          © {currentYear} {company.legalName}. All rights reserved.
        </p>
        <div className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
