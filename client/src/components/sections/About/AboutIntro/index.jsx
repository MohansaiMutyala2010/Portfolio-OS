import {
  IntroCard,
  IntroHeader,
  IntroIcon,
  IntroTitle,
  IntroText,
  Signature,
  Highlights,
  HighlightCard,
  HighlightIcon,
  HighlightTitle,
  HighlightText,
} from "./styles";

const AboutIntro = () => {
  return (
    <IntroCard>

      <IntroHeader>
        <IntroIcon>👤</IntroIcon>

        <IntroTitle>
          About Me
        </IntroTitle>
      </IntroHeader>

      <IntroText>
        I'm a passionate Full-Stack Developer who loves
        turning ideas into clean, scalable, and
        user-friendly web applications.
      </IntroText>

      <IntroText>
        I enjoy building modern web applications with
        great user experiences and strong performance.
        Always learning, always building.
      </IntroText>

      <Signature>
        Mohan Sai
      </Signature>

      <Highlights>

        <HighlightCard>
          <HighlightIcon>🚀</HighlightIcon>

          <HighlightTitle>
            Problem Solver
          </HighlightTitle>

          <HighlightText>
            I love solving real-world problems with code.
          </HighlightText>
        </HighlightCard>

        <HighlightCard>
          <HighlightIcon>💻</HighlightIcon>

          <HighlightTitle>
            Clean Code
          </HighlightTitle>

          <HighlightText>
            I write clean, maintainable and efficient code.
          </HighlightText>
        </HighlightCard>

        <HighlightCard>
          <HighlightIcon>💡</HighlightIcon>

          <HighlightTitle>
            Fast Learner
          </HighlightTitle>

          <HighlightText>
            I adapt quickly and love learning new technologies.
          </HighlightText>
        </HighlightCard>

        <HighlightCard>
          <HighlightIcon>👥</HighlightIcon>

          <HighlightTitle>
            Team Player
          </HighlightTitle>

          <HighlightText>
            I enjoy collaborating and building in a team.
          </HighlightText>
        </HighlightCard>

      </Highlights>

    </IntroCard>
  );
};

export default AboutIntro;