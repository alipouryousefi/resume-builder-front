import { Resume } from "../types";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: "https://i.ibb.co/0r00000/template-1.png",
    colorPalettes: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: "https://i.ibb.co/0r00000/template-1.png",
    colorPalettes: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: "https://i.ibb.co/0r00000/template-1.png",
    colorPalettes: "themeThree",
  },
];

export const themeColorPalettes = {
  themeOne: [
    ["#ebfdff", "#a1f4fd", "#cefafe", "#00b8d8", "#4a5565"],

    ["#e9fbf8", "#b4efe7", "#93e2da", "#2ac9a0", "#3d4c5a"],

    ["#f5f4ff", "#e0dbff", "#c9c2f8", "#8579d1", "#4b4b5c"],

    ["#f0faff", "#d6f0ff", "#afdeff", "#3399ff", "#445361"],

    ["#fff5f7", "#ffe0ec", "#fac6d4", "#f6729c", "#5a5a5a"],

    ["#f9fafb", "#e4e7eb", "#cbd5e0", "#7f9cf5", "#2d3748"],

    ["#f4fffd", "#d3fdf2", "#b0e9d4", "#34c79d", "#384c48"],

    ["#fff7f0", "#ffe6d6", "#ffd2ba", "#ff9561", "#4c4743"],

    ["#f9fcff", "#e3f0f9", "#c0ddee", "#6c16cf", "#46545e"],

    ["#fffdf6", "#fff4d7", "#ffe7a0", "#ffd000", "#57534e"],

    ["#effcff", "#c8f0ff", "#99e0ff", "#007ba7", "#2b3a42"],

    ["#f7f7f7", "#e4e4e4", "#cfcfcf", "#4a4a4a", "#222222"],

    ["#e3f2fd", "#90caf9", "#a8d2f4", "#1e88e5", "#0d47a1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    PreviewUrl: "",
    fullName: "John Doe",
    designation: "Software Engineer",
    summary:
      "I am a software engineer with a passion for building scalable and efficient systems.",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location: "New York, NY",
    linkedin: "https://www.linkedin.com/in/john-doe",
    github: "https://github.com/john-doe",
    website: "https://john-doe.com",
  },
  workExperience: [
    {
      company: "Google",
      role: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2024-01-01",
      description:
        "I was responsible for developing and maintaining the company's main product.",
    },
    {
      company: "Apple",
      role: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2024-01-01",
      description:
        "I was responsible for developing and maintaining the company's main product.",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2024-01-01",
      description:
        "I was responsible for developing and maintaining the company's main product.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      startDate: "2016-01-01",
      endDate: "2020-01-01",
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "University of California, Berkeley",
      startDate: "2016-01-01",
      endDate: "2020-01-01",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      progress: 80,
    },
    {
      name: "React",
      progress: 80,
    },
    {
      name: "Node.js",
      progress: 80,
    },
    {
      name: "MongoDB",
      progress: 80,
    },
    {
      name: "MongoDB",
      progress: 80,
    },
  ],
  projects: [
    {
      title: "Project 1",
      description:
        "I was responsible for developing and maintaining the company's main product.",
      github: "https://github.com/john-doe",
      liveDemo: "https://john-doe.com",
    },
    {
      title: "Project 2",
      description:
        "I was responsible for developing and maintaining the company's main product.",
      github: "https://github.com/john-doe",
      liveDemo: "https://john-doe.com",
    },

    {
      title: "Project 3",
      description:
        "I was responsible for developing and maintaining the company's main product.",
      github: "https://github.com/john-doe",
      liveDemo: "https://john-doe.com",
    },
  ],
  certifications: [
    {
      title: "Certification 1",
      issuer: "Google",
      year: "2020",
    },
    {
      title: "Certification 2",
      issuer: "Google",
      year: "2020",
    },
  ],
  languages: [
    {
      name: "English",
      progress: 80,
    },
  ],
  interests: ["Reading", "Writing", "Coding", "Traveling", "Cooking"],
};
