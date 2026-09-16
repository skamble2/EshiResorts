"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { places, placeBands, type PlaceBand } from "@/content/places";
import PlaceCard from "./PlaceCard";

type Filter = "All" | PlaceBand;

// Guests plan around the time they have free, so that is the filter -
// the category rides along as a badge on each card.
export default function ExploreGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...placeBands];
  const visible =
    active === "All" ? places : places.filter((p) => p.band === active);

  return (
    <div>
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

      <div
        key={active}
        className="grid auto-rows-fr gap-7 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((place, i) => (
          <motion.div
            key={place.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: Math.min(i, 6) * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <PlaceCard place={place} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
