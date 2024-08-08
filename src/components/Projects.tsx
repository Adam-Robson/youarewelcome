import { TProject } from '../lib/types';
import { projects } from '../lib/data';

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project: TProject) => {
        return (
          <li key={project.id} className="project-item">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.icon} alt={project.name} className="project-icon" />
              <span className="project-name">{project.name}</span>
            </a>
          </li>
        );
      })}
    </div>
  )
}
