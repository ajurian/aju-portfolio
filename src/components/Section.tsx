import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <p className="section-label">{subtitle}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
