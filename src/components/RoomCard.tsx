import Image from "next/image";
import { type Room, inr, roomFacts } from "@/content/rooms";
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

        <div className="mt-5 flex items-end justify-between border-t border-sand-200 pt-4">
          <div>
            <span className="font-serif text-2xl font-semibold text-forest-800">
              {inr(room.price)}
            </span>
            <span className="text-xs text-stone-soft"> / night</span>
          </div>
          <BookNowButton className="px-5 py-2.5 text-xs">Book Now</BookNowButton>
        </div>
      </div>
    </article>
  );
}
