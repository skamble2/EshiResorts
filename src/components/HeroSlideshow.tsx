"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// Owner-curated backdrops that cross-fade behind the hero content.
const slides = [
  { src: "/images/slideshow/slide-1.jpg", alt: "Eshi Resorts villas rising above the forest canopy" },
  { src: "/images/slideshow/slide-2.jpg", alt: "The stone entrance to Eshi Restaurant, lit at dusk" },
  { src: "/images/slideshow/slide-3.jpg", alt: "Eshi Restaurant's timber-roofed dining hall in the evening" },
  { src: "/images/slideshow/slide-4.jpg", alt: "Canopy bed and valley-facing balcony in a premium room" },
  { src: "/images/slideshow/slide-5.jpg", alt: "Infinity pool overlooking the Sahyadri valley" },
];

const INTERVAL = 5000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, []);

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
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
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
