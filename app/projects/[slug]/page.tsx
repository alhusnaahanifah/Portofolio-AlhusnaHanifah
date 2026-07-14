// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  PlayCircle,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return notFound();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#040812] px-6 py-12 text-white sm:py-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(0,209,255,0.16), transparent 30%), radial-gradient(circle at top right, rgba(59,130,246,0.16), transparent 28%), linear-gradient(180deg, rgba(8,17,36,0.95), rgba(4,8,18,1))",
        }}
      />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">

        <Link
          href="/#portfolio"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8">
            <header className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {project.sub}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Video demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub repo
                  </a>
                )}
              </div>
            </header>

            <section className="rounded-[28px] border border-white/10 bg-slate-950/40 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-5">
              <ProjectGallery images={project.images} title={project.title} />
            </section>
          </div>

          <aside className="grid gap-4 self-start lg:sticky lg:top-8">
            <InfoCard title="Overview" accent="cyan">
              <p>{project.overview}</p>
            </InfoCard>
            <InfoCard title="Problem" accent="blue">
              <p>{project.problem}</p>
            </InfoCard>
            <InfoCard title="My contributions" accent="teal">
              <ul className="flex flex-col gap-3">
                {project.contributions.map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Technologies" accent="slate">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </InfoCard>
            <InfoCard title="Challenges" accent="cyan">
              <p>{project.challenges}</p>
            </InfoCard>
            <InfoCard title="Result" accent="blue">
              <p>{project.result}</p>
            </InfoCard>
            <InfoCard title="Key learning" accent="teal">
              <p>{project.keyLearning}</p>
            </InfoCard>
          </aside>
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

function InfoCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent: "cyan" | "blue" | "teal" | "slate";
  children: React.ReactNode;
}) {
  const accentClass =
    accent === "cyan"
      ? "from-cyan-400/20 via-cyan-400/10 to-transparent"
      : accent === "blue"
        ? "from-blue-400/20 via-blue-400/10 to-transparent"
        : accent === "teal"
          ? "from-teal-400/20 via-teal-400/10 to-transparent"
          : "from-white/10 via-white/5 to-transparent";

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-slate-950/20 backdrop-blur-xl">
      <div className={`h-1 bg-linear-to-r ${accentClass}`} />
      <div className="p-5 sm:p-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          {title}
        </p>
        <div className="text-sm leading-7 text-slate-300">{children}</div>
      </div>
    </section>
  );
}