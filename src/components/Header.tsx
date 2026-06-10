"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import BookNowButton from "./BookNowButton";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onHome = pathname === "/";
  // Transparent over the hero only on the home page before scrolling.
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent py-5"
          : "bg-forest-950/95 py-3 shadow-lg backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Eshi Resorts home" className="flex items-center">
          <Image
            src="/images/home/logo.png"
            alt="Eshi Resorts"
            width={203}
            height={250}
            priority
            className={`w-auto brightness-0 invert transition-all duration-300 ${
              transparent ? "h-14 sm:h-16" : "h-11 sm:h-12"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-400 ${
                  active ? "text-gold-400" : "text-sand-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <BookNowButton className="px-5 py-2.5" />
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-sand-50 transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-sand-50 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-sand-50 transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-forest-950/98 backdrop-blur md:hidden transition-[max-height] duration-300 ${
          open ? "max-h-[85vh]" : "max-h-0"
        }`}
      >
        <nav className="flex max-h-[85vh] flex-col gap-1 overflow-y-auto px-6 pb-6 pt-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-forest-700/40 py-3 text-sand-100"
            >
              {item.label}
            </Link>
          ))}
          <BookNowButton className="mt-4 w-full" />
        </nav>
      </div>
    </header>
  );
}
