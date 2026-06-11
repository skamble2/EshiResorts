"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { type Room, roomFacts, amenityMeta } from "@/content/rooms";
import BookNowButton from "./BookNowButton";

type Props = { room: Room; onClose: () => void };

export default function RoomDetailModal({ room, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const count = room.gallery.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  // Esc to close, arrows to navigate, lock body scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/85 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-sand-50 shadow-2xl"
      >
        {/* Slideshow */}
        <div className="relative aspect-[16/10] shrink-0 bg-forest-950">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={room.gallery[index]}
                alt={`${room.name} - photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Close */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/60 text-sand-50 backdrop-blur transition-colors hover:bg-forest-950/80"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {count > 1 && (
            <>
              <button
                aria-label="Previous photo"
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-forest-950/60 text-sand-50 backdrop-blur transition-colors hover:bg-forest-950/80"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                aria-label="Next photo"
                onClick={next}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-forest-950/60 text-sand-50 backdrop-blur transition-colors hover:bg-forest-950/80"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dots + counter */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
                {room.gallery.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Photo ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-gold-400" : "w-2.5 bg-sand-50/50"
                    }`}
                  />
                ))}
              </div>
              <span className="absolute bottom-3 right-3 z-10 rounded-full bg-forest-950/60 px-2.5 py-1 text-xs text-sand-50 backdrop-blur">
                {index + 1} / {count}
              </span>
            </>
          )}
        </div>

        {/* Details */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-forest-900 sm:text-3xl">
            {room.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-stone-soft">
            {roomFacts.size} · {roomFacts.bed} · {roomFacts.occupancy}
          </p>

          <div className="mt-5 space-y-4">
            {room.details.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-stone-soft">
                {p}
              </p>
            ))}
          </div>

          {/* Amenities with labels */}
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-sand-200 pt-5 sm:grid-cols-3">
            {room.amenities.map((key) => {
              const a = amenityMeta[key];
              return (
                <li key={key} className="flex items-center gap-2 text-xs text-stone-soft">
                  <Image
                    src={a.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain opacity-80"
                  />
                  {a.label}
                </li>
              );
            })}
          </ul>

          <div className="mt-6">
            <BookNowButton className="w-full py-3" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
