import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  
  SiSwagger,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces.",

    skills: [
      {
        id: "react",
        name: "React",
        icon: FaReact,
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: FaJs,
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
    name: "Backend",
    icon: FaNodeJs,
    description:
      "Developing robust APIs and server-side applications.",

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
        icon: FaNodeJs,
      },
      {
        id: "authentication",
        name: "Authentication",
        icon: FaNodeJs,
      },
    ],
  },

  {
    id: "database",
    name: "Database",
    icon: SiPostgresql,
    description:
      "Designing and managing reliable data systems.",

    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        id: "sql",
        name: "SQL",
        icon: SiPostgresql,
      },
      {
        id: "prisma",
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        id: "database-design",
        name: "Database Design",
        icon: SiPostgresql,
      },
    ],
  },

  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: FaAws,
    description:
      "Deploying and managing cloud infrastructure.",

    skills: [
      {
        id: "aws",
        name: "AWS",
        icon: FaAws,
      },
      {
        id: "ec2",
        name: "EC2",
        icon: FaAws,
      },
      {
        id: "s3",
        name: "S3",
        icon: FaAws,
      },
      {
        id: "lambda",
        name: "Lambda",
        icon: FaAws,
      },
      {
        id: "cloudwatch",
        name: "CloudWatch",
        icon: FaAws,
      },
    ],
  },

  {
    id: "tools",
    name: "Tools & Others",
    icon: FaGitAlt,
    description:
      "Tools that support development and productivity.",

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
    icon: FaReact,
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
    id: "typescript-advanced",
    name: "Advanced TypeScript",
    icon: SiTypescript,
  },
  {
    id: "system-design",
    name: "System Design",
    icon: FaNodeJs,
  },
];