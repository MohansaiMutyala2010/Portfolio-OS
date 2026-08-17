import SkillCard from "../SkillCard";

import {
  Category,
  CategoryHeader,
  CategoryIcon,
  CategoryTitle,
  CategoryDescription,
  SkillList,
} from "./styles";

const SkillCategory = ({ category }) => {
  const CategoryIconComponent = category.icon;

  return (
    <Category>
      <CategoryHeader>
        <CategoryIcon>
          <CategoryIconComponent />
        </CategoryIcon>

        <CategoryTitle>
          {category.title}
        </CategoryTitle>
      </CategoryHeader>

      <CategoryDescription>
        {category.description}
      </CategoryDescription>

      <SkillList>
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </SkillList>
    </Category>
  );
};

export default SkillCategory;