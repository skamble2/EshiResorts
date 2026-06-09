import { groq } from "next-sanity";

// Listing: published posts, newest first.
export const postsQuery = groq`
*[_type == "post" && defined(slug.current) && publishedAt <= now()]
  | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  "author": author->{name, picture},
  "categories": categories[]->{title, "slug": slug.current}
}`;

// Single post by slug.
export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  body,
  "author": author->{name, picture, bio},
  "categories": categories[]->{title, "slug": slug.current}
}`;

// Slugs for static params / sitemap.
export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;

// All category titles (for the filter bar).
export const categoriesQuery = groq`
*[_type == "category"] | order(title asc) { title, "slug": slug.current }`;
