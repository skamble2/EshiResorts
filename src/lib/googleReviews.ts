// Live Google rating + reviews via the official Places API (New).
//
// Env (see .env.example):
//   GOOGLE_MAPS_API_KEY  - required for live data
//   GOOGLE_PLACE_ID      - optional; resolved automatically once if absent
//
// Responses are cached for 6 hours (Next fetch cache), so quota usage is tiny
// (~4 calls/day). Returns null when no key is set or anything fails, letting
// the UI fall back to the static snapshot.

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  when: string; // e.g. "2 months ago"
};

export type GoogleReviewData = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
};

const SEARCH_QUERY =
  "Eshi Resorts and Restaurant Bhimashankar Tale Ghar Maharashtra";
const CACHE = { next: { revalidate: 21600, tags: ["google-reviews"] } };

async function resolvePlaceId(key: string): Promise<string | null> {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({ textQuery: SEARCH_QUERY }),
    ...CACHE,
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.places?.[0]?.id ?? null;
}

export async function getGoogleReviews(): Promise<GoogleReviewData | null> {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) return null;

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await resolvePlaceId(key));
    if (!placeId) return null;

    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        ...CACHE,
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (typeof data?.rating !== "number") return null;

    type RawReview = {
      authorAttribution?: { displayName?: string };
      rating?: number;
      text?: { text?: string };
      relativePublishTimeDescription?: string;
    };

    return {
      rating: data.rating,
      count: data.userRatingCount ?? 0,
      reviews: ((data.reviews ?? []) as RawReview[])
        .filter((r) => r.text?.text)
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google guest",
          rating: r.rating ?? 5,
          text: r.text!.text!,
          when: r.relativePublishTimeDescription ?? "",
        })),
    };
  } catch {
    return null;
  }
}
