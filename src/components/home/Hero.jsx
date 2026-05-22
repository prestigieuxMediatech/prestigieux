import { images, company, stats } from '../../data/site';
import Button from '../ui/Button';
import ScrollIndicator from '../ui/ScrollIndicator';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__media">
        <img src={images.hero} alt="Premium modern corporate workspace" loading="eager" />
        <div className="hero__overlay" />
        <div className="hero__grain" aria-hidden="true" />
      </div>

      <div className="hero__accent" aria-hidden="true" />

      <div className="hero__body container">
        <div className="hero__main">
          <div className="hero__copy">
            <div className="hero__badge-row">
              <span className="hero__badge">ROI-Driven MediaTech Agency</span>
              <span className="hero__location">{company.location}</span>
            </div>
            <h1>
              We Grow Brands
              <em> That Matter</em>
            </h1>
            <p className="hero__sub">
              Performance marketing, lead generation, content, branding, and digital product
              execution — one refined growth partner for ambitious businesses.
            </p>
            <div className="hero__actions">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>

          <div className="hero__aside">
            <ScrollIndicator target="#trust-pillars" />
          </div>
        </div>

        <div className="hero__metrics" aria-label="Key results">
          <div className="hero__metrics-bar">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`hero__metric ${index < stats.length - 1 ? 'hero__metric--divider' : ''}`}
              >
                <span className="hero__metric-value">{item.value}</span>
                <span className="hero__metric-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              Website Development ◆ Meta Ads ◆ Lead Generation ◆ LinkedIn Ads ◆
              Content Creation ◆ YouTube Ads ◆ Mobile Apps ◆ SEO ◆ Brand Identity ◆
              UI/UX Design ◆ Virtual Assistant ◆&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
