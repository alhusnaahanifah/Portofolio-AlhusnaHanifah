// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return notFound();

  return (
    <section className="bg-[#081124] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Header */}
        <div className="flex gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-medium text-white mb-2">{project.title}</h1>
        <p className="text-gray-500 text-sm mb-10">{project.sub}</p>

        {/* Image gallery */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden border border-white/5 ${
                i === 0 ? "col-span-2 h-72" : "h-40"
              }`}
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.demoUrl && (
            
              <a href={project.demoUrl}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-[#06121f] text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live demo
            </a>
          )}
          {project.videoUrl && (
            
              <a href={project.videoUrl}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm"
            >
              <PlayCircle className="w-4 h-4" />
              Video demo
            </a>
          )}
          {project.githubUrl && (
            
              <a href={project.githubUrl}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 text-sm"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub repo
            </a>
          )}
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-10">

          <DetailSection title="Overview">
            <p>{project.overview}</p>
          </DetailSection>

          <DetailSection title="Problem">
            <p>{project.problem}</p>
          </DetailSection>

          <DetailSection title="My contributions">
            <ul className="flex flex-col gap-2">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                  <span className="text-cyan-400 mt-0.5">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="Challenges">
            <p>{project.challenges}</p>
          </DetailSection>

          <DetailSection title="Result">
            <p>{project.result}</p>
          </DetailSection>

          <DetailSection title="Key learning">
            <p>{project.keyLearning}</p>
          </DetailSection>

        </div>
      </div>
    </section>
  );
}

// Tambahkan komponen ikon GitHub custom (SVG kecil)
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}


function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/5 pt-6">
      <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
        {title}
      </p>
      <div className="text-gray-400 text-sm leading-relaxed">{children}</div>
    </div>
  );
}