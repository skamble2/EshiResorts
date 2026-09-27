"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Slide =
  | { kind: "film"; src: string; poster: string; alt: string }
  | { kind: "photo"; src: string; alt: string };

// Owner-curated backdrops that cross-fade behind the hero content.
const slides: Slide[] = [
  {
    kind: "film",
    src: "/videos/hero-loop.mp4",
    poster: "/images/home/film-poster.jpg",
    alt: "Aerial view over the pool and villas at Eshi Resorts",
  },
  { kind: "photo", src: "/images/slideshow/slide-1.jpg", alt: "Eshi Resorts villas rising above the forest canopy" },
  { kind: "photo", src: "/images/slideshow/slide-2.jpg", alt: "The stone entrance to Eshi Restaurant, lit at dusk" },
  { kind: "photo", src: "/images/slideshow/slide-3.jpg", alt: "Eshi Restaurant's timber-roofed dining hall in the evening" },
  { kind: "photo", src: "/images/slideshow/slide-4.jpg", alt: "Canopy bed and valley-facing balcony in a premium room" },
  { kind: "photo", src: "/images/slideshow/slide-5.jpg", alt: "Infinity pool overlooking the Sahyadri valley" },
];

const PHOTO_MS = 5000;
// Long enough to play the clip through once, so it never visibly restarts.
const FILM_MS = 8500;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      slides[index].kind === "film" ? FILM_MS : PHOTO_MS
    );
    return () => clearTimeout(id);
  }, [index]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slide.kind === "film" ? (
            // Only mounted while it is the active slide, so the browser streams
            // the opening seconds and stops once we move on.
            <video
              src={slide.src}
              poster={slide.poster}
              aria-label={slide.alt}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              // The first photo follows the film, so have it ready by then.
              priority={index === 1}
              sizes="100vw"
              className="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-gold-400" : "w-3 bg-sand-50/50 hover:bg-sand-50/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
