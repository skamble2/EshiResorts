import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BookNowButton from "@/components/BookNowButton";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse of Eshi Resorts, Bhimashankar - misty valleys, jungle trails, luxurious rooms and golden Sahyadri sunsets.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of Eshi"
        subtitle="Misty valleys, jungle trails, golden sunsets and luxurious rooms - the spirit of the wild, captured."
        image="/images/brochure/valley-mist.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <GalleryGrid />
      </section>

      <section className="bg-sand-100 py-16 text-center md:py-20">
        <Reveal className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            See it in person
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-soft">
            Photos only tell half the story. Reserve your stay and experience the
            wild for yourself.
          </p>
          <div className="mt-8">
            <BookNowButton className="px-8 py-3.5 text-base" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
