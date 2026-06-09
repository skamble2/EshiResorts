import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Sanity publish webhook target. When a post is published/edited, Sanity POSTs
 * here; we revalidate the blog routes so the change is live within seconds.
 *
 * Configure in Sanity: API → Webhooks → URL:
 *   https://eshiresorts.com/api/revalidate?secret=YOUR_SECRET
 * Set SANITY_REVALIDATE_SECRET in the Vercel env to the same value.
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (
    !process.env.SANITY_REVALIDATE_SECRET ||
    secret !== process.env.SANITY_REVALIDATE_SECRET
  ) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = body?.slug?.current || body?.slug;
  } catch {
    // No/blank body is fine — we'll just revalidate the listing.
  }

  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}
