import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/home/logo.png"
              alt="Eshi Resorts"
              width={203}
              height={250}
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="font-serif text-2xl font-semibold text-sand-50">
              Eshi Resorts
            </span>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gold-400">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-200/80">
            Where luxury meets the wild. Nestled in the Sahyadri valley at
            Taleghar, Bhimashankar - your escape into nature awaits.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sand-200/80 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-200/80 transition-colors hover:text-gold-400"
              >
                Download Brochure
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm text-sand-200/80">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold-400">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Hi")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400"
              >
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                {site.email}
              </a>
            </li>
            <li className="pt-2 leading-relaxed">{site.address.full}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-700/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-sand-200/60 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Bhimashankar, Maharashtra · India</p>
        </div>
      </div>
    </footer>
  );
}
