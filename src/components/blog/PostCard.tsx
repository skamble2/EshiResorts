import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { type PostListItem, formatDate } from "@/sanity/types";

export default function PostCard({ post }: { post: PostListItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-200 transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
          {post.coverImage ? (
            <Image
              src={urlForImage(post.coverImage).width(800).height(500).url()}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {post.categories && post.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((c) => (
              <span
                key={c.slug}
                className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-forest-700"
              >
                {c.title}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-serif text-xl font-semibold leading-snug text-forest-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-gold-600">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-soft">
            {post.excerpt}
          </p>
        )}

        <p className="mt-5 text-xs uppercase tracking-wider text-stone-soft">
          {post.author?.name ? `${post.author.name} · ` : ""}
          {formatDate(post.publishedAt)}
        </p>
      </div>
    </article>
  );
}
