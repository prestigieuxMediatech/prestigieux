import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceIcon from '../components/ui/ServiceIcon';
import Button from '../components/ui/Button';
import { pageMeta } from '../data/pages';
import { services, serviceCategories, serviceProcess } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

export default function Services() {
  const meta = pageMeta.services;
  usePageMeta(meta);
  const [activeCategory, setActiveCategory] = useState('all');
  const gridRef = useScrollReveal({ threshold: 0.05 });
  const processRef = useScrollReveal();

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        image={meta.image}
      />

      <section className="services-intro section section--ivory">
        <div className="container services-intro__inner">
          <p className="services-intro__lead">
            Click any service to understand our process and measurable results — then book a free
            strategy call and we will recommend the right solution for your business.
          </p>
          <div className="services-intro__filters" role="tablist" aria-label="Filter services">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`services-filter ${activeCategory === 'all' ? 'services-filter--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`services-filter ${activeCategory === cat.id ? 'services-filter--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="services-grid-section section">
        <div className="container">
          <div ref={gridRef} className="services-grid reveal">
            {filtered.map((service, index) => (
              <article
                key={service.id}
                className={`service-card-full ${index === 0 && activeCategory === 'all' ? 'service-card-full--featured' : ''}`}
              >
                <div className="service-card-full__top">
                  <div className="service-card-full__icon">
                    <ServiceIcon name={service.icon} />
                  </div>
                  {service.badge && (
                    <span className="service-card-full__badge">{service.badge}</span>
                  )}
                </div>
                <span className="service-card-full__category">
                  {serviceCategories.find((c) => c.id === service.category)?.label}
                </span>
                <h2>{service.title}</h2>
                <p className="service-card-full__summary">{service.summary}</p>
                <p className="service-card-full__desc">{service.description}</p>
                <ul className="service-card-full__highlights">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Button href="/contact" variant="ghost" className="service-card-full__cta">
                  Get recommendation →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process section section--dark text-light">
        <div className="container">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from strategy to scale"
            light
            align="center"
          />
          <div ref={processRef} className="services-process__grid reveal">
            {serviceProcess.map((item, i) => (
              <div key={item.step} className={`services-process__step reveal-delay-${(i % 3) + 1}`}>
                <span className="services-process__num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section section--ivory">
        <div className="container services-cta__card">
          <div>
            <span className="eyebrow">Not sure which service you need?</span>
            <h2>Get a free strategy call</h2>
            <p>We will recommend the right solution for your business — no pressure, no jargon.</p>
          </div>
          <div className="services-cta__actions">
            <Button href="/contact" variant="primary" size="lg">
              Get Free Recommendation
            </Button>
            <Button
              href={`https://wa.me/919987952982?text=Hi%20Prestigieux%20Mediatech,%20I'm%20interested%20in%20your%20services`}
              variant="outline-dark"
              size="lg"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
