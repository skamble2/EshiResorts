import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import PageHero from "@/components/PageHero";
import { rooms } from "@/content/rooms";

export const metadata: Metadata = {
  title: "Rooms in Harmony with Nature",
  description:
    "Eight room categories from 300 to 650 sq ft, with king beds, canopy beds, jacuzzi bathtubs and mountain or jungle views at Eshi Resorts, Bhimashankar.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Rooms in Harmony with Nature"
        subtitle="Stay surrounded by serenity - warm, earthy interiors and large windows that invite the misty Sahyadri valleys right in."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
        <div className="grid auto-rows-fr gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
