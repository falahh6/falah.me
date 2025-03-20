import { Company } from "@/types/all";

export const workInfo: Company[] = [
  {
    title: "Coachbots",
    description: "Frontend Web Engineer",
    period: "November 2023 - Present",
    about: [
      "Sole frontend developer, contributing to 800+ tasks, 300+ PRs, and 700+ commits across three key projects.",
    ],
    techStack: [
      "Next.js",
      "TailwindCSS",
      "DeepChat SDK",
      "Gemini API",
      "OpenAI API",
      "OpenAI Assistant API",
    ],
    projects: [
      {
        title: "SaaS Platform for Coaching and Mentoring",
        description:
          "Developed a platform with test simulations and role-play features. Built the chatbot using DeepChat SDK, integrated Gemini and OpenAI APIs, and added streaming support.",
        techStack: [
          "Next.js",
          "TailwindCSS",
          "DeepChat SDK",
          "Gemini API",
          "OpenAI API",
        ],
        screenshots: [],
      },
      {
        title: "Report UI System",
        description:
          "Created a Notion-like document UI for the reporting system, featuring analytics and a polished interface.",
        techStack: ["Next.js", "TailwindCSS"],
        screenshots: [],
      },
      {
        title: "Internal Chatbot Unit",
        description:
          "Designed and built a chatbot UI and dashboard for internal use, trained on specific topics, consuming OpenAI Assistant and various LLMs.",
        techStack: ["Next.js", "TailwindCSS", "OpenAI Assistant API"],
        screenshots: [],
      },
    ],
  },
  {
    title: "AkeefandCo",
    period: "December 2022 - January 2023",
    description: "Frontend Web Developer Intern",
    about: [
      "Documented requirements, converted designs to interactive UIs, and updated websites while learning modern frontend tools.",
      "Worked on the company's website, adding new features and improving the user experience.",
      "Collaborated with the design team to create a new website for a client.",
    ],
    techStack: [],
    projects: [],
  },
];
