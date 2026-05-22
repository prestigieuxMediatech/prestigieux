import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import './CaseStudies.css';

export default function CaseStudies() {
  const ref = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="case-studies section">
      <div className="container">
        <div className="case-studies__header">
          <SectionHeading
            eyebrow="Selected Work"
            title="Growth stories that compound"
            description="A glimpse into partnerships where strategy, creative, and execution aligned."
          />
          <Button href="/portfolio" variant="ghost" className="case-studies__link">
            View Portfolio →
          </Button>
        </div>

        <div ref={ref} className="case-studies__grid reveal">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/portfolio"
              className={`case-card case-card--${index + 1}`}
            >
              <div className="case-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="case-card__content">
                <span className="case-card__category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.result}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
