import OrbitVisual from "../OrbitVisual";

import {
  Hero,
  HeroContent,
  Eyebrow,
  Title,
  Description,
  Stats,
  Stat,
  StatNumber,
  StatLabel,
} from "./styles";

const SkillsHero = ({
  totalSkills,
  categoryCount,
}) => {
  return (
    <Hero>

      <HeroContent>

        <Eyebrow>
          <span />
          WHAT I WORK WITH
        </Eyebrow>

        <Title>
          Skills & Technologies
        </Title>

        <Description>
          A practical foundation across modern
          frontend, backend, databases, cloud and
          development tools. I focus on using the
          right technology to solve real problems.
        </Description>

        <Stats>

          <Stat>
            <StatNumber>
              {totalSkills}+
            </StatNumber>

            <StatLabel>
              Technologies
            </StatLabel>
          </Stat>

          <Stat>
            <StatNumber>
              {categoryCount}
            </StatNumber>

            <StatLabel>
              Skill Areas
            </StatLabel>
          </Stat>

          <Stat>
            <StatNumber>
              MERN
            </StatNumber>

            <StatLabel>
              Core Stack
            </StatLabel>
          </Stat>

        </Stats>

      </HeroContent>

      <OrbitVisual />

    </Hero>
  );
};

export default SkillsHero;