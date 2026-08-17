import { exploringSkills } from "../data";

import {
  Section,
  Content,
  Title,
  Description,
  SkillList,
  SkillItem,
  IconWrapper,
} from "./styles";

const Exploring = () => {
  return (
    <Section>
      <Content>
        <Title>
          <span>✦</span>
          Currently Exploring
        </Title>

        <Description>
          Technologies and concepts I am actively
          learning and improving.
        </Description>
      </Content>

      <SkillList>
        {exploringSkills.map((skill) => {
          const SkillIconComponent = skill.icon;

          return (
            <SkillItem key={skill.id}>
              <IconWrapper>
                {SkillIconComponent ? (
                  <SkillIconComponent />
                ) : (
                  skill.shortIcon
                )}
              </IconWrapper>

              <span>
                {skill.name}
              </span>
            </SkillItem>
          );
        })}
      </SkillList>
    </Section>
  );
};

export default Exploring;