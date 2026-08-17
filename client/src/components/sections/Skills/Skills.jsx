import SkillsHero from "./SkillsHero";
import SkillCategory from "./SkillCategory";
import Exploring from "./Exploring";

import {
  SkillsPage,
  SkillsContainer,
  SkillsGrid,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from "./styles";

import { skillCategories } from "./data";

const Skills = () => {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  const categoryCount = skillCategories.length;

  return (
    <SkillsPage>
      <SkillsContainer>

        {/* HERO */}
        <SkillsHero
          totalSkills={totalSkills}
          categoryCount={categoryCount}
        />

        {/* SKILLS */}
        <section>
          <SectionHeader>
            <SectionEyebrow>
              TECHNOLOGY STACK
            </SectionEyebrow>

            <SectionTitle>
              Tools I Build With
            </SectionTitle>

            <SectionDescription>
              A practical collection of technologies I use across
              frontend, backend, databases, cloud and development workflows.
            </SectionDescription>
          </SectionHeader>

          <SkillsGrid>
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.id}
                category={category}
              />
            ))}
          </SkillsGrid>
        </section>

        {/* EXPLORING */}
        <Exploring />

      </SkillsContainer>
    </SkillsPage>
  );
};

export default Skills;