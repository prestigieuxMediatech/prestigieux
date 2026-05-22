import { images } from '../../data/site';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import './AboutPreview.css';

export default function AboutPreview() {
  const imageRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="about-preview" className="about-preview section section--ivory">
      <div className="container about-preview__grid">
        <div ref={imageRef} className="about-preview__visual reveal">
          <div className="about-preview__image-main">
            <img src={images.about} alt="Executive strategy meeting" loading="lazy" />
          </div>
          <div className="about-preview__image-accent">
            <img src={images.office} alt="Modern corporate architecture" loading="lazy" />
          </div>
          <div className="about-preview__badge">
            <span>Since</span>
            <strong>2019</strong>
          </div>
        </div>

        <div ref={contentRef} className="about-preview__content reveal reveal-delay-2">
          <SectionHeading
            eyebrow="Who We Are"
            title="A focused growth partner for ambitious businesses"
            description="Based in Navi Mumbai, we bring together marketing, branding, product thinking, and development so businesses can scale with one aligned team."
          />
          <p className="about-preview__text">
            Our approach stays subtle, strategic, and outcome-driven — strong messaging,
            polished execution, and systems that help brands look premium while performing better.
          </p>
          <Button href="/about" variant="outline-dark">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
