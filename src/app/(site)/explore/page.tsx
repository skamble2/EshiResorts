import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ExploreGrid from "@/components/ExploreGrid";
import BookNowButton from "@/components/BookNowButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Places to Visit Near Bhimashankar",
  description:
    "Temples, forts, waterfalls and viewpoints within reach of Eshi Resorts - the Bhimashankar Jyotirlinga, the wildlife sanctuary, Shivneri Fort, Lenyadri Caves, Nagphani Point and more, with distances and how long each takes.",
};

export default function ExplorePage() {
  return (
    <>
      <PageHero
        eyebrow="Explore"
        title="Nearby places to visit"
        subtitle="A Jyotirlinga, a wildlife sanctuary, forts, caves and cloud-covered viewpoints - all within reach of the resort."
        image="/images/brochure/green-hills.jpg"
      />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center sm:px-8 md:pt-20">
        <Reveal>
          <p className="text-base leading-relaxed text-stone-soft">
            Bhimashankar rewards guests who wander. Some of these are a short
            drive and an easy hour; others are worth giving a whole day to.
            Filter by the time you have free, and our front desk will happily
            help you plan the route.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:py-16">
        <ExploreGrid />
      </section>

      <section className="bg-sand-100 py-16 text-center md:py-20">
        <Reveal className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Make a weekend of it
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-soft">
            Most of this is a morning or an afternoon away. Stay a second night
            and you can see the temple at dawn and still catch a sunset from
            Nagphani.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BookNowButton className="px-8 py-3.5 text-base" />
            <Link
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-forest-700/30 px-8 py-3.5 text-base font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-sand-50"
            >
              Find the resort
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
