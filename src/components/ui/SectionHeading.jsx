import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SectionHeading.css';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const ref = useScrollReveal();

  return (
    <header
      ref={ref}
      className={`section-heading reveal section-heading--${align} ${light ? 'section-heading--light' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </header>
  );
}
