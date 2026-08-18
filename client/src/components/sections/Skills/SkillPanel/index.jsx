import {
  Panel,
  PanelHeader,
  PanelHeading,
  CategoryIcon,
  CategoryInfo,
  CategoryTitle,
  CategoryDescription,
  SkillsGrid,
  SkillItem,
  SkillIcon,
  SkillName,
} from "./styles";

const SkillPanel = ({ category }) => {
  const CategoryIconComponent = category.icon;

  return (
    <Panel key={category.id}>

      <PanelHeader>

        <PanelHeading>

          <CategoryIcon>
            <CategoryIconComponent />
          </CategoryIcon>

          <CategoryInfo>
            <CategoryTitle>
              {category.name}
            </CategoryTitle>

            <CategoryDescription>
              {category.description}
            </CategoryDescription>
          </CategoryInfo>

        </PanelHeading>

      </PanelHeader>

      <SkillsGrid>
        {category.skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <SkillItem key={skill.id}>

              <SkillIcon>
                <Icon />
              </SkillIcon>

              <SkillName>
                {skill.name}
              </SkillName>

            </SkillItem>
          );
        })}
      </SkillsGrid>

    </Panel>
  );
};

export default SkillPanel;