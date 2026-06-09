"use client";

import { useMemo, useState } from "react";
import PostCard from "./PostCard";
import { type PostListItem } from "@/sanity/types";

export default function BlogList({ posts }: { posts: PostListItem[] }) {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories?.forEach((c) => set.add(c.title)));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const visible =
    active === "All"
      ? posts
      : posts.filter((p) => p.categories?.some((c) => c.title === active));

  return (
    <div>
      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                active === c
                  ? "bg-forest-800 text-sand-50"
                  : "bg-white text-stone-soft ring-1 ring-sand-200 hover:text-forest-800 hover:ring-gold-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div key={active} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
