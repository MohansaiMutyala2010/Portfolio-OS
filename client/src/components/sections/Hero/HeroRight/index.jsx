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


import profile from "../../../../assets/images/profile.jpg";

const HeroRight = () => {
    
  return (
    <HeroRightContainer>

      <GlowCircle />

      <ProfileCard>
        <ProfileImage
          src={profile}
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