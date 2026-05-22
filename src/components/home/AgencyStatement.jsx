import { homeAgencyStatement } from '../../data/pages';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './AgencyStatement.css';

export default function AgencyStatement() {
  const ref = useScrollReveal();

  return (
    <section className="agency-statement section">
      <div ref={ref} className="container agency-statement__inner reveal">
        <div className="agency-statement__words">
          <span>{homeAgencyStatement.line1}</span>
          <span>{homeAgencyStatement.line2}</span>
          <span className="agency-statement__accent">{homeAgencyStatement.line3}</span>
        </div>
        <p className="agency-statement__sub">{homeAgencyStatement.sub}</p>
        <div className="agency-statement__line" aria-hidden="true" />
      </div>
    </section>
  );
}
