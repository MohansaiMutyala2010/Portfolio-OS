import {
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaBullseye,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

export const experienceIntro = {
  eyebrow: "MY JOURNEY",

  title: "Experience & Growth",

  description:
    "A timeline of my professional journey, learning, growth and impactful contributions.",

  statement: {
    icon: FaRocket,

    titleBefore: "Turning",

    titleHighlight: "ideas",

    titleMiddle: "into",

    titleAfter: "real-world",

    titleHighlightEnd: "solutions.",

    description:
      "I enjoy building products, solving problems and continuously learning new technologies.",
  },
};

export const experienceStats = [
  {
    id: "learning",
    icon: FaRocket,
    value: "2+",
    label: "Years of Learning",
  },

  {
    id: "projects",
    icon: FaCode,
    value: "5+",
    label: "Projects Completed",
  },

  {
    id: "dedication",
    icon: FaBullseye,
    value: "100%",
    label: "Dedication",
  },
];

export const experiences = [
  {
    id: "software-developer",

    year: "2025",

    period: "Mar 2025 — Present",

    title: "Software Developer",

    organization: "Soil Soft Technology",

    type: "Full-time",

    category: "Professional",

    icon: FaBriefcase,

    description:
      "Working on full-stack web applications, solving real-world problems and contributing to scalable product development.",

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },

      {
        name: "Node.js",
        icon: SiNodedotjs,
      },

      {
        name: "Express.js",
        icon: SiExpress,
      },

      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },

  {
    id: "mern-learning",

    year: "2024",

    period: "2024 — 2025",

    title: "MERN Stack Developer",

    organization: "Self Learning",

    type: "Personal Journey",

    category: "Learning",

    icon: FaGraduationCap,

    description:
      "Focused on mastering the MERN stack, building projects and continuously improving problem-solving and development skills.",

    technologies: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },

      {
        name: "Express.js",
        icon: SiExpress,
      },

      {
        name: "React",
        icon: SiReact,
      },

      {
        name: "Node.js",
        icon: SiNodedotjs,
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },

  {
    id: "education",

    year: "2023",

    period: "2020 — 2023",

    title: "B.Tech — Computer Science",

    organization: "Education",

    type: "Full-time",

    category: "Education",

    icon: FaGraduationCap,

    description:
      "Built a strong foundation in programming, computer science fundamentals and software development.",

    technologies: [
      {
        name: "C / C++",
        icon: FaCode,
      },

      {
        name: "Python",
        icon: FaCode,
      },

      {
        name: "Data Structures",
        icon: FaCode,
      },

      {
        name: "DBMS",
        icon: FaCode,
      },

      {
        name: "OOPs",
        icon: FaCode,
      },
    ],
  },
];

export const journeyFooter = {
  icon: FaBullseye,

  firstLine:
    "Every step has been a lesson. Every lesson has built me.",

  secondLine:
    "The journey continues...",
};