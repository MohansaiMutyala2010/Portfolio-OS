import {
  TechSection,
  TechHeader,
  TechTitle,
  ViewSkillsButton,
  TechList,
  TechItem,
  TechIcon,
  TechName,
} from "./styles";



const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "HTML5", icon: "🟧" },
  { name: "CSS3", icon: "🎨" },
  { name: "Git", icon: "🔶" },
  { name: "AWS", icon: "☁️" },
];

const TechStack = () => {
  return (
    <TechSection>

      <TechHeader>
        <TechTitle>
          💻 Tech Stack
        </TechTitle>

        <ViewSkillsButton to="/skills">
          
  View All Skills →

        </ViewSkillsButton>
      </TechHeader>

      <TechList>
        {technologies.map((tech) => (
          <TechItem key={tech.name}>
            <TechIcon>
              {tech.icon}
            </TechIcon>

            <TechName>
              {tech.name}
            </TechName>
          </TechItem>
        ))}
      </TechList>

    </TechSection>
  );
};

export default TechStack;