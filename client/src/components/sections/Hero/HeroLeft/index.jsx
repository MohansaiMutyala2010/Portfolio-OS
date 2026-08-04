import {
  HeroLeftContainer,
  Greeting,
  Heading,
  Description,
  CTAContainer,
  PrimaryButton,
  SecondaryButton,
  SocialLinks,
  SocialLink,
} from "./styles";

const HeroLeft = () => {
  return (
    <HeroLeftContainer>

      <Greeting>
        👋 Hello, I'm Mohan
      </Greeting>

      <Heading>
        Full-Stack
        <span> Developer</span>
      </Heading>

      <Description>
        I build modern, scalable web applications with
        clean code, thoughtful design, and great user
        experiences.
      </Description>

      <CTAContainer>
        <PrimaryButton>
          View My Work
        </PrimaryButton>

        <SecondaryButton>
          Download Resume
        </SecondaryButton>
      </CTAContainer>

      <SocialLinks>
        <SocialLink href="#" target="_blank">
          GitHub
        </SocialLink>

        <SocialLink href="#" target="_blank">
          LinkedIn
        </SocialLink>

        <SocialLink href="#">
          Email
        </SocialLink>
      </SocialLinks>

    </HeroLeftContainer>
  );
};

export default HeroLeft;