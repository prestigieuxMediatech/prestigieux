import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/faq';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HomeFAQ.css';

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useScrollReveal();

  return (
    <section className="home-faq section">
      <div className="container home-faq__grid">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions founders ask us"
          description="Clear answers before you commit — book a free strategy session anytime."
        />
        <div ref={ref} className="home-faq__list reveal">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className={`home-faq__item ${openIndex === index ? 'home-faq__item--open' : ''}`}
            >
              <button
                type="button"
                className="home-faq__trigger"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="home-faq__icon" aria-hidden="true" />
              </button>
              <div className="home-faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
          <Link to="/contact" className="home-faq__link">
            Still have questions? Talk to our team →
          </Link>
        </div>
      </div>
    </section>
  );
}
