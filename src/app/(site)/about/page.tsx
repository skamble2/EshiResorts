import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Eshi Resorts - a sanctuary of luxury and nature in Bhimashankar's pristine forests, near the sacred Jyotirlinga temple. Rooms, recreation, sunsets and jungle walks.",
};

// Each card may carry an optional `image` once owner photos arrive.
type Recreation = { title: string; body: string; image?: string };

const recreation: Recreation[] = [
  {
    title: "Carrom & Pool Table",
    body: "Engage in timeless fun with a classic carrom board or enjoy a lively match on our expertly maintained pool table - perfect for friendly competitions that bring laughter and camaraderie.",
    image: "/images/recreation/pool-table.jpg",
  },
  {
    title: "Chess",
    body: "For those drawn to strategic challenges, our elegant chess sets offer the perfect retreat to immerse yourself in thoughtful play, within the soothing sounds of the surrounding forest.",
    image: "/images/recreation/chess.jpg",
  },
  {
    title: "Karaoke Evenings",
    body: "Unleash your inner star during spirited evenings with karaoke sessions - guests gather to sing their favourite songs under the canopy of stars, creating joyful moments filled with music and laughter.",
    image: "/images/recreation/karaoke.jpg",
  },
  {
    title: "The Library",
    body: "Lose yourself in a carefully curated library - a cosy haven of books spanning genres from gripping novels and travelogues to spiritual texts. Find a quiet nook and let the words transport you.",
    image: "/images/recreation/library.jpg",
  },
  {
    title: "Trampoline & Swings",
    body: "For guests young and young at heart, the trampoline and swings provide joyful freedom beneath the canopy, where laughter dances on the breeze and every leap celebrates lighthearted fun.",
    image: "/images/recreation/trampoline.jpg",
  },
  {
    title: "Bicycle Rides",
    body: "Explore the enchanting surroundings on our bicycles, designed for tranquil rides through winding forest trails and charming nearby villages - the Sahyadri landscape at a pace that lets you connect with its soul.",
    image: "/images/recreation/bicycle.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Where luxury meets the wild"
        subtitle="A sanctuary for rejuvenation, adventure and soulful connection with nature."
        image="/images/brochure/valley-mist.jpg"
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow">Welcome to Eshi Resorts</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-forest-900 sm:text-4xl">
              A sanctuary in Bhimashankar&apos;s forests
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-soft">
              Nestled in the heart of Bhimashankar&apos;s pristine forests near
              the sacred temple, Eshi Resorts offers a perfect blend of luxury
              and nature. Surrounded by ancient woodlands and vibrant wildlife,
              it provides a serene escape from the everyday.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              Guests can unwind in tranquil solitude while immersing themselves
              in the beauty of the wilderness. It is a sanctuary for
              rejuvenation, adventure and soulful connection with nature.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/brochure/resort-mist.jpg"
                alt="Eshi Resorts villa in the morning mist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recreation */}
      <section className="bg-sand-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Recreational Experiences</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              Where joy meets serenity
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-soft">
              At Eshi, we believe relaxation is enriched by moments of playful
              connection and quiet reflection. Nestled amidst the tranquil
              beauty of the Sahyadri hills, our recreational offerings invite
              guests to unwind, engage and create lasting memories in harmony
              with nature.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recreation.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200">
                  {r.image && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-xl font-semibold text-forest-900">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-soft">
                      {r.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-stone-soft">
              At Eshi Resorts, recreation is not just about passing time - it is
              an invitation to reconnect with joy, nature and each other,
              creating moments that linger long after your stay.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rooms */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="md:order-2">
            <p className="eyebrow">Stay Surrounded by Serenity</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-forest-900 sm:text-4xl">
              Rooms in harmony with nature
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-soft">
              At Eshi Resorts, every room is a tranquil retreat designed to
              harmonise luxury with nature. Whether nestled against the backdrop
              of misty mountains or embraced by dense jungle greens, our
              accommodation promises comfort, calm and captivating views - warm,
              earthy interiors, large windows that invite the outdoors in, and
              the soothing silence of the forest all around.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              Our Premium King Rooms, gracefully perched on the second floor,
              offer not just a room but a sanctuary of serenity - where every
              morning dawns with panoramic vistas of mist-kissed valleys and
              rolling Sahyadri hills.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/slideshow/slide-2.jpg"
                alt="Canopy bed in a luxury room at Eshi Resorts"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sunset */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/brochure/sunset.jpg"
          alt="Sunset over the rolling hills of Bhimashankar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-sand-50 md:py-32">
          <Reveal>
            <p className="eyebrow text-gold-400">Sunset Views, Soulful Moments</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug sm:text-4xl">
              Nature&apos;s grandest show, daily
            </h2>
            <p className="mt-6 text-base leading-relaxed text-sand-100/90">
              Sunset at Eshi Resorts is nothing short of spectacle - an
              unforgettable daily ritual. As the sun begins its slow descent
              behind the rolling hills of Bhimashankar, the entire resort is
              bathed in a warm, golden glow. The sky shifts from soft orange to
              deep crimson, then melts into hues of rose, lavender and dusky
              violet, creating a surreal atmosphere that feels like a dream
              suspended in time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Jungle walk */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow">A Soul-Stirring Jungle Walk</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-forest-900 sm:text-4xl">
              Wander where time slows
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-soft">
              Step beyond the boundaries of everyday life and immerse yourself
              in the pristine wilderness that cradles Eshi Resorts. Our guided
              jungle walks are a rare invitation to wander through ancient
              forests where nature&apos;s secrets unfold with every step - the
              soft earth beneath your feet, winding trails shaded by towering
              trees, the symphony of birdsong and the distant call of wildlife
              echoing through the canopy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-soft">
              Each walk is a journey of discovery - vibrant wildflowers, the
              intricate web of vines, and perhaps a glimpse of the elusive
              creatures that call this jungle home. Whether you seek adventure,
              solitude or a mindful retreat, a walk in the jungle at Eshi is
              more than a stroll - it is an awakening of the senses.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/brochure/forest-trail.jpg"
                alt="Misty forest trail near Eshi Resorts"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-20 text-center sm:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Come experience it for yourself
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-soft">
            We don&apos;t just offer a room - we create unforgettable
            experiences that last a lifetime.
          </p>
          <div className="mt-8">
            <BookNowButton className="px-8 py-3.5 text-base" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
