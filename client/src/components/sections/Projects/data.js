import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiVite,
} from "react-icons/si";

export const projects = [
  {
    id: "career-os",

    title: "Career-OS",

    category: "SaaS",

    shortDescription:
      "A career management platform designed to turn career goals into actionable progress.",

    image: "/projects/career-os.png",

    status: "In Development",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "AWS",
        icon: FaAws,
      },
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: "portfolio-os",

    title: "Portfolio-OS",

    category: "Portfolio",

    shortDescription:
      "A premium developer portfolio focused on projects, skills and personal branding.",

    image: "/projects/portfolio-os.png",

    status: "In Development",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: "chess-os",

    title: "Chess-OS",

    category: "Learning",

    shortDescription:
      "A structured chess learning platform designed to help players improve step by step.",

    image: "/projects/chess-os.png",

    status: "Planned",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: "taskora",

    title: "Taskora",

    category: "Productivity",

    shortDescription:
      "A mobile-first productivity application combining tasks, focus and personal organization.",

    image: "/projects/taskora.png",

    status: "Planned",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: "cricket-score",

    title: "Cricket Score",

    category: "Sports",

    shortDescription:
      "A real-time scoring experience built for local and gully cricket matches.",

    image: "/projects/cricket-score.png",

    status: "Planned",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
    ],

    links: {
      github: "",
      live: "",
    },
  },

  {
    id: "devotional",

    title: "Devotional",

    category: "Travel & Culture",

    shortDescription:
      "A platform for discovering temples, important dates and meaningful travel routes.",

    image: "/projects/devotional.png",

    status: "Planned",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
    ],

    links: {
      github: "",
      live: "",
    },
  },
];