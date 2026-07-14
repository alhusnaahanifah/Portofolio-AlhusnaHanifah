  "use client";

  import { useEffect, useMemo, useState } from "react";
  import { createPortal } from "react-dom";
  import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

  export function ProjectGallery({
    images,
    title,
  }: {
    images: string[];
    title: string;
  }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const isLargeCollection = images.length > 5;

    const activeImage = useMemo(
      () => images[activeIndex] ?? images[0],
      [activeIndex, images],
    );

    useEffect(() => {
      if (!isOpen) return;

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false);
          return;
        }

        if (event.key === "ArrowRight") {
          setActiveIndex((current) => (current + 1) % images.length);
        }

        if (event.key === "ArrowLeft") {
          setActiveIndex((current) => (current - 1 + images.length) % images.length);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [images.length, isOpen]);

    const openImage = (index: number) => {
      setActiveIndex(index);
      setIsOpen(true);
    };


    return (
      <>
        {isLargeCollection ? (
          <>
            {/* > 5 gambar */}
            <div className="grid gap-3 lg:grid-cols-[1.55fr_1fr]">
              <button
                type="button"
                onClick={() => openImage(0)}
                className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 text-left shadow-xl shadow-black/30 md:min-h-112"
                aria-label={`Open ${title} image 1`}
              >
                <img
                  src={images[0]}
                  alt={`${title} screenshot 1`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">
                      Highlight
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      Klik untuk memperbesar
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/90 backdrop-blur">
                    <Maximize2 className="h-3.5 w-3.5" />
                    View
                  </span>
                </div>
              </button>

              <div className="grid max-h-136 grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-2">
                {images.slice(1).map((image, index) => {
                  const imageIndex = index + 1;

                  return (
                    <button
                      key={image}
                      type="button"
                      onClick={() => openImage(imageIndex)}
                      className="group relative aspect-4/3 overflow-hidden rounded-[20px] border border-white/10 bg-slate-900/80 text-left shadow-lg shadow-black/25"
                      aria-label={`Open ${title} image ${imageIndex + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${title} screenshot ${imageIndex + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                        View
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-3 text-xs tracking-[0.18em] text-slate-400">
              Total {images.length} images
            </p>
          </>
        ) : (
          <>
            {/* <= 5 gambar */}
            <div className="grid gap-3 md:grid-cols-[1.8fr_0.9fr]">
              <button
                type="button"
                onClick={() => openImage(0)}
                className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 text-left shadow-xl shadow-black/30 md:min-h-112"
                aria-label={`Open ${title} image 1`}
              >
                <img
                  src={images[0]}
                  alt={`${title} screenshot 1`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">
                      Highlight
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      Klik untuk memperbesar
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/90 backdrop-blur">
                    <Maximize2 className="h-3.5 w-3.5" />
                    View
                  </span>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                {images.slice(1).map((image, index) => {
                  const imageIndex = index + 1;

                  return (
                    <button
                      key={image}
                      type="button"
                      onClick={() => openImage(imageIndex)}
                      className="group relative aspect-4/3 overflow-hidden rounded-[20px] border border-white/10 bg-slate-900/80 text-left shadow-lg shadow-black/25"
                      aria-label={`Open ${title} image ${imageIndex + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${title} screenshot ${imageIndex + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
                        View
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {isOpen && activeImage &&
          createPortal(
            <div
              className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
              role="presentation"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="fixed right-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#050b18]/95 text-slate-200 shadow-lg shadow-black/40 backdrop-blur transition hover:bg-white/10 sm:right-6 sm:top-6"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((current) => (current - 1 + images.length) % images.length);
                }}
                className="fixed left-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:inline-flex"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((current) => (current + 1) % images.length);
                }}
                className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:inline-flex"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="flex min-h-full items-start justify-center p-4 sm:items-center">
                <div
                  className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#050b18] shadow-2xl shadow-black/60"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#050b18]/95 px-4 py-3 backdrop-blur sm:px-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                        Image preview
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        {title} - {activeIndex + 1} / {images.length}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center bg-black/20 px-4 py-6 sm:px-8">
                    <img
                      src={activeImage}
                      alt={`${title} screenshot ${activeIndex + 1} enlarged`}
                      className="max-h-[75vh] w-full rounded-[20px] object-contain"
                    />
                  </div>

                  <div className="border-t border-white/10 bg-white/3 p-4">
                    <div className="flex gap-2 overflow-x-auto">
                      {images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition ${
                            index === activeIndex
                              ? "border-cyan-300 ring-2 ring-cyan-300/40"
                              : "border-white/10 opacity-70 hover:opacity-100"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        >
                          <img
                            src={image}
                            alt={`${title} thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </>
    );
  }
