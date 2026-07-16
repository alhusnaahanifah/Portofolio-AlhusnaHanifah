import { BadgeCheck, CalendarDays, GraduationCap, Sparkles, Users } from "lucide-react";

const experienceItems = [
  {
    year: "2025",
    title: "Laboratory Assistant",
    course: "Data Science",
  },
  {
    year: "2025",
    title: "Laboratory Assistant",
    course: "Language & Automata Theory",
  },
  {
    year: "2025",
    title: "Laboratory Assistant",
    course: "Data Structures & Algorithms",
  },
  {
    year: "2024",
    title: "Laboratory Assistant",
    course: "Data Mining",
  },
  {
    year: "2024",
    title: "Laboratory Assistant",
    course: "Programming",
  },
];

const stats = [
  { value: "5", label: "Courses assisted" },
  { value: "2", label: "Academic years" },
  { value: "40+", label: "Students mentored" },
];

const highlights = [
  "Universitas Syiah Kuala",
  "Faculty of Mathematics and Natural Sciences",
  "Department of Informatics",
];

export default function WorkExp() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#081124] py-20 px-6">

      <div className="relative max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-2">
          Experience
        </p>
        <h2 className="text-3xl font-medium text-white mb-10">Work Experience</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-xl border border-white/10 bg-white/3 p-6 sm:p-7">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Professional Experience</p>
            <h3 className="text-2xl font-semibold text-white">Laboratory Teaching Assistant</h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed text-justify">
              Experience supporting laboratory classes in data-related and programming courses at
              Universitas Syiah Kuala. Focused on guiding students, reinforcing course material,
              and helping create a productive learning environment.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/3 px-3 py-4 text-center">
                  <p className="text-xl font-semibold text-cyan-300">{stat.value}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#091122] p-4">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-semibold text-white">Institution</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <BadgeCheck className="h-4 w-4 text-cyan-300 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-white/10 bg-white/3 p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="h-4 w-4 text-cyan-300" />
              <p className="text-xs uppercase tracking-widest text-gray-500">Timeline</p>
            </div>

            <div className="relative space-y-4 sm:space-y-5 pl-0 sm:pl-10">
              <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-linear-to-b from-cyan-400/0 via-cyan-400/35 to-cyan-400/0 sm:block" />

              {experienceItems.map((item) => (
                <div key={`${item.year}-${item.course}`} className="relative">
                  <div className="absolute -left-9 top-5 hidden h-6 w-6 items-center justify-center rounded-full border border-cyan-500/20 bg-[#081124] shadow-[0_0_0_6px_rgba(8,17,36,0.8)] sm:flex">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#091122] p-2 sm:p-3 sm:pl-6 transition-colors hover:border-cyan-400/20 hover:bg-[#0b1528]">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-4">

                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-300 mb-3">
                            <span>{item.year}</span>
                            <span className="h-1 w-1 rounded-full bg-cyan-300/70" />
                            <span>Laboratory Assistant</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white">{item.course}</h4>
                        </div>
                      </div>

                      <span className="self-start text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 whitespace-nowrap">
                        Universitas Syiah Kuala
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}