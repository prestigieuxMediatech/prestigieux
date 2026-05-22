import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { pageMeta } from '../data/pages';
import { company, images } from '../data/site';
import { coreValues } from '../data/about';
import { usePageMeta } from '../hooks/usePageMeta';
import './Careers.css';

const openings = [
  {
    title: 'Performance Marketing Specialist',
    type: 'Full-time · Navi Mumbai',
    description:
      'Meta, LinkedIn, and YouTube campaign management with ROAS accountability and clear client reporting.',
  },
  {
    title: 'Senior UI/UX Designer',
    type: 'Full-time · Remote / Hybrid',
    description:
      'Figma-led product design for web and mobile — research, prototypes, and design systems that convert.',
  },
  {
    title: 'Content Strategist',
    type: 'Full-time · Navi Mumbai',
    description:
      'Reels, carousels, and editorial content systems for growth brands — creative that performs.',
  },
];

export default function Careers() {
  const meta = pageMeta.careers;
  usePageMeta(meta);

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        image={images.team}
      />

      <section className="careers-culture section section--ivory">
        <div className="container careers-culture__grid">
          {coreValues.slice(0, 2).map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-page section">
        <div className="container">
          <SectionHeading
            eyebrow="Open Roles"
            title="Current opportunities"
            description={`We are always meeting exceptional talent. Send your portfolio and CV to ${company.email}.`}
          />

          <div className="careers-list">
            {openings.map((role) => (
              <article key={role.title} className="career-card">
                <div>
                  <h3>{role.title}</h3>
                  <span className="career-card__type">{role.type}</span>
                  <p>{role.description}</p>
                </div>
                <Button
                  href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                  variant="outline-dark"
                >
                  Apply
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
