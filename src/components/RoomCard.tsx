"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { type Room, roomFacts, amenityMeta } from "@/content/rooms";
import BookNowButton from "./BookNowButton";
import RoomDetailModal from "./RoomDetailModal";

export default function RoomCard({ room }: { room: Room }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        aria-label={`View details of ${room.name}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-200 transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-medium tracking-wide text-sand-50 backdrop-blur">
            {room.view}
          </span>
          {room.gallery.length > 1 && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-forest-950/70 px-2.5 py-1 text-xs text-sand-50 backdrop-blur">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
                <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 21h12a2 2 0 0 0 2-2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {room.gallery.length}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-xl font-semibold text-forest-900 transition-colors group-hover:text-gold-600">
            {room.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-stone-soft">
            {roomFacts.size} · {roomFacts.bed} · Sleeps 2+1
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-soft">
            {room.blurb}
          </p>

          {/* Amenity icons (resort's own icon set) */}
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2.5 border-t border-sand-200 pt-4">
            {room.amenities.map((key) => {
              const a = amenityMeta[key];
              return (
                <li
                  key={key}
                  title={a.label}
                  className="flex items-center gap-1.5 text-xs text-stone-soft"
                >
                  <Image
                    src={a.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain opacity-80"
                  />
                  <span className="sr-only">{a.label}</span>
                </li>
              );
            })}
          </ul>

          <div
            className="mt-5 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(true)}
              className="flex-1 rounded-full border border-forest-700/30 py-2.5 text-xs font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-sand-50"
            >
              View Details
            </button>
            <BookNowButton className="flex-1 py-2.5 text-xs">
              Book Now
            </BookNowButton>
          </div>
        </div>
      </article>

      <AnimatePresence>
        {open && <RoomDetailModal room={room} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
