"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// Nature backdrops that cross-fade behind the hero content.
const slides = [
  { src: "/images/gallery/exterior-4.jpg", alt: "Aerial view of Eshi Resorts in the Bhimashankar valley" },
  { src: "/images/brochure/valley-mist.jpg", alt: "Mist over the Sahyadri hills" },
  { src: "/images/brochure/sunset.jpg", alt: "Golden sunset over the hills" },
  { src: "/images/brochure/forest-trail.jpg", alt: "Misty forest trail" },
  { src: "/images/brochure/green-hills.jpg", alt: "Walkway over mist-covered green hills" },
  { src: "/images/brochure/jungle-walk.jpg", alt: "Jungle walking trail under blue skies" },
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
