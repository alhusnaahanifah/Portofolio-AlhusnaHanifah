"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Mail, Sparkles } from "lucide-react";

const contactItems = [
  {
    label: "LinkedIn",
    description: "Connect professionally",
    value: "linkedin.com/in/alhusnahanifah",
    href: "https://www.linkedin.com/in/alhusnahanifah",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/alhusnaahanifah",
    href: "https://github.com/alhusnaahanifah",
    description: "Browse my projects and code",
    icon: GitHubIcon,
  },
];

export default function Contact() {
    const [openResume, setOpenResume] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-[#081124] py-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="relative text-xs uppercase tracking-widest text-gray-500 mb-1 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" />
          Connect with me
        </p>
        <h2 className="relative text-3xl font-medium text-white mb-4">Get in Touch</h2>

        {/* Status badge */}
        <div className="relative inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-emerald-300">Available for full-time opportunities</span>
        </div>

        <p className="relative text-sm text-gray-400 w-full leading-relaxed mb-10 text-justify">
          I&apos;m always open to discussing software engineering, artificial intelligence, research
          opportunities, internships, and collaborative projects. Whether you have an exciting
          idea or simply want to connect, I&apos;d be happy to hear from you.
        </p>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: single flat CTA card */}
          <div className="lg:col-span-5 rounded-xl border border-cyan-500/15 bg-linear-to-br from-cyan-500/5 to-transparent p-6 sm:p-7 flex flex-col">
            <p className="text-xs uppercase tracking-widest text-cyan-300/70 mb-2">Let&apos;s talk</p>
            <h4 className="text-2xl font-semibold text-white leading-snug">
              Build something together
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              AI research, software development, or a meaningful new project — I&apos;m ready to
              contribute from day one.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-lg border border-white/10 bg-white/3 px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Based in</p>
                <p className="text-sm text-white">Aceh, Indonesia</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/3 px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Response</p>
                <p className="text-sm text-white">Within 24h</p>
              </div>
            </div>

           <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
            href="mailto:alhusnahanifah@gmail.com?subject=Hello%20Alhusna"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-[#021226] transition-transform hover:-translate-y-0.5"
            >
            Send Email
            <Mail className="h-4 w-4" />
            </Link>

            <div className="relative">
            <button
                onClick={() => setOpenResume((v) => !v)}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/3 text-sm font-medium text-white flex items-center gap-2 hover:border-cyan-400/30"
            >
                Resume
                <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${openResume ? "rotate-180" : ""}`}
                />
            </button>

            {openResume && (
                <div className="absolute top-full mt-2 left-0 min-w-[200px] bg-[#0c1a33] border border-cyan-500/30 rounded-lg overflow-hidden shadow-lg shadow-black/30 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link
                    href="/cv-resume-eng.pdf"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                    🇬🇧 English
                </Link>
                <Link
                    href="/cv-resume-ind.pdf"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                    🇮🇩 Bahasa Indonesia
                </Link>
                </div>
            )}
            </div>
            </div>
            </div>

          {/* Right: profile links */}
          <div className="lg:col-span-7 rounded-xl border border-white/10 bg-[#0a1324]/80 p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Find me online</p>
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group rounded-xl border border-white/10 bg-white/3 px-4 py-4 flex items-center justify-between gap-4 transition-colors hover:border-cyan-400/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-white">{item.description}</p>
                        <p className="text-xs text-gray-500 mt-1 break-all">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    );    
    }

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M16 8.5c2.2 0 4 1.8 4 4V20h-3.5v-6.3c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8V20H9.5V8.9H13V10c.6-.9 1.8-1.5 3-1.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9h3.5V20H5V9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 6.5a1.5 1.5 0 1 0 0 .01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.3-.9-1.3-.8-.6.1-.6.1-.6.8.1 1.3.9 1.3.9.8 1.3 2 .9 2.4.7.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.4.8 2.2 0 3.1-1.8 3.8-3.6 4 .3.3.6.9.6 1.8v2.6c0 .2.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}