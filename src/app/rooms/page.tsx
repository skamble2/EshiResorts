import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import PageHero from "@/components/PageHero";
import { rooms } from "@/content/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Five luxurious 510 sq ft rooms with king beds, mountain and jungle views at Eshi Resorts, Bhimashankar.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Rooms & Suites"
        subtitle="Five distinct retreats - each 510 sq ft with a king bed, framed by mountain and jungle."
        image="/images/gallery/room-1.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={(i % 3) * 0.1}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
