export const SKILLS  = [
    { id: 1, name: "React" },
    { id: 2, name: "Flutter" },
    { id: 3, name: "Typescript" },
    { id: 4, name: "Javascript" },
    { id: 5, name: "Firebase" },
    { id: 6, name: "TailwindCSS" },
    { id: 7, name: "PHP" },
    { id: 8, name: "MySQL" },
]

export const PORTFOLIO = [
  {
    id: 1,
    projectName: "Salin-Laro",
    link:'',
    techUsed:'Javascript, ReactJS, NodeJS, TailwindCSS',
    description:'A gamified learning platform for learning the Tagalog language made for Android devices.',
    images: [
      { src: "/images/salinlaro1.jpg", alt: "Main Image" },
      { src: "/images/salinlaro2.jpg", alt: "Secondary 1" },
      { src: "/images/salinlaro3.jpg", alt: "Secondary 2" },
      { src: "/images/salinlaro4.jpg", alt: "Secondary 3" },
      { src: "/images/salinlaro5.jpg", alt: "Secondary 4" },
    ],
  },
  {
    id: 2,
    projectName: "Cloud-based Dental Patient Record Management System",
    link:'',
    techUsed:'Javascript, ReactJS, NodeJS, TailwindCSS',
    description:'Powered by Firebase, this fullstack web application replaces the outdated manual paperwork process of Aldana Clinic. It handles patient records, inventory, employee management, and payroll system in one web app. It uses Advanced Encryption Standard (AES) Algorithm like the one used by U.S. government to protect classified information.',
     images: [
      { src: "/images/TabletMockup.png", alt: "Main Image" },
      { src: "/images/Dental1.png", alt: "Secondary 1" },
      { src: "/images/Dental3.png", alt: "Secondary 2" },
      { src: "/images/Dental4.png", alt: "Secondary 3" },
      { src: "/images/Dental5.png", alt: "Secondary 4" },
    ],
  },
  
  
];



export const WORK_EXPERIENCE =[
    {
        id: 2,
        company:'SALIN-LARO',
        start:'JAN 2025',
        end:'JUNE 2025',
        role:'Mobile Developer (Contract)',
        techUsed:['Flutter', 'SQLite', 'Lottie', 'Figma', 'Android Studio'],
        description:[
            "Developed and deployed a free, gamified learning platform for learning the Tagalog language called “Salin-Laro” for Android devices.",
            "Integrated SQLite in Flutter to safely handle, and query around 450 different questions and game levels.",
            "Designed Drafts in Figma and implemented in the mobile game with animations from LottieFiles."
        ],
    },
     {
        id: 1,
        company:'ALDANA CLINIC',
        start:'JAN 2024',
        end:'MAY 2024 ',
        role:'Software Developer Intern (Project-based)',
        techUsed:['ReactJS', 'Firebase', 'NodeJS', 'Tailwindcss', 'MaterialUI'],
        description:[
            "Developed a Cloud-based Dental Patient Record Management System for Aldana Clinic, a fullstack web application replacing their outdated manual paperwork process.",
            "Engineered and implemented a JSON IO data caching module throughout the system to cut the operational expenses of the cloud-based Realtime database by 33%.",
            "Designed and praised by the client for its clean, straightforward, and user-friendly UI/UX interface."
        ],
    }
]

