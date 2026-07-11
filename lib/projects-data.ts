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
    slug: "plant-recommendation-system",
    title: "Plant Recommendation System",
    sub: "Machine learning · Classification",
    tags: ["ML"],
    overview:
      "A recommendation engine that suggests suitable plants based on soil type, climate, and user care preferences.",
    problem:
      "Many beginner gardeners struggle to choose plants that match their environment, leading to high failure rates and wasted resources.",
    contributions: [
      "Designed and trained the classification model",
      "Built the data preprocessing pipeline",
      "Developed the recommendation API with Flask",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
    challenges:
      "The biggest challenge was handling imbalanced training data across plant categories, which initially skewed predictions toward common species.",
    result:
      "The model achieved 87% accuracy on the test set and was deployed as a working prototype used by 50+ test users.",
    keyLearning:
      "Learned the importance of data balancing techniques and how feature engineering significantly impacts model performance more than algorithm choice alone.",
    images: ["/projects/plant-1.png", "/projects/plant-2.png", "/projects/plant-3.png"],
    demoUrl: "#",
    videoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "radiology-captioning-ai",
    title: "Radiology Captioning AI",
    sub: "Computer vision · NLP",
    tags: ["CV", "NLP"],
    overview:
      "An AI system that generates descriptive medical captions from radiology images to assist diagnostic workflows.",
    problem:
      "Radiologists face heavy workloads, and manual reporting is time-consuming, increasing the risk of delayed diagnoses.",
    contributions: [
      "Fine-tuned MedCLIP for medical image encoding",
      "Integrated BioBART for caption generation",
      "Built the evaluation pipeline with BLEU and ROUGE metrics",
    ],
    technologies: ["PyTorch", "MedCLIP", "BioBART", "Python"],
    challenges:
      "Medical datasets were limited in size and required domain-specific preprocessing, making the model prone to overfitting on small samples.",
    result:
      "Achieved a BLEU-4 score of 0.42 on the validation set, demonstrating clinically relevant caption quality comparable to baseline research.",
    keyLearning:
      "Gained deep understanding of multimodal architectures and the unique challenges of applying NLP techniques to specialized medical domains.",
    images: ["/projects/radiology-1.png", "/projects/radiology-2.png"],
    demoUrl: "#",
    videoUrl: "#",
    githubUrl: "#",
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