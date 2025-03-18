export type Project = {
  title: string;
  description: string;
  logo: string;
  socialLinks: {
    github: string;
    website: string;
    producthunt?: string;
  };
  highlights: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  screenshot: string;
  about: string[];
  callToAction: {
    text: string;
    buttonText: string;
    buttonLink: string;
  };
  footer: string;
};

export const projectData: Project[] = [
  {
    title: "Noteverse",
    description:
      "A sleek, real-time notes app with upvoting, commenting, and personalized recommendations.",
    logo: "https://noteverse.falah.in/noteverse-logo-sm.svg",
    socialLinks: {
      github: "https://github.com/falahh6/noteverse-frontend",
      website: "https://noteverse.falah.in",
    },
    highlights: [
      {
        title: "Real-time Collaboration",
        description:
          "Edit notes in real-time with collaborators. See changes as they happen without refreshing.",
      },
      {
        title: "Community Upvoting",
        description:
          "Vote on notes to help the best content rise to the top. Discover what others find valuable.",
      },
      {
        title: "Smart Recommendations",
        description:
          "Discover notes tailored to your interests. Our algorithm learns what you like and suggests relevant content.",
      },
    ],
    techStack: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "novel.sh",
      "NextAuth",
      "Prisma ORM",
      "NeonDB",
    ],
    screenshot: "/placeholder.svg?height=400&width=800",
    about: [
      "Noteverse is a modern note-taking application designed for collaboration and knowledge sharing. It combines the simplicity of traditional note apps with powerful social features that help you discover and engage with valuable content.",
      "Whether you're a student, professional, or creative thinker, Noteverse provides a seamless environment to capture your ideas and connect with others who share your interests.",
      "The app was built with a focus on performance and user experience, utilizing the latest web technologies to provide a smooth and responsive interface.",
    ],
    callToAction: {
      text: "Join thousands of users who are already organizing their thoughts and collaborating with Noteverse.",
      buttonText: "Try Noteverse",
      buttonLink: "https://noteverse.falah.in",
    },
    footer: `© ${new Date().getFullYear()} Noteverse. All rights reserved.`,
  },
  {
    title: "Droppy",
    description:
      "An apple alternative on browser for devices connected to the same internet connection, ranked #11 on Product Hunt, with 1,900+ X impressions.",
    logo: "/assets/droppy.png",
    socialLinks: {
      github: "https://github.com/falahh6/droppy",
      website: "https://droppy.falah.in",
      producthunt: "https://www.producthunt.com/products/droppy-2#droppy-2",
    },
    highlights: [
      {
        title: "Product Hunt Success",
        description:
          "Ranked #11 on Product Hunt with 1,900+ impressions, showcasing its popularity and utility.",
      },
    ],
    techStack: ["NextJS", "TailwindCSS", "Shadcn-ui", "WebSockets"],
    screenshot: "",
    about: [
      "Droppy is a browser-based file and text sharing tool designed for local networks. It allows users to share files and messages seamlessly without requiring external servers.",
      "The app is lightweight, fast, and secure, making it ideal for quick file transfers in local environments.",
    ],
    callToAction: {
      text: "Experience seamless file sharing with Droppy.",
      buttonText: "Try Droppy",
      buttonLink: "https://droppy.falah.in",
    },
    footer: `© ${new Date().getFullYear()} Droppy. All rights reserved.`,
  },
];
