import {
  Hero,
  HeroContent,
  Eyebrow,
  Title,
  Highlight,
  Description,
  Stats,
  Stat,
  StatNumber,
  StatLabel,
  Visual,
  Glow,
  CoreOrb,
  Orbit,
  OrbitItem,
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
          Skills That
          <br />
          <Highlight>
            Power My Work
          </Highlight>
        </Title>

        <Description>
          A practical foundation across modern frontend,
          backend, databases, cloud and development tools.
          I focus on using the right technology to solve
          real problems.
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

      <Visual>

        <Glow />

        <CoreOrb>
          <span>
            &lt;/&gt;
          </span>
        </CoreOrb>

        <Orbit>
          <OrbitItem $position="top">
            Build
          </OrbitItem>

          <OrbitItem $position="right">
            Scale
          </OrbitItem>

          <OrbitItem $position="bottom">
            Deploy
          </OrbitItem>
        </Orbit>

      </Visual>
    </Hero>
  );
};

export default SkillsHero;