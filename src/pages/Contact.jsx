import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { pageMeta } from '../data/pages';
import { company } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import { sendEmailJS } from '../lib/emailjs';
import './Contact.css';

const serviceOptions = [
  'Website Development',
  'Mobile App Development',
  'Performance Marketing',
  'Lead Generation',
  'Content Creation',
  'SEO & Digital Marketing',
  'Brand Identity',
  'UI/UX Design',
  'Virtual Assistant',
  'Full Package',
];

export default function Contact() {
  const meta = pageMeta.contact;
  usePageMeta(meta);
  const [isSending, setIsSending] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      from_name: formData.get('name')?.toString().trim() ?? '',
      reply_to: formData.get('email')?.toString().trim() ?? '',
      phone: formData.get('phone')?.toString().trim() ?? '',
      service: formData.get('service')?.toString().trim() ?? 'Not selected',
      message: formData.get('message')?.toString().trim() ?? '',
      source: 'Website Contact Form',
    };

    setIsSending(true);
    setSubmitState({ type: '', message: '' });

    try {
      await sendEmailJS('contact', payload);
      setSubmitState({ type: 'success', message: 'Message sent successfully. We will connect with you shortly.' });
      form.reset();
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: 'Message could not be sent right now. Please check EmailJS configuration and try again.',
      });
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        image={meta.image}
      />

      <section className="contact-page section">
        <div className="container contact-page__grid">
          <div className="contact-page__info">
            <h2>We would love to hear from you</h2>
            <p className="contact-page__intro">
              Share your goals and our team will respond with a thoughtful next step, usually within 2 hours
              during business hours.
            </p>

            <div className="contact-page__block">
              <span className="eyebrow">Location</span>
              <p>{company.location}</p>
            </div>
            <div className="contact-page__block">
              <span className="eyebrow">Phone</span>
              {company.phone.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </p>
              ))}
            </div>
            <div className="contact-page__block">
              <span className="eyebrow">Email</span>
              <p>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
            </div>
            <div className="contact-page__block">
              <span className="eyebrow">Business Hours</span>
              <p>8:00 AM - 10:00 PM</p>
              <p>Monday to Sunday</p>
            </div>

            <div className="contact-page__quick">
              <Button href={`https://wa.me/${company.whatsapp}`} variant="primary">
                WhatsApp Us Now
              </Button>
              <Button href={`tel:${company.phone[0].replace(/\s/g, '')}`} variant="outline-dark">
                Call Now
              </Button>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Send us a message</h3>
            <div className="contact-form__row">
              <label>
                <span>Your Name *</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                <span>Email Address *</span>
                <input type="email" name="email" required placeholder="you@company.com" />
              </label>
            </div>
            <label>
              <span>Phone / WhatsApp *</span>
              <input type="tel" name="phone" required placeholder="+91" />
            </label>
            <label>
              <span>Service Interested In</span>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Your Message *</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your business and goals..."
              />
            </label>
            <Button type="submit" variant="primary" size="lg" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message ->'}
            </Button>
            {submitState.message && (
              <p className={`contact-form__status contact-form__status--${submitState.type}`}>
                {submitState.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
