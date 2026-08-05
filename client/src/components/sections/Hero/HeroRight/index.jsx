import {
  HeroRightContainer,
  GlowCircle,
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileRole,
  ExperienceCard,
  ProjectsCard,
  TechCard,
  CodeCard,
} from "./styles";

const HeroRight = () => {
    console.log("HeroRight Rendered");
  return (
    <HeroRightContainer>

      <GlowCircle />

      <ProfileCard>
        <ProfileImage
          src="https://placehold.co/220x220"
          alt="Profile"
        />

        <ProfileName>
          Mohan Sai
        </ProfileName>

        <ProfileRole>
          Full Stack Developer
        </ProfileRole>
      </ProfileCard>

      <ExperienceCard>
        <h2>3+</h2>
        <p>Years Experience</p>
      </ExperienceCard>

      <ProjectsCard>
        <h2>20+</h2>
        <p>Projects Built</p>
      </ProjectsCard>

      <TechCard>
        React • Node • PostgreSQL
      </TechCard>

      <CodeCard>
        {"<Developer />"}
      </CodeCard>

    </HeroRightContainer>
  );
};

export default HeroRight;