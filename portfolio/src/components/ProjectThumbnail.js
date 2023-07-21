import React from 'react';

function ProjectThumbnail({ project }) {
  return (
    <div className="project-thumbnail" style={{ backgroundColor: project.rowColor }}>
      <img src={project.thumbnail} alt={project.title} />
      <div className="project-description">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
