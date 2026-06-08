import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Eshi Resorts, Bhimashankar — call, WhatsApp, or send an enquiry. Taleghar, Rajgurunagar–Bhimashankar Road, Pune, Maharashtra.",
};

const channels = [
  {
    label: "Call Us",
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappLink("Hi Eshi Resorts! I'd like to enquire about a stay."),
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to help plan your escape to Bhimashankar. Reach out any way you like."
        image="/images/gallery/exterior-5.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — details */}
          <Reveal>
            <p className="eyebrow">Reach Us</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              Let&apos;s plan your stay
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-soft">
              Call or WhatsApp us directly for the fastest response, or send an
              enquiry and our team will get back to you.
            </p>

            <div className="mt-8 space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white px-5 py-4 ring-1 ring-sand-200 transition-colors hover:ring-gold-500"
                >
                  <span className="text-sm font-semibold text-forest-800">
                    {c.label}
                  </span>
                  <span className="text-sm text-stone-soft">{c.value}</span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="eyebrow mb-2">Location</h3>
              <p className="text-base leading-relaxed text-stone-soft">
                {site.address.full}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600"
              >
                Open in Google Maps <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.12}>
            <div className="rounded-2xl bg-sand-100 p-7 ring-1 ring-sand-200 sm:p-9">
              <h3 className="font-serif text-2xl font-semibold text-forest-900">
                Send an Enquiry
              </h3>
              <p className="mt-2 text-sm text-stone-soft">
                Tell us a little about your trip and we&apos;ll be in touch.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl ring-1 ring-sand-200">
          <iframe
            title="Eshi Resorts location"
            src="https://www.google.com/maps?q=Eshi%20Resorts%20Bhimashankar&output=embed"
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
