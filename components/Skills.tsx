import { Sparkles, Code2, Brain, Layers, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    label: "Programming Languages",
    icon: Code2,
    skills: ["Python", "PHP", "JavaScript", "Java"],
  },
  {
    label: "AI & Data",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Transformers"],
    highlight: true,
  },
  {
    label: "Frameworks",
    icon: Layers,
    skills: ["Next.js", "React", "Django", "AdonisJS", "Vue.js", "Laravel"],
  },
  {
    label: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    label: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Figma"],
  },
];

const professionalSkills = [
  "Leadership",
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Analytical Thinking",
  "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#081124] py-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          What I work with
        </p>
        <h2 className="text-3xl font-medium text-white mb-10">Skills & Toolkit</h2>

        {/* Technical skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {skillCategories.map(({ label, icon: Icon, skills, highlight }) => (
            <div
              key={label}
              className={`rounded-xl border p-5 ${
                highlight
                  ? "border-cyan-500/25 bg-cyan-500/5"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    highlight
                      ? "bg-cyan-500/15 text-cyan-300"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-white">{label}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional skills - visually distinct */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400">
              <Users className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold text-white">Professional Skills</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {professionalSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-300 bg-cyan-500/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}