import { useMemo, useState } from 'react';
import { faqs } from '../../data/faq';
import { company } from '../../data/site';
import './FloatingSupport.css';

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.2 3.8A11.2 11.2 0 0 0 2.6 17.2L1 23l6-1.6a11.2 11.2 0 0 0 5 1.2h.1c6.2 0 11.2-5 11.2-11.2 0-3-1.2-5.8-3.3-7.8zm-8 16.9h-.1a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.6 1 1-3.5-.2-.3a9.2 9.2 0 1 1 7.9 4.3zm5-6.8c-.3-.1-1.9-.9-2.2-1-.3-.1-.5-.1-.8.1l-.6.8c-.2.2-.3.2-.6.1-1.8-.9-3.2-3-3.3-3.2-.2-.3 0-.5.1-.6l.4-.5.2-.4a.6.6 0 0 0 0-.5l-1-2.4c-.2-.5-.5-.5-.7-.5h-.6c-.3 0-.7.2-.9.5a3.8 3.8 0 0 0-1.2 2.8c0 1.7 1.2 3.4 1.3 3.6.2.2 2.4 3.7 5.9 5.2a7 7 0 0 0 2 .7 5 5 0 0 0 2.2-.2c.7-.2 1.9-.9 2.2-1.8.3-.8.3-1.6.2-1.8 0-.1-.2-.2-.5-.4z"
      />
    </svg>
  );
}

function ChatGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3C6.5 3 2 6.8 2 11.5c0 2.4 1.2 4.6 3.2 6.2L4 22l4.7-2a12 12 0 0 0 3.3.5c5.5 0 10-3.8 10-8.5S17.5 3 12 3zm-5 8h10v1.8H7V11zm0-3h10v1.8H7V8zm0 6h6.5v1.8H7V14z"
      />
    </svg>
  );
}

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const whatsappHref = useMemo(() => `https://wa.me/${company.whatsapp}`, []);
  const activeFaq = faqs[selectedQuestion];

  return (
    <div className="floating-support" aria-label="Quick support">
      {isOpen ? (
        <div className="floating-support__panel" role="dialog" aria-label="FAQ assistant">
          <p className="floating-support__title">Quick questions</p>
          <p className="floating-support__subtitle">Tap a question to view the answer right there.</p>
          <div className="floating-support__featured-answer">
            <p className="floating-support__answer-label">Selected Answer</p>
            <h4>{activeFaq?.question}</h4>
            <p>{activeFaq?.answer}</p>
          </div>
          <div className="floating-support__questions">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className={`floating-support__item ${
                  selectedQuestion === index ? 'floating-support__item--active' : ''
                }`}
              >
                <button
                  type="button"
                  className={`floating-support__question ${
                    selectedQuestion === index ? 'floating-support__question--active' : ''
                  }`}
                  onClick={() => setSelectedQuestion(index)}
                  aria-expanded={selectedQuestion === index}
                >
                  <span>{item.question}</span>
                  <span className="floating-support__chevron" aria-hidden="true" />
                </button>
                <div className="floating-support__inline-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="floating-support__link">
            Need help right now? Chat on WhatsApp
          </a>
        </div>
      ) : null}

      <button
        type="button"
        className="floating-support__chat-button"
        aria-expanded={isOpen}
        aria-label="Open FAQ assistant"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ChatGlyph />
      </button>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="floating-support__whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppGlyph />
      </a>
    </div>
  );
}
