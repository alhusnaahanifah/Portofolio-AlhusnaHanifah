"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Trophy,
  Briefcase,
  Users,
  Code2,
  Mail,
  Workflow,
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "portfolio", label: "Projects", icon: Briefcase },
  { id: "experience", label: "Experience", icon: Workflow },
  { id: "achievement", label: "Achievements", icon: Trophy },
  { id: "involvement", label: "Involvement", icon: Users },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );

        if (mostVisible.target.id) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const iconClassName = (sectionId: string) =>
    sectionId === activeSection ? "text-cyan-400" : "text-white";

  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50">
      <nav className="bg-[#081124] p-4 rounded-full flex flex-col gap-6 shadow-[0_0_40px_#00bfff]">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${label} section`}
            aria-current={activeSection === id ? "true" : undefined}
            className="group relative transition-transform hover:scale-110"
          >
            <Icon className={iconClassName(id)} size={20} />

            <span
              className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2
                         whitespace-nowrap rounded-md bg-[#081124] border border-white/10
                         px-3 py-1.5 text-xs font-medium text-white
                         opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                         transition-all duration-150 shadow-lg"
            >
              {label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}