import type { AwardItem } from "../data/portfolio";

type AwardCardProps = {
  award: AwardItem;
};

export default function AwardCard({ award }: AwardCardProps) {
  return (
    <div className="award-item">
      <div className="award-head">
        <p className="award-title">{award.title}</p>
        <span className="award-year">{award.year}</span>
      </div>
      <p className="award-detail">{award.detail}</p>
    </div>
  );
}
