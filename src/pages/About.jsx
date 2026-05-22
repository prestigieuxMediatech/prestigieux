import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { pageMeta } from '../data/pages';
import {
  aboutTrustPoints,
  aboutStats,
  leadership,
  coreValues,
  aboutExpertise,
  missionVision,
} from '../data/about';
import { company, images } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const meta = pageMeta.about;
  usePageMeta(meta);
  const storyRef = useScrollReveal();
  const storyVisualRef = useScrollReveal({ threshold: 0.08 });
  const teamRef = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        image={meta.image}
      />

      <section className="about-trust section section--ivory">
        <div className="container">
          <p className="about-trust__label">What clients trust us for</p>
          <ul className="about-trust__list">
            {aboutTrustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-story section">
        <div className="container about-story__grid">
          <div ref={storyRef} className="about-story__content reveal">
            <SectionHeading
              eyebrow="Who We Are"
              title="A focused growth partner for ambitious businesses"
            />
            <p>
              Based in {company.location}, we bring together marketing, branding, product
              thinking, and development so businesses can scale with one aligned team instead of
              scattered vendors.
            </p>
            <p>
              Our approach stays subtle, strategic, and outcome-driven: strong messaging, polished
              execution, and systems that help brands look premium while performing better.
            </p>
            <Button href="/contact" variant="primary">
              Work With Us
            </Button>
          </div>
          <div ref={storyVisualRef} className="about-story__visual reveal reveal-delay-2">
            <div className="about-story__image-main">
              <img src={images.workspace} alt="Collaborative workspace" loading="lazy" />
            </div>
            <div className="about-story__image-accent">
              <img src={images.team} alt="Team collaboration" loading="lazy" />
            </div>
            <div className="about-story__badge">
              <span className="about-story__badge-label">MediaTech</span>
              <strong>Growth Partner</strong>
            </div>
            <ul className="about-story__highlights" aria-label="Key strengths">
              {aboutTrustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="about-stats section section--dark text-light">
        <div className="container">
          <SectionHeading eyebrow="By the Numbers" title="Outcomes that speak" align="center" light />
          <div className="about-stats__grid">
            {aboutStats.map((item) => (
              <div key={item.label} className="about-stats__item">
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mv section section--ivory">
        <div className="container about-mv__grid">
          <article className="about-mv__card">
            <span className="eyebrow">Mission</span>
            <h3>{missionVision.mission.title}</h3>
            <p>{missionVision.mission.text}</p>
          </article>
          <article className="about-mv__card">
            <span className="eyebrow">Vision</span>
            <h3>{missionVision.vision.title}</h3>
            <p>{missionVision.vision.text}</p>
          </article>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind every growth decision"
            description="Strategists, creatives, and operators working closely together so each brand gets thoughtful execution."
            align="center"
          />
          <div ref={teamRef} className="about-team__grid reveal">
            {leadership.map((person) => (
              <article key={person.name} className="about-team__card">
                <span className="about-team__role">{person.role}</span>
                <h3>{person.name}</h3>
                <p>{person.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Core Values"
            title="How we like to work"
            description="Clear, premium, and dependable for both your team and your audience."
            align="center"
          />
          <div className="about-values__grid">
            {coreValues.map((item) => (
              <article key={item.title} className="about-values__card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-expertise section">
        <div className="container about-expertise__grid">
          <div className="about-expertise__image">
            <img src={images.about} alt="Strategy session" loading="lazy" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Expertise"
              title="Strategy, design, and technology — unified"
            />
            <p className="about-expertise__intro">
              We combine creative thinking with structured execution, ensuring every solution is
              scalable, measurable, and aligned with long-term growth.
            </p>
            <ul className="about-expertise__list">
              {aboutExpertise.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
