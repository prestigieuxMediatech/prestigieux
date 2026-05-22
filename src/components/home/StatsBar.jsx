import { stats } from '../../data/site';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './StatsBar.css';

export default function StatsBar() {
  const ref = useScrollReveal();

  return (
    <section className="stats-bar" aria-label="Company metrics">
      <div ref={ref} className="stats-bar__inner container reveal">
        {stats.map((item, i) => (
          <div key={item.label} className={`stats-bar__item reveal-delay-${(i % 3) + 1}`}>
            <span className="stats-bar__value">{item.value}</span>
            <span className="stats-bar__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
