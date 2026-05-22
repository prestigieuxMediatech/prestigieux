import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import ServiceIcon from '../ui/ServiceIcon';
import Button from '../ui/Button';
import './ServicesPreview.css';

const featured = services.slice(0, 6);

export default function ServicesPreview() {
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="services-preview section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete digital growth services"
          description="From a simple website to a full-stack growth engine — click any discipline to explore how we deliver."
          align="center"
        />

        <div ref={gridRef} className="services-preview__grid reveal">
          {featured.map((service, index) => (
            <Link
              key={service.id}
              to="/services"
              className={`service-card ${index % 3 === 1 ? 'service-card--offset' : ''}`}
            >
              {service.badge && <span className="service-card__badge">{service.badge}</span>}
              <div className="service-card__icon">
                <ServiceIcon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="service-card__link">Learn more</span>
            </Link>
          ))}
        </div>

        <div className="services-preview__cta">
          <Button href="/services" variant="outline-dark">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
