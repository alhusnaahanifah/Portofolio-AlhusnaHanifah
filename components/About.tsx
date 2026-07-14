"use client";

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Software Engineering",
  "Full-Stack Development",
  "Computer Vision",
  "Natural Language Processing",
  "Data Mining",
];

const coreValues = ["Curiosity", "Discipline", "Growth Mindset", "Teamwork", "Innovation"];

const roles = ["Software Engineer", "AI Engineer", "Machine Learning Engineer", "IT Developer"];

const stats = [
  { value: "2", label: "National Awards" },
  { value: "10+", label: "Projects Built" },
  { value: "3.90", label: "GPA / 4.00 Cum Laude" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#081124] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
          Get to know me
        </p>
        <h2 className="text-3xl font-medium text-white mb-10">A Bit About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/mehusna.jpeg"
                  alt="Alhusna Hanifah"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[560px] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081124] via-[#081124]/70 to-transparent p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Available for
                  </span>
                </div>
              </div>

              {/* Stats sit under the photo on desktop, filling the column */}
              <div className="hidden lg:grid grid-cols-3 gap-3 mt-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-4 text-center"
                  >
                    <p className="text-xl font-semibold text-cyan-300">{s.value}</p>
                    <p className="text-[11px] text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Intro */}
            <div className="rounded-xl border border-white/10 p-6 sm:p-7">
              <h3 className="text-2xl font-semibold text-white">Alhusna Hanifah, S.Kom</h3>

              <p className="text-xs uppercase tracking-widest text-gray-500 mt-3 mb-2">
                Available for
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {roles.map((r) => (
                  <span
                    key={r}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-justify text-sm leading-relaxed">
                I enjoy transforming ideas into software that people can actually use. My
                interests lie at the intersection of Artificial Intelligence and Software
                Engineering, where I explore how intelligent systems can solve practical problems
                through reliable and user-friendly applications.
              </p>
              <p className="text-gray-400 text-justify text-sm leading-relaxed mt-4">
                Throughout university, I actively challenged myself through research, national
                innovation competitions, and collaborative software projects. These experiences
                strengthened not only my technical skills but also my ability to work in teams,
                communicate ideas, and continuously learn new technologies.
              </p>
              <p className="text-gray-400 text-justify text-sm leading-relaxed mt-4">
                As I begin my professional career, I am looking for opportunities where I can
                contribute, grow as an engineer, and build technology that creates meaningful
                impact.
              </p>
            </div>

            {/* Stats — mobile/tablet only, since desktop shows them beside the photo */}
            <div className="grid grid-cols-3 gap-3 lg:hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-4 text-center"
                >
                  <p className="text-xl font-semibold text-cyan-300">{s.value}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Education & details */}
            <div className="rounded-xl border border-white/10 p-6 sm:px-7 sm:py-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Education</p>
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-4 gap-y-0 mb-4 items-center">
                <div className="row-span-2 shrink-0 rounded-xl border border-white/10 bg-[#081124] p-2 self-start">
                  <img
                    src="/Logo-Usk1.png"
                    alt="Universitas Syiah Kuala logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <p className="text-white font-medium min-w-0">Bachelor of Informatics</p>
                <p className="text-sm font-medium text-white text-right whitespace-nowrap">2022-2026</p>

                <p className="text-sm text-gray-400 min-w-0">Universitas Syiah Kuala</p>
                <div className="flex items-center justify-end gap-2 text-sm whitespace-nowrap">
                  <span className="text-gray-500">GPA</span>
                  <span className="text-gray-300">3,90/4.00</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span className="text-gray-500">Location</span>
                  <span className="text-gray-300">Aceh, Indonesia</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span className="text-gray-500">Languages</span>
                  <span className="text-gray-300 text-right">
                    Indonesian, English
                  </span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-xl border border-white/10 p-6 sm:p-7">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Interests</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400"
                  >
                    {i}
                  </span>
                ))}
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Core values</p>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value) => (
                  <span
                    key={value}
                    className="text-xs px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}