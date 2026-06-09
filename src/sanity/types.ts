export type Category = { title: string; slug: string };

export type PostAuthor = {
  name: string;
  picture?: unknown;
  bio?: string;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: unknown;
  author?: PostAuthor;
  categories?: Category[];
};

export type Post = PostListItem & {
  body?: unknown;
  author?: PostAuthor;
};

export const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
