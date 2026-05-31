import type { ExperienceItem } from "../data/portfolio";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <header className="experience-header">
        <div className="experience-title-wrap">
          <h3 className="experience-role">{item.role}</h3>
          <p className="experience-org">{item.org}</p>
        </div>
        <p className="experience-period">{item.period}</p>
      </header>
      <ul className="experience-details">
        {item.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  );
}
