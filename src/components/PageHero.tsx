import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative flex h-[52vh] min-h-[360px] items-center justify-center overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-forest-950/65" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-sand-50">
        {eyebrow && <p className="eyebrow text-gold-400">{eyebrow}</p>}
        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand-100/90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
