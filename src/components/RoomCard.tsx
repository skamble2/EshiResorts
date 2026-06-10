import Image from "next/image";
import { type Room, roomFacts, amenityMeta } from "@/content/rooms";
import BookNowButton from "./BookNowButton";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-200 transition-shadow duration-300 hover:shadow-xl">
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
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-forest-900">
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

        <div className="mt-5">
          <BookNowButton className="w-full py-2.5 text-xs">Book Now</BookNowButton>
        </div>
      </div>
    </article>
  );
}
