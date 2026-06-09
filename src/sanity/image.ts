import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

// Source type derived from the builder so it tracks the package version.
type ImageSource = Parameters<typeof builder.image>[0];

export function urlForImage(source: ImageSource) {
  return builder.image(source).auto("format").fit("max");
}
