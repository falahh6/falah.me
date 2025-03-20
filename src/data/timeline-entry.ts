import { TimelineEntry } from "../types/all";

export const timelineData: TimelineEntry[] = [
  {
    period: "January 25, 2025",
    title: "Droppy",
    type: "project",
    logo: "/assets/droppy/droppy.png",
    details:
      "An apple alternative on browser for devices connected to the same internet connection, ranked #11 on Product Hunt, with 1,900+ X impressions.",
    productHuntLink: "https://www.producthunt.com/posts/droppy",
    subProjects: [
      {
        title: "Droppy",
        description:
          "An apple alternative on browser for devices connected to the same internet connection, ranked #11 on Product Hunt, with 1,900+ X impressions.",
        technologies: ["NextJS", "TailwindCSS", "Shadcn-ui", "WebSockets"],
        link: "https://droppy.falah.in",
        images: ["https://droppy.falab.in/screenshot1.png"],
      },
    ],
  },
  {
    period: "November 2023 - Present",
    title: "Frontend Web Engineer",
    logo: "/assets/coachbots/coachbots.png",
    details:
      "Sole frontend developer, contributing to 800+ tasks, 300+ PRs, and 700+ commits across three key projects.",
    institutionCompany: "Coachbots",
    type: "work",
    subProjects: [
      {
        title: "SaaS Platform for Coaching and Mentoring",
        description:
          "Developed a platform with test simulations and role-play features. Built the chatbot using DeepChat SDK, integrated Gemini and OpenAI APIs, and added streaming support.",
        technologies: [
          "Next.js",
          "TailwindCSS",
          "DeepChat SDK",
          "Gemini API",
          "OpenAI API",
        ],
        link: "",
        images: [],
      },
      {
        title: "Report UI System",
        description:
          "Created a Notion-like document UI for the reporting system, featuring analytics and a polished interface.",
        technologies: ["Next.js", "TailwindCSS"],
        link: "",
        images: [],
      },
      {
        title: "Internal Chatbot Unit",
        description:
          "Designed and built a chatbot UI and dashboard for internal use, trained on specific topics, consuming OpenAI Assistant and various LLMs.",
        technologies: ["Next.js", "TailwindCSS", "OpenAI Assistant API"],
        link: "",
        images: [],
      },
    ],
  },
  {
    period: "November 2024",
    title: "Noteverse",
    logo: "https://noteverse.falah.in/noteverse-logo-sm.svg",
    details:
      "A real-time notes app with upvoting, commenting, and personalized recommendations.",
    type: "project",
    productHuntLink: "",
    subProjects: [
      {
        title: "Noteverse",
        description:
          "A sleek, real-time notes app with upvoting, commenting, and personalized recommendations.",
        technologies: [
          "NextJS",
          "TypeScript",
          "TailwindCSS",
          "novel.sh",
          "NextAuth",
          "Prisma ORM",
          "NeonDB",
        ],
        link: "https://noteverse.falah.in",
        images: ["https://noteverse.falab.in/screenshot1.png"],
      },
    ],
  },
  {
    period: "December 2022 - January 2023",
    title: "Frontend Web Developer Intern",
    logo: "https://instagram.fblr4-3.fna.fbcdn.net/v/t51.2885-19/481181996_9129374233841436_7470395825067432189_n.jpg?_nc_ht=instagram.fblr4-3.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QFdmRrvV-8eOtZMY1-NNmRzM7cQZgp9bITJIx6pvjzMZzS60_y39pPkBZZgs4yN0NLJJbzsRpqdEKOBkCsM0f9D&_nc_ohc=wE3sqpbTdmYQ7kNvgFQhnTg&_nc_gid=XlOYY0AqqaR0Jdbohm_EBw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYHfFKS-vbrnyqdOAjwR-ZtihabZyOBDX1ZuxtPWc4S6hg&oe=67E07B5C&_nc_sid=7a9f4b",
    details:
      "Documented requirements, converted designs to interactive UIs, and updated websites while learning modern frontend tools.",
    institutionCompany: "AkeefandCo",
    type: "work",
    subProjects: [],
  },
  {
    period: "September 2020 - September 2023",
    title: "Bachelors of Computer Applications (BCA)",
    details:
      "Graduated with a CGPA of 8.425. Studied HTML, CSS, JavaScript, and ReactJS. Active in the Student Dev Club.",
    institutionCompany: "ALMCA, Bhatkal",
    type: "education",
    subProjects: [],
  },
];
