import { company } from '../../data/site';
import Button from '../ui/Button';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <section className="contact-cta section">
      <div className="container contact-cta__inner">
        <div className="contact-cta__copy">
          <span className="eyebrow">Ready to grow?</span>
          <h2>Ready to grow your brand?</h2>
          <p>Get a free personalised growth strategy. No commitment — we reply within 2 hours, 7 days a week.</p>
        </div>
        <div className="contact-cta__actions">
          <Button href="/contact" variant="primary" size="lg">
            Get Free Strategy
          </Button>
          <Button
            href={`https://wa.me/${company.whatsapp}`}
            variant="outline-dark"
            size="lg"
            style={{color:'black'}}
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}