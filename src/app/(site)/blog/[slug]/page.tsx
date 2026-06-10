import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortableTextBody from "@/components/blog/PortableTextBody";
import BookNowButton from "@/components/BookNowButton";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/queries";
import { type Post, formatDate } from "@/sanity/types";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
  return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

async function getPost(slug: string) {
  return client.fetch<Post | null>(
    postBySlugQuery,
    { slug },
    { next: { tags: ["posts", `post:${slug}`] } }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : undefined;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article>
      {/* Cover hero */}
      <header className="relative flex min-h-[52vh] items-end overflow-hidden">
        {post.coverImage ? (
          <Image
            src={urlForImage(post.coverImage).width(1800).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-forest-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-forest-950/20" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-12 text-sand-50 sm:px-8">
          {post.categories && post.categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((c) => (
                <span
                  key={c.slug}
                  className="rounded-full bg-sand-50/15 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  {c.title}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-sand-100/80">
            {post.author?.name ? `By ${post.author.name} · ` : ""}
            {formatDate(post.publishedAt)}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-14 sm:px-8">
        {post.excerpt && (
          <p className="mb-8 border-l-4 border-gold-500 pl-5 font-serif text-xl italic text-forest-800">
            {post.excerpt}
          </p>
        )}
        <PortableTextBody value={post.body} />

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-sand-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className="text-sm font-semibold text-forest-700 hover:text-gold-600"
          >
            ← Back to all stories
          </Link>
          <BookNowButton className="px-6 py-3 text-sm" />
        </div>
      </div>
    </article>
  );
}
