import {
  ProfileCard,
  ProfileGlow,
  ProfileImage,
  ProfileName,
  ProfileRole,
  StatsContainer,
  Stat,
  StatNumber,
  StatLabel,
} from "./styles";

import profile from "../../../../assets/images/profile.jpg";

const AboutProfile = () => {
  return (
    <ProfileCard>

      <ProfileGlow />

      <ProfileImage
        src={profile}
        alt="Mohan Sai"
      />

      <ProfileName>
        Mohan Sai
      </ProfileName>

      <ProfileRole>
        Full Stack Developer
      </ProfileRole>

      <StatsContainer>

        <Stat>
          <StatNumber>3+</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </Stat>

        <Stat>
          <StatNumber>20+</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </Stat>

        <Stat>
          <StatNumber>10+</StatNumber>
          <StatLabel>Technologies</StatLabel>
        </Stat>

      </StatsContainer>

    </ProfileCard>
  );
};

export default AboutProfile;