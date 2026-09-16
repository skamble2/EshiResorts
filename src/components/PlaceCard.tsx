import Image from "next/image";
import Link from "next/link";
import { type Place } from "@/content/places";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link
      href={`/explore/${place.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-200 transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-forest-900">
        {place.image ? (
          <Image
            src={place.image}
            alt={place.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full items-center justify-center px-6 text-center font-serif text-xl text-sand-100/80">
            {place.name}
          </span>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-medium tracking-wide text-sand-50 backdrop-blur">
          {place.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-forest-900 transition-colors group-hover:text-gold-600">
          {place.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wider text-stone-soft">
          {place.distance} · {place.duration}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-soft">
          {place.blurb}
        </p>
        <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-forest-800 group-hover:text-gold-600">
          Plan this visit →
        </span>
      </div>
    </Link>
  );
}
