import './ScrollIndicator.css';

export default function ScrollIndicator({ target = '#about-preview' }) {
  return (
    <a href={target} className="scroll-indicator" aria-label="Scroll to next section">
      <span className="scroll-indicator__line" />
      <span className="scroll-indicator__text">Scroll</span>
    </a>
  );
}
