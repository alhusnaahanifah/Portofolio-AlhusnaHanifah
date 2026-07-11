"use client";

import React, { useEffect, useRef, useState } from "react";

const TYPED_TEXT = "Alhusna Hanifah";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Typewriter state
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className="bg-[#081124] h-[800px] flex flex-col items-center justify-center relative shadow-xl overflow-hidden">
      <video ref={videoRef} className="hero-video" src="/videobg.mp4" muted playsInline preload="auto" autoPlay />

      <div className="relative z-10 flex flex-col items-center">
        <img src="/profile.png" alt="profile" className="w-40 h-40 rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_40px_#00bfff]" />

        <h1 className="text-6xl font-bold text-white mt-8">
          Hi, I'm{" "}
          <span className="text-cyan-400">
            {displayed}
            {charIndex < TYPED_TEXT.length && (
              <span className="animate-pulse">|</span>
            )}
          </span>
        </h1>

        {/* sisa JSX tetap sama */}
        <p className="text-2xl text-gray-300 mt-4"> Informatics Graduate</p>
        <p className="max-w-xl text-center text-gray-400 mt-6 whitespace-nowrap">
          Passionate about Artificial Intelligence, Machine Learning, and Web Development.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="px-8 py-3 rounded-full bg-cyan-500 text-white">View Projects</button>
          <button className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400">Download CV</button>
        </div>
      </div>
    </section>
  );
}