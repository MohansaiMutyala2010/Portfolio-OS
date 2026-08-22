import { projects } from "./data";

import ProjectHeader from "./ProjectHeader";
import ProjectGrid from "./ProjectGrid";

import {
  ProjectsPage,
  ProjectsContainer,
} from "./styles";

const Projects = () => {
  return (
    <ProjectsPage>
      <ProjectsContainer>

        <ProjectHeader />

        <ProjectGrid projects={projects} />

      </ProjectsContainer>
    </ProjectsPage>
  );
};

export default Projects;