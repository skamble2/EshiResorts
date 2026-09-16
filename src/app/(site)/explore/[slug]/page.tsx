import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BookNowButton from "@/components/BookNowButton";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/content/places";

export function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);
  if (!place) return { title: "Not found" };
  return {
    title: `${place.name} - near Eshi Resorts, Bhimashankar`,
    description: place.blurb,
    openGraph: place.image ? { images: [{ url: place.image }] } : undefined,
  };
}

export default async function PlacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  const others = places.filter((p) => p.slug !== place.slug).slice(0, 3);
  const facts = [
    { label: "Distance", value: place.distance },
    { label: "Time needed", value: place.duration },
    { label: "Plan for", value: place.band },
    ...(place.bestTime ? [{ label: "Best time", value: place.bestTime }] : []),
  ];

  return (
    <>
      {/* Heading on colour, matching every other page */}
      <section className="flex min-h-[260px] items-center justify-center bg-forest-950 px-6 pb-16 pt-32 sm:min-h-[300px] sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-3xl text-center text-sand-50">
          <p className="eyebrow text-gold-400">{place.category}</p>
          <h1 className="mt-4 font-serif text-[1.6875rem] font-semibold sm:text-[2.25rem] md:text-[2.8125rem]">
            {place.name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand-100/90">
            {place.blurb}
          </p>
        </div>
      </section>

      {/* The photo shown properly, rather than washed out behind the title */}
      {place.image && (
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={place.image}
            alt={place.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Practical facts first - the thing a guest actually needs */}
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {f.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-forest-900">
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-8 md:py-20">
        <Reveal>
          <div className="space-y-5">
            {place.details.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-stone-soft sm:text-lg sm:leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-forest-800">
            Highlights
          </h2>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {place.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-stone-soft"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {h}
              </li>
            ))}
          </ul>
          {place.carry && (
            <p className="mt-6 rounded-xl bg-sand-100 px-5 py-4 text-sm leading-relaxed text-stone-soft">
              <span className="font-semibold text-forest-800">What to carry:</span>{" "}
              {place.carry}
            </p>
          )}
        </Reveal>

        {place.gallery && place.gallery.length > 1 && (
          <Reveal className="mt-12 grid gap-4 sm:grid-cols-2">
            {place.gallery.slice(1).map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-sand-200"
              >
                <Image
                  src={src}
                  alt={place.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>
        )}

        {place.video && (
          <Reveal className="mt-12">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-forest-800">
              On film
            </h2>
            <YouTubeEmbed
              id={place.video.id}
              title={place.name}
              poster={place.video.poster}
            />
          </Reveal>
        )}

        {place.readMore && (
          <Reveal className="mt-10">
            <Link
              href={place.readMore.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-600"
            >
              {place.readMore.label} →
            </Link>
          </Reveal>
        )}
      </section>

      <section className="bg-sand-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Also nearby</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              While you are here
            </h2>
          </Reveal>
          <div className="mt-10 grid auto-rows-fr gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <PlaceCard key={p.slug} place={p} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-full border border-forest-700/30 px-8 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-sand-50"
            >
              All places to visit
            </Link>
            <BookNowButton className="px-8 py-3 text-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
