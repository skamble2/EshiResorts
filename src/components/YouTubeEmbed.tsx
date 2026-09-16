"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  poster: string;
};

// Click-to-play facade: nothing loads from YouTube until the guest asks for it,
// which keeps the page fast and matches the resort film's never-autoplay behaviour.
export default function YouTubeEmbed({ id, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-2xl bg-forest-950 shadow-lg ring-1 ring-sand-200"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-forest-950 shadow-lg ring-1 ring-sand-200"
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1024px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-forest-950/25 transition-colors duration-300 group-hover:bg-forest-950/10" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-forest-900" aria-hidden>
          <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
        </svg>
      </span>
    </button>
  );
}
