import './PageHero.css';

export default function PageHero({ eyebrow, title, description, image, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      {image && (
        <div className="page-hero__bg">
          <img src={image} alt="" aria-hidden="true" />
          <div className="page-hero__overlay" />
        </div>
      )}
      <div className="page-hero__content container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
