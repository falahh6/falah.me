import { TimelineEntry } from "../types/timeline";

export const timelineData: TimelineEntry[] = [
  {
    period: "August 2020",
    title: "PUC Commerce",
    details:
      "Completed pre-university education in Commerce, setting the stage for my technical journey.",
    institutionCompany: "Dr. AV Baliga College of Commerce, Kumta, Karnataka",
  },
  {
    period: "September 2020 - September 2023",
    title: "Bachelors of Computer Applications (BCA)",
    details:
      "Graduated with a CGPA of 8.425. Studied HTML, CSS, JavaScript, and ReactJS. Active in the Student Dev Club.",
    institutionCompany: "ALMCA, Bhatkal",
  },
  {
    period: "December 2022 - January 2023",
    title: "Front-end Web Developer Intern",
    details:
      "Documented requirements, converted designs to interactive UIs, and updated websites while learning modern frontend tools.",
    institutionCompany: "Abeefor Co, Bhatkal, Karnataka",
  },
  {
    period: "September 2023",
    title: "Project: Portfolio",
    details:
      "Built a personal portfolio site to showcase skills and projects, likely with Next.js and TailwindCSS.",
  },
  {
    period: "November 2023 - Present",
    title: "Front-end Web Engineer",
    details:
      "Sole frontend developer, contributing to 800+ tasks, 300+ PRs, and 700+ commits across three key projects.",
    institutionCompany: "Coachbots.com (Remote)",
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
        image: "",
      },
      {
        title: "Report UI System",
        description:
          "Created a Notion-like document UI for the reporting system, featuring analytics and a polished interface.",
        technologies: ["Next.js", "TailwindCSS"],
        link: "",
        image: "",
      },
      {
        title: "Internal Chatbot Unit",
        description:
          "Designed and built a chatbot UI and dashboard for internal use, trained on specific topics, consuming OpenAI Assistant and various LLMs.",
        technologies: ["Next.js", "TailwindCSS", "OpenAI Assistant API"],
        link: "",
        image: "",
      },
    ],
  },
  {
    period: "2024 (Exact Date TBD)",
    title: "Project: Noteverse",
    details:
      "A real-time notes app with upvoting, commenting, and personalized recommendations.",
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
        link: "https://noteverse.falab.in",
      },
    ],
  },
  {
    period: "January 25, 2025",
    title: "Project: Droppy",
    details:
      "A browser-based file/text sharing tool for local networks, ranked #11 on Product Hunt, with 1,900+ X impressions.",
    subProjects: [
      {
        title: "Droppy",
        description:
          "A browser-based file/text sharing tool for local networks, ranked #11 on Product Hunt.",
        technologies: ["NextJS", "TailwindCSS", "Shadcn-ui", "WebSockets"],
        link: "https://droppy.falab.in",
      },
    ],
  },
];
