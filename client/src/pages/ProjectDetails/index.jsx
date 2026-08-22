import { Link, useParams } from "react-router-dom";

import { projects } from "../../components/sections/Projects/data";

import {
  Page,
  Container,
  BackButton,
  Layout,
  Visual,
  ProjectImage,
  Content,
  MetaRow,
  Category,
  Status,
  Title,
  Description,
  Section,
  SectionTitle,
  FeatureList,
  FeatureItem,
  TechList,
  TechItem,
  TechIcon,
  TechName,
  Actions,
  ActionButton,
} from "./styles";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <Page>
        <Container>
          <BackButton as={Link} to="/projects">
            ← Back to Projects
          </BackButton>

          <NotFoundTitle>
            Project not found
          </NotFoundTitle>

          <NotFoundText>
            The project you're looking for doesn't exist.
          </NotFoundText>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>

        {/* BACK */}

        <BackButton as={Link} to="/projects">
          ← Back to Projects
        </BackButton>


        {/* PROJECT CONTENT */}

        <Layout>

          {/* LEFT SIDE */}

          <Visual>
            <ProjectImage
              src={project.image}
              alt={`${project.title} project preview`}
            />
          </Visual>


          {/* RIGHT SIDE */}

          <Content>

            <MetaRow>

              <Category>
                {project.category}
              </Category>

              <Status>
                {project.status}
              </Status>

            </MetaRow>


            <Title>
              {project.title}
            </Title>


            <Description>
              {project.description ||
                project.shortDescription}
            </Description>


            {/* FEATURES */}

            {project.features?.length > 0 && (
              <Section>

                <SectionTitle>
                  Key Features
                </SectionTitle>

                <FeatureList>
                  {project.features.map(
                    (feature) => (
                      <FeatureItem key={feature}>
                        <span>✦</span>

                        <span>
                          {feature}
                        </span>
                      </FeatureItem>
                    )
                  )}
                </FeatureList>

              </Section>
            )}


            {/* TECHNOLOGIES */}

            {project.technologies?.length > 0 && (
              <Section>

                <SectionTitle>
                  Built With
                </SectionTitle>

                <TechList>
                  {project.technologies.map(
                    (technology) => {
                      const Icon = technology.icon;

                      return (
                        <TechItem
                          key={technology.name}
                        >
                          {Icon && (
                            <TechIcon>
                              <Icon />
                            </TechIcon>
                          )}

                          <TechName>
                            {technology.name}
                          </TechName>
                        </TechItem>
                      );
                    }
                  )}
                </TechList>

              </Section>
            )}


            {/* ACTIONS */}

            <Actions>

              {project.links?.live && (
                <ActionButton
                  as="a"
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                >
                  Live Demo
                  <span>↗</span>
                </ActionButton>
              )}

              {project.links?.github && (
                <ActionButton
                  as="a"
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </ActionButton>
              )}

            </Actions>

          </Content>

        </Layout>

      </Container>
    </Page>
  );
};

export default ProjectDetails;