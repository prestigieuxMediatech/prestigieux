import { homeTrustPoints } from '../../data/pages';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TrustPillars.css';

export default function TrustPillars() {
  const ref = useScrollReveal();

  return (
    <section id="trust-pillars" className="trust-pillars section section--ivory">
      <div className="container">
        <p className="trust-pillars__label">What clients trust us for</p>
        <div ref={ref} className="trust-pillars__grid reveal">
          {homeTrustPoints.map((point, i) => (
            <div key={point} className={`trust-pillars__item reveal-delay-${(i % 3) + 1}`}>
              <span className="trust-pillars__icon" aria-hidden="true" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
