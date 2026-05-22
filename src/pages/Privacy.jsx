import PageHero from '../components/ui/PageHero';
import { pageMeta } from '../data/pages';
import { company } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import './Privacy.css';

export default function Privacy() {
  const meta = pageMeta.privacy;
  usePageMeta(meta);

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        compact
      />

      <section className="privacy-page section">
        <div className="container container--narrow privacy-page__content">
          <p className="privacy-page__updated">Last updated: May 2026</p>

          <h2>Information we collect</h2>
          <p>
            When you contact us via forms, email, phone, or WhatsApp, we may collect your name,
            email address, phone number, company details, and project requirements you choose to
            share.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use collected information to respond to inquiries, provide proposals, deliver
            services, improve our offerings, and communicate relevant updates about your project
            or engagement.
          </p>

          <h2>Data sharing</h2>
          <p>
            We do not sell your personal data. Information may be shared with trusted service
            providers (such as hosting or analytics tools) solely to operate our business, under
            appropriate confidentiality obligations.
          </p>

          <h2>Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your data.
            No method of transmission over the internet is 100% secure.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data by contacting{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            {company.legalName}
            <br />
            {company.location}
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
