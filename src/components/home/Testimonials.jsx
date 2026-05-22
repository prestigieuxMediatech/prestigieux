import { testimonials } from '../../data/testimonials';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section className="testimonials section section--ivory">
      <div className="container">
        <SectionHeading
          eyebrow="Client Love"
          title="What our partners say"
          align="center"
        />

        <div ref={ref} className="testimonials__grid reveal">
          {testimonials.map((item, i) => (
            <blockquote
              key={item.name}
              className={`testimonial-card reveal-delay-${(i % 3) + 1}`}
            >
              <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-card__avatar" aria-hidden="true">
                  {item.initial}
                </span>
                <div>
                  <cite>{item.name}</cite>
                  <span>{item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
