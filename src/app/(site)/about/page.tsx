import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Eshi Resorts blends luxury with the wild in the Sahyadri valley at Taleghar, Bhimashankar - opulent stays, dining, events and adventure.",
};

const pillars = [
  {
    title: "Event & Party",
    body: "Celebrate against a backdrop of valley and jungle - intimate gatherings to memorable occasions.",
  },
  {
    title: "Restaurant",
    body: "Multi-cuisine dining at Cafe@100, crafted from fresh local produce with warm hospitality.",
  },
  {
    title: "Travel & Camping",
    body: "Guided exploration of Bhimashankar's temples, trails and Western Ghats wildlife.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Where luxury meets the wild"
        subtitle="Nestled in Taleghar, Bhimashankar - a harmonious blend of opulence and untouched nature."
        image="/images/gallery/exterior-4.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow">Welcome to Eshi Resorts</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-forest-900 sm:text-4xl">
              An escape into the Sahyadri valley
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-soft">
              Nestled in Taleghar on the Rajgurunagar-Bhimashankar road, Eshi
              Resorts offers luxurious accommodation and scenic views where
              luxury meets the wild. Our resort offers a harmonious blend of
              luxury and adventure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              Unwind in our opulent accommodation, explore the vibrant jungle, or
              simply relax by the tranquil valley. Whether it&apos;s a brief
              getaway or an extended retreat, our team is dedicated to providing
              every guest with a memorable experience in a stunning natural
              setting.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/brochure/green-hills.jpg"
                alt="Mist-covered green hills and walkway at Eshi Resorts"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              More than a place to stay
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-sand-200">
                  <h3 className="font-serif text-xl font-semibold text-forest-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-soft">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Come experience it for yourself
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-soft">
            We don&apos;t just offer a room - we create unforgettable experiences
            that last a lifetime.
          </p>
          <div className="mt-8">
            <BookNowButton className="px-8 py-3.5 text-base" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
