import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { pageMeta } from '../data/pages';
import Button from '../components/ui/Button';
import { usePageMeta } from '../hooks/usePageMeta';
import './Portfolio.css';

export default function Portfolio() {
  const meta = pageMeta.portfolio;
  usePageMeta(meta);

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        image={meta.image}
      />

      <section className="portfolio-intro section section--ivory">
        <div className="container portfolio-intro__inner">
          <p>
            Every engagement starts with clarity — then we execute across ads, web, content, and
            brand until the numbers move. Here is a sample of outcomes our partners have achieved.
          </p>
        </div>
      </section>

      <section className="portfolio-page section">
        <div className="container portfolio-page__grid">
          {projects.map((project) => (
            <article key={project.id} className="portfolio-item">
              <div className="portfolio-item__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="portfolio-item__content">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-cta section">
        <div className="container portfolio-cta__inner">
          <SectionHeading
            eyebrow="Your Turn"
            title="Your brand could be next"
            description="Book a free strategy session and we will map a growth plan tailored to your market."
            align="center"
          />
          <Button href="/contact" variant="primary" size="lg">
            Start a Project
          </Button>
        </div>
      </section>
    </>
  );
}
