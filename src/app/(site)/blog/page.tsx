import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/blog/BlogList";
import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";
import { type PostListItem } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, guides and dispatches from Eshi Resorts, Bhimashankar - jungle walks, seasons in the Sahyadris, food and travel tips.",
};

// New posts appear within ~60s without needing the publish webhook.
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<PostListItem[]>(
    postsQuery,
    {},
    { next: { tags: ["posts"] } }
  );

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="The Eshi Blog"
        subtitle="Stories from the Sahyadris - jungle walks, changing seasons, food, and tips for your stay."
        image="/images/brochure/forest-trail.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        {posts.length === 0 ? (
          <p className="text-center text-stone-soft">
            Our first stories are on the way. Check back soon.
          </p>
        ) : (
          <BlogList posts={posts} />
        )}
      </section>
    </>
  );
}
