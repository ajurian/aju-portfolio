import type { ProjectItem } from "../data/portfolio";
import TagList from "./TagList";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-content">
        <p className="project-title">{project.title}</p>
        <p className="project-summary">{project.summary}</p>
      </div>
      <div className="project-footer">
        <TagList items={project.tags} />
        <div className="project-links">
          <a
            className="link-button"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            className="link-button"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}
