"use client";

import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const TYPED_TEXT = "Alhusna Hanifah";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Typewriter state
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!isDeleting && charIndex < TYPED_TEXT.length) {
      // Mengetik maju
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + TYPED_TEXT[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);

    } else if (!isDeleting && charIndex === TYPED_TEXT.length) {
      // Selesai mengetik → jeda 2 detik → mulai hapus
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);

    } else if (isDeleting && displayed.length > 0) {
      // Menghapus mundur
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 60); // lebih cepat dari ngetik
      return () => clearTimeout(timeout);

    } else if (isDeleting && displayed.length === 0) {
      // Selesai hapus → jeda 0.5 detik → mulai lagi
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, displayed]);

  // ... sisa useEffect video tetap sama
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let replayTimeout: number | null = null;
    const handleEnded = () => {
      replayTimeout = window.setTimeout(() => {
        try { if (!v) return; v.currentTime = 0; v.play().catch(() => {}); } catch (e) {}
      }, 15000);
    };
    const handlePlaying = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    v.addEventListener("ended", handleEnded);
    v.addEventListener("playing", handlePlaying);
    v.addEventListener("pause", handlePause);
    v.play().catch(() => {});
    return () => {
      v.removeEventListener("ended", handleEnded);
      v.removeEventListener("playing", handlePlaying);
      v.removeEventListener("pause", handlePause);
      if (replayTimeout) clearTimeout(replayTimeout);
    };
  }, []);

  return (
    <section id="hero" className="bg-[#081124] min-h-dvh md:h-200 px-4 flex flex-col items-center justify-center relative shadow-xl">
      <div className="absolute inset-0 overflow-hidden">
        <video ref={videoRef} className="hero-video" src="/videobg.mp4" muted playsInline preload="auto" autoPlay />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl">
        <img
          src="/profile.png"
          alt="profile"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_40px_#00bfff]"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-8 text-center">
          Hi, I'm{" "}
          <span className="text-cyan-400">
            {displayed}
            {charIndex < TYPED_TEXT.length && <span className="animate-pulse">|</span>}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 text-center">
          AI Engineer • Full-Stack Developer
        </p>
        <p className="max-w-xl text-center text-sm md:text-base text-gray-400 mt-6">
          Fresh Graduate in Informatics | Cum Laude (GPA 3.90/4.00)
        </p>
        <p className="max-w-xl text-center text-sm md:text-base text-gray-400">
          🥉 Bronze Medalist — National Digital Innovation Competition (LIDM) 2025.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-full bg-cyan-500 text-white text-center"
          >
            Explore My Work
          </a>

          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setResumeOpen((v) => !v)}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 flex items-center justify-center gap-2"
            >
              Resume
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${resumeOpen ? "rotate-180" : ""}`}
              />
            </button>

            {resumeOpen && (
              <div className="absolute top-full mt-2 left-0 right-0 sm:right-auto min-w-full sm:min-w-50 bg-[#0c1a33] border border-cyan-500/30 rounded-lg overflow-hidden shadow-lg shadow-black/30 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <a href="/cv-resume-eng.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                  🇬🇧 English
                </a>
                <a href="/cv-resume-ind.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                  🇮🇩 Bahasa Indonesia
                </a>
              </div>
            )}
          </div>
        </div>
        </div>
    </section>
  );
}