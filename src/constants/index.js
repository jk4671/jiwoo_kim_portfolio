import { kohls, cmu, nmed, mayoclinic } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  github,
  html,
  java,
  javascript,
  linkedin,
  nodejs,
  pricewise,
  react,
  redux,
  restapi,
  snapgram,
  summiz,
  threads,
  typescript,
  python,
  vite,
  openapis,
  springboot,
  flask,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: restapi,
    name: "REST API",
    type: "API",
  },
  {
    imageUrl: openapis,
    name: "OpenAPI",
    type: "API",
  },
  {
    imageUrl: springboot,
    name: "Spring Boot",
    type: "Backend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Full-stack Software Engineering Intern",
    company_name: "Kohl's Technology",
    icon: kohls,
    iconBg: "#FBF8F0",
    date: "June 2024 - August 2024",
    points: [
      "Designed REST API endpoints for self-checkout services and used OpenAPI descriptors to standardize documentation, enhancing frontend integration. Achieved 95% test coverage.",
      "Built an Axios client from OpenAPI descriptors and published it on GitLab, and achieved 97% test coverage.",
    ],
  },
  {
    title: "HCI Research Assistant",
    company_name: "Carnegie Mellon University",
    icon: cmu,
    iconBg: "#FDE2E6",
    date: "June 2023 - August 2023",
    points: [
      "Developed Wikibench, a community-driven platform for AI evaluation on Wikipedia, leveraging 757 edits from 12 Wikipedians. Improved dataset accuracy by 63%, significantly enhancing AI evaluation quality.",
    ],
  },
  {
    title: "AI Research Assistant",
    company_name: "Northwestern Medicine",
    icon: nmed,
    iconBg: "#E4E0EE",
    date: "June 2022 - August 2022",
    points: [
      "Replicated and fine-tuned an imaging classification model using Vision Transformer (ViT) on the VinDr-PCXR dataset, achieving 57.9% accuracy with end-to-end training in PyTorch and TensorFlow.",
    ],
  },
  {
    title: "AI Research Assistant",
    company_name: "Mayo Clinic",
    icon: mayoclinic,
    iconBg: "#d6e0f7",
    date: "June 2021 - August 2021",
    points: [
      "Built a deep learning-based image noise quantification framework for computed tomography using 120,000 data.",
      "Achieved a 5% average percent error, enhancing diagnostic accuracy and image quality through advanced noise analysis models.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
