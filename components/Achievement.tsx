import Image from "next/image";

const achievements = [
  {
    title: "National Finalist",
    subtitle: "LIDM 2024 National Finalist",
    description:
      "Selected as a national finalist after successfully passing proposal evaluation,product demonstration, and presentation stages. Collaborated in developing aninnovative educational technology solution addressing real-world learning challenges.",
    images: [
      {
        src: "/finalis (1).jpg",
        alt: "Portrait photo for finalist achievement",
      },
      {
        src: "/finalis (2).jpg",
        alt: "Event photo for finalist achievement",
      },
    ],
  },
  {
    title: "Bronze Medal  🥉",
    subtitle: "LIDM 2025 Bronze Medal",
    description:
      "Awarded the Bronze Medal for contributing to the development of an interactive physics learning platform integrating computer vision technology. The project was also registered for Copyright protection by DGIP Indonesia.",
    images: [
      {
        src: "/bronze.jpg",
        alt: "Formal photo for bronze medal achievement",
      },
      {
        src: "/bronze-husna.jpg",
        alt: "Competition moment for bronze medal achievement",
      },
    ],
  },
];

export default function Achievement() {
  return (
    <section id="achievement" className="bg-[#081124] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
          Recognition
        </p>
        <h2 className="text-3xl font-medium text-white mb-4">Achievements</h2>
        <p className="w-full text-sm text-gray-400 mb-10 leading-relaxed text-justify">
          Recognition earned through the National Digital Innovation Competition (Lomba Inovasi Digital Mahasiswa – LIDM), 
          a nationwide competition organized by the Ministry of Higher Education, Science, and Technology of Indonesia (Kemendiktisaintek). 
          These achievements reflect my passion for developing impactful technology solutions, addressing real-world challenges, 
          and continuously growing through innovation and collaboration.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl border border-white/10 bg-[#101b32] p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-300/70 mb-2">
                    {achievement.subtitle}
                  </p>
                  <h3 className="text-2xl font-medium text-white">{achievement.title}</h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Highlight
                </span>
              </div>

              <p className="text-sm text-gray-400 text-justify leading-relaxed mb-4">
                {achievement.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {achievement.images.map((image) => (
                  <div
                    key={image.alt}
                    className="relative h-56 overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#081124]/55 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}
