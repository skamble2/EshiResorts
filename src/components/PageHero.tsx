type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

// A plain forest-green band. Only the home page carries imagery behind its
// heading; every other page opens on colour so the content leads.
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="flex min-h-[260px] items-center justify-center bg-forest-950 px-6 pb-16 pt-32 sm:min-h-[300px] sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-3xl text-center text-sand-50">
        {eyebrow && <p className="eyebrow text-gold-400">{eyebrow}</p>}
        <h1 className="mt-4 font-serif text-[1.6875rem] font-semibold sm:text-[2.25rem] md:text-[2.8125rem]">
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
