/*
  PORTFOLIO CONFIGURATION
  =======================
  Edit this file to personalize your portfolio. You should not need to edit index.html.

  Images:
  - Put screenshots in the images/ folder and use paths such as "images/my-project.png".
  - You can also use a full image URL.
  - To use a placeholder, set image to an empty string; a placeholder is generated automatically.

  Projects:
  - Add as many project objects as you like.
  - To hide a project, remove it from this array.
  - Use a full live URL in url. For projects without a live demo, you can link to the GitHub repo.
*/

window.PORTFOLIO_CONFIG = {
  // Identity and browser tab
  name: "Your Name",
  shortName: "YOURNAME", // Short brand shown in the header. Set to "" to use name.
  pageTitle: "Your Name — Developer Portfolio",
  description: "Explore projects, experiments, and work by Your Name.",
  themeColor: "#0b0d10",

  // Hero section
  role: "Developer · Builder · Problem Solver",
  headlineStart: "Turning ideas into",
  headlineAccent: "things that work.",
  bio: "I'm Your Name, a developer who enjoys building useful tools, exploring new technologies, and solving interesting problems.",
  heroButton: "Explore my work",
  gallerySubtitle: "Projects, experiments & ideas",

  // Section headings
  projectsKicker: "01 / Portfolio",
  projectsTitle: "Things I've built",
  projectsIntro: "From small experiments to full projects, here's what I've been working on.",
  contactKicker: "02 / Contact",
  contactTitleStart: "Have an idea?",
  contactTitleAccent: "Let's connect.",
  contactText: "Interested in collaborating, discussing a project, or just connecting? My inbox is open.",
  contactButton: "Say hello",
  footerNote: "Built with curiosity.",

  // Contact and social links
  email: "you@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/YOUR-USERNAME" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR-USERNAME/" }
    // Add more, for example:
    // { label: "YouTube", url: "https://youtube.com/@YOUR-USERNAME" }
  ],

  // Project gallery — duplicate an object to add another project.
  projects: [
    {
      title: "Project One",
      description: "A short description of what this project does.",
      category: "Featured project",
      url: "https://example.com/project-one",
      image: "images/project-one.png",
      imageAlt: "Screenshot of Project One",
      tags: ["Python", "React"]
    },
    {
      title: "Project Two",
      description: "A short description of what this project does.",
      category: "Web application",
      url: "https://example.com/project-two",
      image: "images/project-two.png",
      imageAlt: "Screenshot of Project Two",
      tags: ["JavaScript", "Node"]
    },
    {
      title: "Project Three",
      description: "A short description of what this project does.",
      category: "Personal project",
      url: "https://example.com/project-three",
      image: "images/project-three.png",
      imageAlt: "Screenshot of Project Three",
      tags: ["HTML", "Tailwind"]
    },
    {
      title: "Project Four",
      description: "A short description of what this project does.",
      category: "Experiment",
      url: "https://example.com/project-four",
      image: "images/project-four.png",
      imageAlt: "Screenshot of Project Four",
      tags: ["Python", "AI"]
    }
  ]
};
