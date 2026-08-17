import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql,
  SiSwagger,
  SiPostman,
  SiPrisma,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Building responsive, accessible and interactive user interfaces.",
    icon: FaReact,
    skills: [
      {
        id: "react",
        name: "React",
        icon: FaReact,
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        id: "html",
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        id: "css",
        name: "CSS3",
        icon: FaCss3Alt,
      },
      {
        id: "styled-components",
        name: "Styled Components",
        icon: SiStyledcomponents,
      },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    description:
      "Developing scalable APIs and reliable server-side applications.",
    icon: FaNodeJs,
    skills: [
      {
        id: "node",
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        id: "express",
        name: "Express.js",
        icon: SiExpress,
      },
      {
        id: "rest-api",
        name: "REST APIs",
        shortIcon: "API",
      },
      {
        id: "authentication",
        name: "Authentication",
        shortIcon: "AUTH",
      },
    ],
  },

  {
    id: "database",
    title: "Database",
    description:
      "Designing structured data models and working with relational databases.",
    icon: SiPostgresql,
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        id: "sql",
        name: "SQL",
        shortIcon: "SQL",
      },
      {
        id: "prisma",
        name: "Prisma ORM",
        icon: SiPrisma,
      },
      {
        id: "database-design",
        name: "Database Design",
        shortIcon: "DB",
      },
    ],
  },

  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Working with cloud services and deployment-oriented infrastructure.",
    icon: FaAws,
    skills: [
      {
        id: "aws",
        name: "AWS",
        icon: FaAws,
      },
      {
        id: "s3",
        name: "Amazon S3",
        shortIcon: "S3",
      },
      {
        id: "rds",
        name: "Amazon RDS",
        shortIcon: "RDS",
      },
      {
        id: "lambda",
        name: "AWS Lambda",
        shortIcon: "λ",
      },
      {
        id: "cloudwatch",
        name: "CloudWatch",
        shortIcon: "CW",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools",
    description:
      "Tools and workflows I use to build, test and maintain applications.",
    icon: FaGitAlt,
    skills: [
      {
        id: "git",
        name: "Git",
        icon: FaGitAlt,
      },
      {
        id: "github",
        name: "GitHub",
        icon: FaGithub,
      },
      {
        id: "docker",
        name: "Docker",
        icon: FaDocker,
      },
      {
        id: "swagger",
        name: "Swagger",
        icon: SiSwagger,
      },
      {
        id: "postman",
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },
];

export const exploringSkills = [
  {
    id: "react-native",
    name: "React Native",
    icon: SiReact,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: "docker",
    name: "Docker",
    icon: FaDocker,
  },
  {
    id: "advanced-typescript",
    name: "Advanced TypeScript",
    icon: SiTypescript,
  },
  {
    id: "system-design",
    name: "System Design",
    shortIcon: "◇",
  },
];