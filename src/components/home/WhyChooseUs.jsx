import { whyChooseUs } from '../../data/services';
import { images } from '../../data/site';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const ref = useScrollReveal();

  return (
    <section className="why section section--dark text-light">
      <div className="why__bg">
        <img src={images.strategy} alt="" loading="lazy" aria-hidden="true" />
      </div>
      <div className="container why__inner">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Strategy, design, and technology — unified"
          description="A MediaTech company built at the intersection of strategy, design, and technology — focused on clarity, consistency, and purpose."
          light
        />

        <div ref={ref} className="why__grid reveal">
          {whyChooseUs.map((item, i) => (
            <article key={item.title} className={`why__item reveal-delay-${(i % 3) + 1}`}>
              <span className="why__index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
