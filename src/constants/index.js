import {
  kohls,
  cmu,
  nmed,
  mayoclinic,
  mugmastery,
  bigapplescreenings,
  notegenie,
  savethecity,
  wikibench,
  silver,
} from "../assets/images";
import {
  contact,
  css,
  github,
  html,
  java,
  javascript,
  linkedin,
  nodejs,
  react,
  redux,
  restapi,
  typescript,
  python,
  vite,
  openapis,
  springboot,
  flask,
  coffee,
  movie,
  note,
  bomb,
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
    iconUrl: coffee,
    projectImg: mugmastery,
    theme: "mug-mastery",
    name: "Mug Mastery",
    description:
      "Engineered an interactive platform to teach users about 8 coffee drinks with video tutorials, drag-and-drop interactions, and quizzes. Personalized feedback and scalable for future drinks.",
    link: "https://github.com/jk4671/Learn-How-to-Distinguish-Coffee-Drinks-",
    demoLink: "https://www.youtube.com/watch?v=ejwLcEUHmGw",
    tags: [
      {
        name: "html",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "navy-text-gradient",
      },
      {
        name: "javascript",
        color: "maroon-text-gradient",
      },
      {
        name: "bootstrap",
        color: "dark-green-text-gradient ",
      },
      {
        name: "jquery",
        color: "light-brown-text-gradient",
      },
      {
        name: "flask",
        color: "red-violet-text-gradient",
      },
    ],
  },
  {
    iconUrl: movie,
    projectImg: bigapplescreenings,
    theme: "bigg-apple-screenings",
    name: "Big Apple Screenings",
    description:
      "Devised a dynamic website to catalog NYC films, allowing user-driven data entry with validation and requirement checking. Incorporated feedback from 411 users to enhance functionality.",
    link: "https://github.com/jk4671/Movies-Filmed-in-New-York-City/tree/main",
    demoLink: "https://youtu.be/eKYVQOK_pGI?si=-E7OLYJJuo8Cvtsl",
    tags: [
      {
        name: "html",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "navy-text-gradient",
      },
      {
        name: "javascript",
        color: "maroon-text-gradient",
      },
      {
        name: "bootstrap",
        color: "dark-green-text-gradient ",
      },
      {
        name: "jquery",
        color: "light-brown-text-gradient",
      },
      {
        name: "flask",
        color: "red-violet-text-gradient",
      },
    ],
  },
  {
    iconUrl: note,
    projectImg: notegenie,
    theme: "note-genie",
    name: "NoteGenie",
    description:
      "Built a full-stack MERN app for note creation, editing, and deletion with real-time synchronization. Supports extensive notes and collaborative features with real-time updates.",
    link: "https://github.com/jk4671/fullstack_final_frontend",
    demoLink: "https://www.youtube.com/watch?v=dvWX_CMpISg",
    tags: [
            {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    iconUrl: bomb,
    projectImg: savethecity,
    theme: "save-the-city",
    name: "Save the City",
    description:
      "The goal of the project was to incorporate newly learned concepts about callbacks, timer events, keyboard buttons, collision detection, inheritance, classes, and class global variables to design my own interactive video game using the Turtle module and various shapes and scenes drawn using L-system strings.",
    link: "https://github.com/jk4671/save-the-city",
    demoLink: "https://www.youtube.com/watch?v=jydmbxwM8mU",
    tags: [
      {
        name: "python",
        color: "purple-text-gradient",
      },
    ],
  },
];

export const publications = [
  {
    name: 'Wikibench: Community-Driven Data Curation for AI Evaluation on Wikipedia',
    img: wikibench,
    year: '2024',
    journal: 'Proceedings of the CHI Conference on Human Factors in Computing Systems',
    authors: 'Kuo, Tzu-Sheng, Aaron Halfaker, Zirui Cheng, Jiwoo Kim, Meng-Hsin Wu, Tongshuang Wu, Kenneth Holstein, and Haiyi Zhu',
    link: 'https://dl.acm.org/doi/full/10.1145/3613904.3642278'
  },
  {
    name: 'Deep Learning–Based Image Noise Quantification Framework for Computed Tomography',
    img: silver,
    year: '2023',
    journal: 'Journal of Computer Assisted Tomography',
    authors: 'Huber, Nathan R., Jiwoo Kim, Shuai Leng, Cynthia H. McCollough, and Lifeng Yu',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37380148/'
  },
]
