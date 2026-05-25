import type { Project } from './App'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="ex-card" style={{ padding: '1.5em', borderRadius: '.725em', flexDirection: 'column' }}>
      <a href={project.link || undefined} target="_blank" rel="noreferrer">
        <h3 style={{ margin: '0' }}>{project.name} {project.link && '🔗'}</h3>
      </a>
      <p style={{ fontSize: 'unset' }}>{project.desc}</p>
      <div className="ex-skills" style={{ gap: '.375em', fontSize: 'smaller' }}>
        {project.tech.map((skill) => (
          <div className="skill" key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
