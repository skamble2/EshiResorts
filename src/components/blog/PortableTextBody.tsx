import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-relaxed text-stone-soft">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-3xl font-semibold text-forest-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-serif text-2xl font-semibold text-forest-900">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-gold-500 pl-5 font-serif text-xl italic text-forest-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 ml-5 list-disc space-y-2 text-stone-soft">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 ml-5 list-decimal space-y-2 text-stone-soft">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-forest-900">{children}</strong>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-forest-700 underline decoration-gold-500 underline-offset-2 hover:text-gold-600"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={urlForImage(value).width(1400).url()}
              alt={value.alt || ""}
              width={1400}
              height={933}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-stone-soft">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextBody({ value }: { value: unknown }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />;
}
