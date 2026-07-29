import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { pageMeta } from '../data/pages';
import { company, images } from '../data/site';
import { coreValues } from '../data/about';
import { usePageMeta } from '../hooks/usePageMeta';
import './Careers.css';

const openings = [
  {
    title: 'Digital Marketing Intern',
    type: 'Internship | Work from Office | Navi Mumbai',
    description:
      'Support paid campaigns, keyword research, basic reporting, and day-to-day marketing execution across platforms.',
  },
  {
    title: 'Social Media Intern',
    type: 'Internship | Work from Office | Navi Mumbai',
    description:
      'Assist with content planning, posting schedules, community engagement, and social media trend research.',
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
            title="Current internships"
            description="We are hiring interns who want to build strong real-world marketing experience."
          />

          <div className="careers-list">
            {openings.map((role) => (
              <article key={role.title} className="career-card">
                <div>
                  <h3>{role.title}</h3>
                  <span className="career-card__type">{role.type}</span>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="careers-note">
            To apply, please email your resume along with a brief introduction, your current
            location, and your area of interest to{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
