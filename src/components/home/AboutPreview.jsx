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
            description="Based in Navi Mumbai, Prestigieux is a Digital Marketing Company that helps businesses grow with strategic marketing, creative branding, and modern digital solutions."
          />
          <p className="about-preview__text">
             As an experienced Internet Marketing Company and Digital Growth Agency, we focus on building strong online visibility, attracting the right audience, and delivering measurable business growth through thoughtful, result-driven strategies.
          </p>
          <Button href="/about" variant="outline-dark">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
