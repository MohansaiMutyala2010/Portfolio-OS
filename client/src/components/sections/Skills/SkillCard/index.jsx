import {
  Card,
  IconWrapper,
  SkillIcon,
  SkillName,
  Arrow,
} from "./styles";

const SkillCard = ({ skill }) => {
  const SkillIconComponent = skill.icon;

  return (
    <Card>
      <IconWrapper>
        {SkillIconComponent ? (
          <SkillIconComponent />
        ) : (
          <SkillIcon>
            {skill.shortIcon}
          </SkillIcon>
        )}
      </IconWrapper>

      <SkillName>
        {skill.name}
      </SkillName>

      <Arrow>
        ↗
      </Arrow>
    </Card>
  );
};

export default SkillCard;