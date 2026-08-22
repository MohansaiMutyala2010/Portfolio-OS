import ProjectCard from "../ProjectCard";

import {
  Grid,
} from "./styles";

const ProjectGrid = ({ projects }) => {
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </Grid>
  );
};

export default ProjectGrid;