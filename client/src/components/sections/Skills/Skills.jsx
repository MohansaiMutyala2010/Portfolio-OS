import { useMemo, useState } from "react";

import {
  skillCategories,
  exploringSkills,
} from "./data";

import SkillsHero from "./SkillsHero";
import CategoryTabs from "./CategoryTabs";
import SkillPanel from "./SkillPanel";
import Exploring from "./Exploring";

import {
  SkillsPage,
  SkillsContainer,
  SkillsContent,
} from "./styles";

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState("frontend");

  const activeSkillCategory = useMemo(
    () =>
      skillCategories.find(
        (category) => category.id === activeCategory
      ),
    [activeCategory]
  );

  const totalSkills = skillCategories.reduce(
    (total, category) =>
      total + category.skills.length,
    0
  );

  return (
    <SkillsPage>
      <SkillsContainer>

        <SkillsHero
          totalSkills={totalSkills}
          categoryCount={skillCategories.length}
        />

        <SkillsContent>

          <CategoryTabs
            categories={skillCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {activeSkillCategory && (
            <SkillPanel
              category={activeSkillCategory}
            />
          )}

        </SkillsContent>

        <Exploring skills={exploringSkills} />

      </SkillsContainer>
    </SkillsPage>
  );
};

export default Skills;