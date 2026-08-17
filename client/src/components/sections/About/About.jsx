import {
  AboutSection,
  AboutHeader,
  SectionLabel,
  SectionTitle,
  SectionDescription,
  AboutMain,
} from "./styles";

import AboutIntro from "./AboutIntro";
import AboutProfile from "./AboutProfile";
import TechStack from "./TechStack";

const About = () => {
  return (
    <AboutSection id="about">

      <AboutHeader>
        <SectionLabel>ABOUT ME</SectionLabel>

        <SectionTitle>
          Get to <span>know me</span>
        </SectionTitle>

        <SectionDescription>
          Here's a quick snapshot of who I am, what I do,
          and what I love building.
        </SectionDescription>
      </AboutHeader>

      <AboutMain>
        <AboutIntro />
        <AboutProfile />
      </AboutMain>

      <TechStack />

    </AboutSection>
  );
};

export default About;