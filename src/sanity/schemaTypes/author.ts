import { defineType, defineField } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "bio", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "name", media: "picture" } },
});
