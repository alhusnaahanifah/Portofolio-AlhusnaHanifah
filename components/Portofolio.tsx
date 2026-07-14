import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  sub: string;
  image: string;
  alt: string;
  tags: string[];
};

const projects: Project[] = [
  {
    slug: "CIRVIA",
    title: "Circuit Virtual Interactive Application (CIRVIA)-Competition Project 🥉",
    sub: "Computer Vision · Hand Gesture · Fullstack web application · Bronze Medal at LIDM 2025",
    image: "/projects/cirvia.png",
    alt: "CIRVIA project preview",
    tags: ["AI", "Web", "Competition"],
  },
  {
    slug: "medical-image-captioning",
    title: "Medical Image Captioning AI - Undergraduate Thesis Project",
    sub: "Computer vision · NLP",
    image: "/projects/skripsi (2).png",
    alt: "Radiology captioning AI project preview",
    tags: ["AI/ML", "NLP", "CV"],
  },
  {
    slug: "AR-molecular-explorer",
    title: "AR Molecular Explorer-Competition Project 🏅",
    sub: "Augmented Reality · Educational Application · Finalist at LIDM 2024",
    image: "/projects/arme.png",
    alt: "AR Molecular Explorer project preview",
    tags: ["AR", "Mobile Application", "Education"],
  },
  {
    slug: "HidroGrow",
    title: "HidroGrow - Academic Project",
    sub: "Web Application",
    image: "/projects/hg1.png",
    alt: "HidroGrow project preview",
    tags: ["Web", "Recommendation","Fullstack"],
  },
];

export default function Portofolio() {
  return (
    <section id="portfolio" className="bg-[#081124] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
          My Work
        </p>
        <h2 className="text-3xl font-medium text-white mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => {
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="text-left bg-[#101b32] border border-white/5 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-cyan-500/30 transition-all duration-200 block"
              >
                <div className="h-36 bg-linear-to-br from-[#16243f] to-[#0e1a30] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    priority={project.slug === "CIRVIA"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#081124]/55 via-[#081124]/10 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-medium text-sm">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{project.sub}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-cyan-400 flex items-center gap-1">
                      View details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}