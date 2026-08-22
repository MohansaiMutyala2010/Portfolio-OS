import { useNavigate } from "react-router-dom";

import {
  Card,
  ImageWrapper,
  ProjectImage,
  ImageOverlay,
  Status,
  Content,
  Category,
  Title,
  Description,
  Technologies,
  Technology,
  TechnologyIcon,
  TechnologyName,
  CardFooter,
  ViewProject,
} from "./styles";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  const visibleTechnologies =
    project.technologies?.slice(0, 3) || [];

  const remainingTechnologies =
    Math.max(
      project.technologies?.length - 3 || 0,
      0
    );

  return (
    <Card
      type="button"
      onClick={handleClick}
      aria-label={`View ${project.title} project`}
    >
      <ImageWrapper>
        <ProjectImage
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />

        <ImageOverlay />

        {project.status && (
          <Status>
            {project.status}
          </Status>
        )}
      </ImageWrapper>

      <Content>
        {project.category && (
          <Category>
            {project.category}
          </Category>
        )}

        <Title>
          {project.title}
        </Title>

        <Description>
          {project.shortDescription}
        </Description>

        {visibleTechnologies.length > 0 && (
          <Technologies>
            {visibleTechnologies.map(
              (technology) => {
                const Icon = technology.icon;

                return (
                  <Technology
                    key={technology.name}
                  >
                    {Icon && (
                      <TechnologyIcon>
                        <Icon />
                      </TechnologyIcon>
                    )}

                    <TechnologyName>
                      {technology.name}
                    </TechnologyName>
                  </Technology>
                );
              }
            )}

            {remainingTechnologies > 0 && (
              <Technology>
                +{remainingTechnologies}
              </Technology>
            )}
          </Technologies>
        )}

        <CardFooter>
          <ViewProject>
            View Project

            <span>
              ↗
            </span>
          </ViewProject>
        </CardFooter>
      </Content>
    </Card>
  );
};

export default ProjectCard;