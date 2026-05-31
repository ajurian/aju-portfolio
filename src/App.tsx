import Section from "./components/Section";
import TagList from "./components/TagList";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import AwardCard from "./components/AwardCard";
import {
  awards,
  experience,
  profile,
  projects,
  techStack,
} from "./data/portfolio";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="lead">{profile.headline}</p>
        </div>
        <div className="hero-meta">
          <div className="meta-block">
            <span className="meta-label">Focus</span>
            <span>{profile.focus}</span>
          </div>
          <div className="meta-block">
            <span className="meta-label">Currently</span>
            <span>{profile.status}</span>
          </div>
        </div>
      </header>

      <Section title="About" subtitle="Snapshot">
        <p className="body">{profile.about}</p>
      </Section>

      <Section title="Tech Stack" subtitle="Toolkit">
        <div className="stack-grid">
          {techStack.map((group) => (
            <div key={group.label} className="stack-card">
              <p className="stack-title">{group.label}</p>
              <TagList items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" subtitle="Timeline">
        <div className="experience-list">
          {experience.map((item) => (
            <ExperienceCard key={item.role} item={item} />
          ))}
        </div>
      </Section>

      <Section title="Recent Projects" subtitle="Selected Work">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Awards & Honors" subtitle="Recognition">
        <div className="awards-list">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </Section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
