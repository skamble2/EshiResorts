import Link from "next/link";
import { site } from "@/content/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Central booking CTA. Hands off to the Aiosell booking engine.
 * (No availability API for now — single source of truth for the booking link.)
 */
export default function BookNowButton({ className = "", children }: Props) {
  return (
    <Link
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold tracking-wide text-forest-950 transition-colors duration-300 hover:bg-gold-400 " +
        className
      }
    >
      {children ?? "Reserve Your Stay"}
    </Link>
  );
}
