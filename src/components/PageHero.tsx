type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

// A plain white band. Only the home page carries imagery behind its heading;
// every other page opens on white so the content leads.
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="flex min-h-[260px] items-center justify-center bg-white px-6 pb-16 pt-32 sm:min-h-[300px] sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-3xl text-center text-forest-950">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 font-serif text-[1.6875rem] font-semibold sm:text-[2.25rem] md:text-[2.8125rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-soft">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
