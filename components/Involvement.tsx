import Image from "next/image";

const involvement = {
	title: "Vice Head - Student Welfare Management (Pengelolaan Kesejahteraan Mahasiswa)",
	organization: "Computer Science Student Association",
	employmentType: "Organization",
	date: "2024 - 2025",
	photos: [
		{
			src: "/involve.jpg",
			alt: "Involvement photo 1",
		},
		{
			src: "/involve(2).jpg",
			alt: "Involvement photo 2",
		},
		{
			src: "/involve(3).jpg",
			alt: "Involvement photo 3",
		},
		{
			src: "/involve(4).jpg",
			alt: "Involvement photo 4",
		},
		{
			src: "/involve(5).jpg",
			alt: "Involvement photo 5",
		},
	],
	responsibilities: [
		"Coordinated departmental members and supervised organizational work programs.",
		"Participated in strategic planning and departmental decision-making.",
		"Monitored members' performance and provided guidance to improve teamwork and organizational effectiveness.",
		"Represented the Head of Department in departmental responsibilities when required.",
	],
	outcomes: [
		"Strengthened leadership and team coordination skills by managing departmental operations throughout a one-year term.",
		"Developed effective communication and decision-making skills through collaboration with organizational leaders and committee members",
		"Contributed to the successful execution of departmental programs by ensuring coordination, accountability, and continuous member development.",
	],
};

export default function Involvement() {
	return (
		<section className="bg-[#081124] py-20 px-6" id="involvement">
			<div className="max-w-5xl mx-auto">
				<p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
					Organization
				</p>
				<h2 className="text-3xl font-medium text-white mb-4">Involvement</h2>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#101b32] p-5">
						<div className="flex items-start justify-between gap-4 mb-4">
							<div>
								<p className="text-xs uppercase tracking-widest text-cyan-300/70 mb-2">
									{involvement.date}
								</p>
							</div>
							<span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 whitespace-nowrap">
								{involvement.employmentType}
							</span>
						</div>
						<div className="my-2">
							<h3 className="text-2xl font-medium text-white leading-tight">
								{involvement.title}
							</h3>
						</div>

						<p className="text-sm text-gray-400 mb-4 leading-relaxed">
							<span className="text-white">Organization:</span> {involvement.organization}
						</p>

						<div>
							<p className="text-xs uppercase tracking-widest text-white mb-3">
								Responsibilities
							</p>
							<ul className="flex flex-col gap-3">
								{involvement.responsibilities.map((item) => (
									<li key={item} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
										<span className="text-cyan-400 mt-0.5">—</span>
										<span className="flex-1 text-justify">{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="border-t border-white/10 mt-4 pt-4">
							<p className="text-xs uppercase tracking-widest text-white mb-3">
								Key outcomes
							</p>
							<ul className="flex flex-col gap-3">
								{involvement.outcomes.map((item) => (
									<li key={item} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
										<span className="text-cyan-400 mt-0.5">—</span>
										<span className="flex-1 text-justify">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="lg:col-span-6 lg:col-start-7">
						<div className="grid grid-cols-2 gap-3">
							{involvement.photos.map((photo, index) => (
								<div
									key={photo.src}
									className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#101b32] ${
										index === 0 ? "col-span-2 h-72" : "h-44"
									}`}
								>
										<Image
											src={photo.src}
											alt={photo.alt}
											fill
											sizes={index === 0 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 50vw, 28vw"}
											className="object-cover"
										/>
									<div className="absolute inset-0 bg-linear-to-t from-[#081124]/60 via-transparent to-transparent" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function InsightCard({ title, text }: { title: string; text: string }) {
	return (
		<div className="rounded-xl border border-white/10 bg-white/5 p-4">
			<h4 className="text-sm font-medium text-white mb-2">{title}</h4>
			<p className="text-sm text-gray-400 leading-relaxed">{text}</p>
		</div>
	);
}
