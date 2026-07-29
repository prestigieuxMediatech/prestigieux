import { useEffect, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    if (total <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="testimonials section section--ivory">
      <div className="container">
        <SectionHeading
          eyebrow="Client Love"
          title="What our partners say"
          align="center"
        />

        <div ref={ref} className="testimonials__slider reveal">
          <div className="testimonials__viewport">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <blockquote key={item.name} className="testimonial-card testimonials__slide">
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

          <div className="testimonials__controls" aria-label="Testimonials slider controls">
            <button
              type="button"
              className="testimonials__arrow"
              aria-label="Previous review"
              onClick={handlePrev}
            >
              &#8592;
            </button>

            <div className="testimonials__dots" role="tablist" aria-label="Select review">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>

            <button
              type="button"
              className="testimonials__arrow"
              aria-label="Next review"
              onClick={handleNext}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
