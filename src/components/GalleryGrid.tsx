"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from "@/content/gallery";

type Filter = "All" | GalleryCategory;

export default function GalleryGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...galleryCategories];
  const visible =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-forest-800 text-sand-50"
                  : "bg-white text-stone-soft ring-1 ring-sand-200 hover:ring-gold-500 hover:text-forest-800"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Masonry-style columns. Keyed by filter so items re-mount + fade in. */}
      <div
        key={active}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
      >
        {visible.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: Math.min(i, 8) * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-2xl ring-1 ring-sand-200"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
