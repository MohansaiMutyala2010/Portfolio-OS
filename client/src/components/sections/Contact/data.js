import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRocket,
  FaCalendarCheck,
} from "react-icons/fa";

export const contactIntro = {
  eyebrow: "GET IN TOUCH",

  title: "Let's Work",

  highlight: "Together",

  emoji: "🚀",

  description:
    "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and exciting ideas.",
};

export const contactDetails = [
  {
    id: "email",
    label: "Email",
    value: "mohansai@example.com",
    icon: FaEnvelope,
    copyValue: "mohansai@example.com",
  },

  {
    id: "phone",
    label: "Phone",
    value: "+91 98765 43210",
    icon: FaPhone,
    copyValue: "+91 98765 43210",
  },

  {
    id: "location",
    label: "Location",
    value: "Hyderabad, India",
    icon: FaMapMarkerAlt,
  },

  {
    id: "availability",
    label: "Availability",
    value: "Open to opportunities",
    icon: FaGlobe,
  },
];

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    icon: FaGithub,
    url: "https://github.com/",
  },

  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/",
  },

  {
    id: "twitter",
    label: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/",
  },

  {
    id: "email",
    label: "Email",
    icon: FaEnvelope,
    url: "mailto:mohansai@example.com",
  },
];

export const contactForm = {
  icon: FaRocket,

  title: "Send Me a Message",

  description:
    "I'll get back to you as soon as possible.",

  buttonText: "Send Message",

  response: {
    icon: FaCalendarCheck,

    title:
      "Let's build something amazing together!",

    description:
      "I usually reply within 24 hours.",
  },
};

export const contactFooter = {
  year: new Date().getFullYear(),

  name: "Mohan Sai",
};