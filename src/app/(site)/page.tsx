import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import BookNowButton from "@/components/BookNowButton";
import HeroSlideshow from "@/components/HeroSlideshow";
import WeatherBadge from "@/components/WeatherBadge";
import WeekWeather from "@/components/WeekWeather";
import Faq from "@/components/Faq";
import { site, whatsappLink } from "@/content/site";
import { rooms } from "@/content/rooms";
import { stats, experiences, amenities, testimonials } from "@/content/home";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/40 to-forest-950/80" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-sand-50">
          <h1 className="font-display text-5xl leading-tight sm:text-7xl md:text-8xl">
            Eshi Resorts
          </h1>
          <p className="mt-5 font-script text-2xl text-gold-400 sm:text-3xl md:text-4xl">
            Bhimashankar&apos;s Jungle Luxury Resort
          </p>
          <div className="mt-7">
            <WeatherBadge />
          </div>
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold-500 px-9 py-3.5 text-base font-semibold tracking-wide text-forest-950 transition-colors duration-300 hover:bg-gold-400"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-sand-50/70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ---------------- Stats bar ---------------- */}
      <section className="bg-forest-900 text-sand-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl font-semibold text-gold-400 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider2 text-sand-200/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Weather this week ---------------- */}
      <section className="bg-sand-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Plan Your Visit</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              This week at the resort
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-soft">
              Live forecast for Bhimashankar, 900m up in the Sahyadris.
            </p>
          </Reveal>
          <div className="mt-10">
            <WeekWeather />
          </div>
        </div>
      </section>

      {/* ---------------- Welcome / intro ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow">Welcome to Eshi Resorts</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-forest-900 sm:text-4xl">
              A harmonious blend of luxury and the wild
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-soft">
              Nestled in Taleghar on the Rajgurunagar-Bhimashankar road, Eshi
              Resorts offers luxurious accommodation and scenic views where
              luxury meets the wild. Unwind in our opulent rooms, explore the
              vibrant jungle, or simply relax by the tranquil valley.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              We don&apos;t just offer a room - we create unforgettable
              experiences that last a lifetime.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-gold-600"
              >
                Discover our story
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src="/images/gallery/room-2.jpg" alt="Luxurious room with valley view and private jacuzzi" fill sizes="33vw" className="object-cover" />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src="/images/brochure/valley-mist.jpg" alt="Mist over the Sahyadri valley" fill sizes="33vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Signature rooms ---------------- */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Stay With Us</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              Our Signature Rooms
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              Distinct retreats, each 510 sq ft with a king bed and views that
              change with the light.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.slice(0, 3).map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.1}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-forest-700/30 px-8 py-3 text-sm font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-sand-50"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Experiences ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Eshi Experience</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            More than a stay
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={(i % 4) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-200 transition-shadow duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-forest-900">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-soft">
                    {exp.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Amenities strip */}
        <Reveal>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-sand-200 pt-10">
            {amenities.map((a) => (
              <span key={a} className="text-sm font-medium text-stone-soft">
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="bg-forest-950 py-20 text-sand-50 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-400">Guest Stories</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
              Loved by our guests
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-2xl bg-forest-900 p-7 ring-1 ring-forest-700/40">
                  <div className="text-gold-400" aria-hidden>★★★★★</div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-sand-100/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold text-sand-50">{t.name}</p>
                    <p className="text-xs text-sand-200/60">{t.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center rounded-full border border-sand-50/30 px-8 py-3 text-sm font-semibold text-sand-50 transition-colors hover:bg-sand-50/10"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Good to Know</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              Everything you need to plan a smooth, restful stay at Eshi Resorts.
            </p>
          </Reveal>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/brochure/sunset.jpg"
          alt="Golden sunset over the hills at Eshi Resorts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-sand-50 md:py-32">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold leading-snug sm:text-5xl">
              Your jungle escape begins here
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand-100/90">
              Book a stay at Eshi Resorts, or talk to us directly - we&apos;d
              love to help plan your getaway.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookNowButton className="px-8 py-3.5 text-base" />
              <a
                href={whatsappLink("Hi")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-sand-50/40 px-8 py-3.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-sand-50/10"
              >
                Enquire on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-sand-200/70">
              Or call us at{" "}
              <a href={`tel:${site.phoneRaw}`} className="font-semibold text-gold-400">
                {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
