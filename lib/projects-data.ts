// lib/projects-data.ts

export type Project = {
  slug: string;
  title: string;
  sub: string;
  tags: string[];
  overview: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  challenges: string;
  result: string;
  keyLearning: string;
  images: string[];
  demoUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "CIRVIA",
    title: "Circuit Virtual Interactive Application (CIRVIA)",
    sub: "Computer Vision · Hand Gesture · Fullstack Web Application · Bronze Medal at LIDM 2025",
    tags: ["AI", "Computer Vision", "Web"],
    overview:
      "An interactive web-based learning platform designed to help senior high school students understand electrical circuits through virtual simulations, AI-assisted learning, and computer vision-based practical activities.",

    problem:
      "Traditional physics learning often lacks interactive media that allows students to safely practice electrical circuit concepts, especially in schools with limited laboratory facilities.",

    contributions: [
      "Developed frontend and backend features using Next.js, TypeScript, and Supabase.",
      "Implemented hand gesture interaction using MediaPipe and TensorFlow.js for virtual circuit practicum.",
      "Collaborated in designing responsive user interfaces and database integration.",
      "Contributed to system testing, documentation, and presentation during the National Digital Innovation Competition (LIDM).",
      "Participated in the copyright registration process at the Directorate General of Intellectual Property (DJKI)."
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "MediaPipe",
      "TensorFlow.js"
    ],

    challenges:
      "Integrating real-time hand gesture recognition into a browser-based learning platform while maintaining responsive performance across different devices.",

    result:
      "Awarded Bronze Medal at the 2025 National Digital Innovation Competition (LIDM).",

    keyLearning:
      "Strengthened expertise in full-stack development, computer vision integration, collaborative software development, and user-centered educational application design.",
    images: ["/projects/bronze-husna.jpg", "/projects/cirvia(4).jpg","/projects/cirvia(2).jpg", "/projects/cirvia(3).png", "/projects/cirvia(5).jpg"],
    demoUrl: "https://cirvia-usk.vercel.app/",
    videoUrl: "https://www.youtube.com/watch?v=3RNnLU7rRjk",
    githubUrl: "https://github.com/MuhammadBintang27/cirvia.git",
  },
  {
    slug: "medical-image-captioning",
    title: "Medical Image Captioning Using MedCLIP & BioBART",
    sub: "Deep Learning · Computer Vision · Natural Language Processing",

    tags: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "PyTorch",
      "FastAPI"
    ],

    overview:
      "An AI-powered medical image captioning system that automatically generates descriptive radiology reports from radiology images using MedCLIP for visual representation learning and BioBART for biomedical language generation. The project covers the complete pipeline from data preprocessing and model training to evaluation and deployment.",

    problem:
      "Generating radiology reports manually is time-consuming and requires specialized medical expertise. This project explores multimodal deep learning techniques to automatically generate descriptive radiology reports from radiology images, aiming to improve reporting efficiency and support clinical workflows.",

    contributions: [
      "Developed an end-to-end multimodal image captioning pipeline using MedCLIP and BioBART.",
      "Designed and implemented a custom linear mapping network to bridge MedCLIP visual embeddings with the BioBART language model.",
      "Performed dataset preprocessing, model training, hyperparameter tuning, and inference.",
      "Evaluated model performance using BLEU, BERTScore, and CLIPScore.",
      "Built a FastAPI-based web application for interactive radiology report generation."
    ],

    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "MedCLIP",
      "BioBART",
      "FastAPI"
    ],

    challenges:
      "Integrating vision and language models with different embedding spaces while optimizing multimodal training and generating clinically meaningful radiology reports across diverse radiology imaging modalities.",

    result:
      "Successfully developed and trained a multimodal medical image captioning model capable of generating descriptive radiology reports. The final model achieved BLEU-1 of 0.1425, BLEU-4 of 0.0192, BERTScore F1 of 0.6448, and CLIPScore of 0.7801, demonstrating promising semantic alignment between generated and reference reports.",

    keyLearning:
      "Strengthened my expertise in multimodal deep learning, computer vision, biomedical NLP, transformer fine-tuning, model evaluation, and deployment of AI inference services using FastAPI.",

    images: [
      "/projects/skripsi (2).png",
      "/projects/skripsi (1).png"
    ],

    githubUrl:
      "https://github.com/alhusnaahanifah/Medical-Image-Captioning-Using-MedCLIP-and-BioBART.git",
  },
  {
    slug:"AR-molecular-explorer",

    title:"AR Molecular Explorer",

    sub:"Augmented Reality · Educational Application · National Finalist at LIDM 2024",

    tags:["AR","Mobile","Education"],

    overview:
      "An Augmented Reality application that helps high school students visualize molecular geometry interactively.",

    problem:
      "Students often struggle to understand three-dimensional molecular structures through traditional textbooks alone.",

    contributions:[
      "Led the project team throughout planning, development, and competition preparation.",
      "Collaborated in application development and feature implementation.",
      "Presented the project before university and national judges.",
      "Coordinated communication among team members and supervised project progress."
    ],

    technologies:[
      "Unity",
      "C#",
      "AR Foundation"
    ],

    challenges:
      "Transforming abstract chemistry concepts into intuitive AR learning experiences while ensuring smooth application performance.",

    result:
      "Selected as National Finalist at the 2024 National Digital Innovation Competition (LIDM).",

    keyLearning:
      "Improved leadership, project management, technical communication, and interdisciplinary collaboration skills.",

    images:["/finalis (2).jpg","/projects/arme.png","/projects/arme3.jpg", "/projects/arme2.jpg","/finalis (1).jpg"],
    videoUrl: "https://youtu.be/DOLt7ArsAnI?si=71Ugnhtlptcn9wVa",
  },
  {
    slug: "HidroGrow",
    title: "HidroGrow",

    sub: "Full-Stack Web Application · Smart Hydroponic Platform · Academic Project",

    tags: ["Full Stack", "Web App", "Hydroponics"],

    overview:
    "A full-stack web application designed to support hydroponic farming by providing plant recommendations, weather information, crop monitoring, AI-powered assistance, and educational resources in a single platform.",

    problem:
    "Many beginners and home gardeners struggle to select suitable hydroponic plants, monitor crop growth, and access reliable learning resources, making hydroponic cultivation more challenging.",

    contributions: [
      "Developed responsive frontend interfaces using Vue.js and Inertia.js.",
      "Built backend APIs and business logic with AdonisJS.",
      "Implemented secure user authentication and role-based access control.",
      "Integrated MongoDB for managing user, plant, and learning data.",
      "Developed plant recommendation, crop monitoring, weather information, and educational features.",
      "Collaborated with a team using Git and Agile software development practices."
    ],

    technologies: [
      "Vue.js",
      "AdonisJS",
      "Inertia.js",
      "MongoDB",
      "Tailwind CSS"
    ],

    challenges:
    "Designing a scalable full-stack architecture while integrating multiple features such as authentication, personalized recommendations, weather data, and educational content into a seamless user experience.",

    result:
    "Successfully delivered a functional smart hydroponic platform that helps users learn hydroponics, choose suitable plants, monitor cultivation progress, and access useful farming information through an intuitive web application.",

    keyLearning:
    "Strengthened full-stack development skills, REST API development, database design with MongoDB, frontend-backend integration, collaborative software engineering, and Agile development practices.",

    images: [
      "/projects/hg1.png",
      "/projects/hg2.png",
      "/projects/hg3.png",
      "/projects/hg4.png",
      "/projects/hg5.png",
      "/projects/hg6.png",
      "/projects/hg7.png",
      "/projects/hg8.png",
      "/projects/hg9.png",
      "/projects/hg10.png",
      "/projects/hg11.png",
      "/projects/hg12.png",
      "/projects/hg13.png"
    ],

    githubUrl: "https://github.com/alhusnaahanifah/ProjectPPL_Kelompok6.git",
  },
  {
    slug: "local-craft-marketplace",
    title: "Local Craft Marketplace",
    sub: "Fullstack web application",
    tags: ["Web"],
    overview:
      "A marketplace platform connecting local artisans with buyers, featuring listings, orders, and a seller dashboard.",
    problem:
      "Local artisans lacked an accessible digital platform to sell their handmade products beyond physical markets.",
    contributions: [
      "Built the full frontend with Next.js and TypeScript",
      "Designed the database schema in MongoDB",
      "Implemented seller dashboard and order management system",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    challenges:
      "Designing a flexible product schema that supported varied attributes across different craft categories was tricky to scale cleanly.",
    result:
      "Successfully launched a working MVP with 10 onboarded sellers and over 100 product listings within the first month.",
    keyLearning:
      "Strengthened skills in fullstack architecture decisions and learned to balance schema flexibility with query performance.",
    images: ["/projects/craft-1.png", "/projects/craft-2.png", "/projects/craft-3.png"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}