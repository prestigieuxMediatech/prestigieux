import { useEffect, useMemo, useState } from 'react';
import { sendEmailJS } from '../../lib/emailjs';
import './LaunchBriefPopup.css';

const focusAreas = [
  'Brand Refresh',
  'Lead Generation',
  'Website Rebuild',
  'SEO Growth',
  'Social Presence',
  'Launch Campaign',
];

const brandMoods = [
  { id: 'bold', label: 'Bold & Premium', accent: 'high-impact' },
  { id: 'warm', label: 'Warm & Human', accent: 'relatable' },
  { id: 'minimal', label: 'Minimal & Clean', accent: 'elegant' },
];

const contactModes = ['Call Back', 'WhatsApp', 'Email Summary'];

function getPaceLabel(value) {
  if (value <= 4) return 'Fast rollout';
  if (value <= 8) return 'Balanced rollout';
  return 'Deliberate rollout';
}

export default function LaunchBriefPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFocus, setSelectedFocus] = useState(['Website Rebuild']);
  const [deliveryWeeks, setDeliveryWeeks] = useState(6);
  const [mood, setMood] = useState('bold');
  const [contactMode, setContactMode] = useState('Call Back');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const paceLabel = useMemo(() => getPaceLabel(deliveryWeeks), [deliveryWeeks]);

  function toggleFocus(area) {
    setSelectedFocus((prev) => {
      if (prev.includes(area)) {
        return prev.length === 1 ? prev : prev.filter((item) => item !== area);
      }

      return [...prev, area];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const needsPhone = contactMode === 'Call Back' || contactMode === 'WhatsApp';
    const needsEmail = contactMode === 'Email Summary';

    if (!fullName.trim()) return;
    if (needsPhone && !phone.trim()) return;
    if (needsEmail && !email.trim()) return;

    const cleanedEmail = email.trim();
    const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = validEmailPattern.test(cleanedEmail);

    const payload = {
      from_name: fullName.trim(),
      reply_to: isEmailValid ? cleanedEmail : 'no-reply@example.com',
      
      email_display: cleanedEmail || 'Not provided',
      phone: phone.trim() || 'Not provided',
      service: 'Popup Enquiry',
      message: `Contact mode: ${contactMode}\nFocus areas: ${selectedFocus.join(', ')}\nTimeline: ${deliveryWeeks} weeks (${paceLabel})\nBrand mood: ${brandMoods.find((item) => item.id === mood)?.label || mood}`,
      contact_mode: contactMode,
      focus_areas: selectedFocus.join(', '),
      delivery_timeline: `${deliveryWeeks} weeks (${paceLabel})`,
      brand_mood: brandMoods.find((item) => item.id === mood)?.label || mood,
      source: 'Website Load Popup',
    };

    setIsSending(true);
    setSubmitError('');

    sendEmailJS('popup', payload)
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        const message = error?.message?.trim();
        setSubmitError(message || 'Could not send your brief right now. Please verify EmailJS setup.');
        // eslint-disable-next-line no-console
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  if (!isOpen) return null;

  return (
    <div className="launch-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="launch-popup-title">
      <div className="launch-popup-shell">
        <button
          className="launch-popup-close"
          type="button"
          aria-label="Close pop up"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>

        {!isSubmitted ? (
          <form className="launch-popup-form" onSubmit={handleSubmit}>
            <p className="launch-popup-eyebrow">New Client Priority Lane</p>
            <h2 id="launch-popup-title">Shape Your Project In 30 Seconds</h2>
            <p className="launch-popup-subtitle">
              Pick your preferences and we will align the right strategy before our first conversation.
            </p>

            <section className="launch-popup-block">
              <h3>1) What should this project focus on?</h3>
              <div className="launch-chip-grid">
                {focusAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    className={`launch-chip ${selectedFocus.includes(area) ? 'is-active' : ''}`}
                    onClick={() => toggleFocus(area)}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </section>

            <section className="launch-popup-block">
              <h3>2) How fast do you want delivery?</h3>
              <div className="launch-slider-wrap">
                <input
                  type="range"
                  min="2"
                  max="12"
                  value={deliveryWeeks}
                  onChange={(event) => setDeliveryWeeks(Number(event.target.value))}
                  aria-label="Delivery timeline in weeks"
                />
                <div className="launch-slider-meta">
                  <span>{deliveryWeeks} weeks</span>
                  <span>{paceLabel}</span>
                </div>
              </div>
            </section>

            <section className="launch-popup-block">
              <h3>3) Pick the brand personality you prefer</h3>
              <div className="launch-mood-grid">
                {brandMoods.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`launch-mood-card ${mood === option.id ? 'is-active' : ''}`}
                    onClick={() => setMood(option.id)}
                  >
                    <strong>{option.label}</strong>
                    <span>{option.accent}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="launch-popup-block">
              <h3>4) Preferred first response format</h3>
              <div className="launch-contact-switch">
                {contactModes.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    className={contactMode === mode ? 'is-active' : ''}
                    onClick={() => setContactMode(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </section>

            <section className="launch-popup-block">
              <h3>5) How should we reach you?</h3>
              <div className="launch-contact-fields">
                <label className="launch-field">
                  <span>Your Name</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                  />
                </label>

                {(contactMode === 'Call Back' || contactMode === 'WhatsApp') && (
                  <label className="launch-field">
                    <span>{contactMode === 'WhatsApp' ? 'WhatsApp Number' : 'Phone Number'}</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      required
                    />
                  </label>
                )}

                {contactMode === 'Email Summary' && (
                  <label className="launch-field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </label>
                )}
              </div>
            </section>

            <div className="launch-popup-actions">
              <button type="button" className="launch-secondary-btn" onClick={() => setIsOpen(false)}>
                Skip For Now
              </button>
              <button type="submit" className="launch-primary-btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send My Brief'}
              </button>
            </div>
            {submitError && <p className="launch-submit-error">{submitError}</p>}
          </form>
        ) : (
          <div className="launch-popup-success">
            <p className="launch-popup-eyebrow">Brief Captured</p>
            <h2>Perfect. We already have your direction.</h2>
            <p>
              Your project choices are in. Our team will respond using <strong>{contactMode}</strong> flow.
            </p>
            <button type="button" className="launch-primary-btn" onClick={() => setIsOpen(false)}>
              Continue To Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

