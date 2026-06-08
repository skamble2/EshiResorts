import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BookNowButton from "@/components/BookNowButton";
import { StarRow } from "@/components/icons";
import { site } from "@/content/site";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "Real stories from guests of Eshi Resorts, Bhimashankar. Rated 8.6 on Booking.com and #1 in the area on TripAdvisor.",
};

const summary = [
  {
    platform: "Booking.com",
    score: site.ratings.booking.score,
    scale: "/ 10",
    count: `${site.ratings.booking.count} verified reviews`,
    href: "https://www.booking.com/hotel/in/eshi-resorts-bhimashankars-jungle-luxury-resort.html",
  },
  {
    platform: "TripAdvisor",
    score: site.ratings.tripadvisor.score,
    scale: "/ 5",
    count: "#1 hotel in the area",
    href: "https://www.tripadvisor.in/Hotel_Review-g28217009-d28163249-Reviews-Eshi_Resorts_And_Restaurant_Bhimashankars_Jungle_Luxury_Resort-Karkudi_Pune_Distric.html",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guest Reviews"
        title="Loved by our guests"
        subtitle="Real stories from those who've stayed with us. We're honoured to have been part of your journey."
        image="/images/gallery/room-3.jpg"
      />

      {/* Rating summary */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {summary.map((s, i) => (
            <Reveal key={s.platform} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center ring-1 ring-sand-200">
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-soft">
                  {s.platform}
                </p>
                <p className="mt-3 font-serif text-5xl font-semibold text-forest-800">
                  {s.score}
                  <span className="text-2xl text-stone-soft">{s.scale}</span>
                </p>
                <StarRow className="mt-3" />
                <p className="mt-3 text-sm text-stone-soft">{s.count}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-forest-700 hover:text-gold-600"
                >
                  Read all reviews →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Review list */}
      <section className="bg-sand-100 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="space-y-5">
            {reviews.map((r, i) => (
              <Reveal key={r.name + i} delay={(i % 3) * 0.08}>
                <figure className="rounded-2xl bg-white p-7 ring-1 ring-sand-200">
                  <div className="flex items-center justify-between">
                    <StarRow />
                    <span className="text-xs font-medium uppercase tracking-wider text-stone-soft">
                      {r.source}
                    </span>
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-ink">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-forest-800">
                    {r.name}
                    {r.location && (
                      <span className="font-normal text-stone-soft">
                        {" "}
                        · {r.location}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            We would love to host you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-soft">
            Come write your own story at Eshi Resorts.
          </p>
          <div className="mt-8">
            <BookNowButton className="px-8 py-3.5 text-base" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
