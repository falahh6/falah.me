import { Project } from "@/types";

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
        title: "Share",
        description:
          "Share notes with the users and collaborate in a real time",
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
    slidesData: [
      {
        id: 1,
        title: "Landing Page",
        description: "The landing page of Noteverse",
        imageUrl: "/assets/noteverse/landing.png",
      },
      {
        id: 2,
        title: "Login Page",
        description: "The login page of Noteverse",
        imageUrl: "/assets/noteverse/login.png",
      },
      {
        id: 3,
        title: "Dashboard",
        description: "The dashboard of Noteverse",
        imageUrl: "/assets/noteverse/dashboard.png",
      },
      {
        id: 4,
        title: "Notes Page",
        description: "The notes page of Noteverse",
        imageUrl: "/assets/noteverse/notes.png",
      },
      {
        id: 5,
        title: "Share",
        description: "The share modal of Noteverse",
        imageUrl: "/assets/noteverse/share.png",
      },
      {
        id: 6,
        title: "Comments",
        description: "The comments section of Noteverse",
        imageUrl: "/assets/noteverse/comments.png",
      },
    ],
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
    logo: "/assets/droppy/droppy.png",
    socialLinks: {
      github: "https://github.com/falahh6/droppy",
      website: "https://droppy.falah.in",
      producthunt: "https://www.producthunt.com/products/droppy-2#droppy-2",
    },
    highlights: [
      {
        title: "Peer Connections",
        description:
          "Connect with other devices on the same network and share files or text messages.",
      },
      {
        title: "Share Files and Long form messages",
        description:
          "Send files and text messages to connected peers with ease.",
      },
    ],
    techStack: ["NextJS", "TailwindCSS", "Shadcn-ui", "WebSockets"],
    slidesData: [
      {
        id: 1,
        title: "Peers connections",
        description: "This is how the connected and discovered peers look like",
        imageUrl: "/assets/droppy/droppy-landing.png",
      },
      {
        id: 2,
        title: "The modal",
        description:
          "The modal where you can either send a file or a text message",
        imageUrl: "/assets/droppy/droppy-modal.png",
      },
    ],
    about: [
      "Droppy is a Apple airdrop alternative on browsers for the devices that are connected to the same internet connection.",
      "It allows users to share files and text messages with each other without the need for any external software or services.",
      "Built using websocket, the app is feels lightweight, fast, and secure, making it ideal for quick file transfers in local environments.",
    ],
    callToAction: {
      text: "Experience seamless file sharing with Droppy.",
      buttonText: "Try Droppy",
      buttonLink: "https://droppy.falah.in",
    },
    footer: `© ${new Date().getFullYear()} Droppy. All rights reserved.`,
  },
];
