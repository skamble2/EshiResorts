// Full-bleed background film behind the hero. It starts on page load and
// loops for as long as the page is open.
//
// The file must be encoded at a constant frame rate. A variable-rate encode
// gives the browser a fragmented frame-timing table, it cannot schedule
// presentation from it, and it falls back to painting roughly four frames a
// second - the film appears to stutter and then catch up. See README.
export default function HeroSlideshow() {
  return (
    <div className="absolute inset-0 bg-forest-950">
      <video
        src="/videos/hero-loop.mp4"
        poster="/images/home/film-poster.jpg"
        aria-label="A film of Eshi Resorts, its grounds and the surrounding forest"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
