import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { site, whatsappLink } from "@/content/site";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Eshi Resorts, Bhimashankar. Call, WhatsApp or send an enquiry. Rajgurunagar - Bhimashankar Road, A/P Taleghar, Tal Ambegaon, Dist Pune 410509.",
};

const callNumbers = [
  { value: site.phone, href: `tel:${site.phoneRaw}` },
  { value: site.phone2, href: `tel:${site.phone2Raw}` },
];

const channels = [
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Message us instantly",
    href: whatsappLink("Hi"),
    sub: "Usually replies within the hour",
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    sub: "We'll get back to you shortly",
  },
];

const directions = [
  {
    title: "By Road",
    body: "About 3.5 hours from Pune via the Rajgurunagar-Manchar road towards Bhimashankar. Secure on-site parking is available.",
  },
  {
    title: "By Air",
    body: "Pune International Airport is the nearest airport, roughly 110 km away. Taxis and self-drive cars are easily arranged.",
  },
  {
    title: "By Rail",
    body: "Pune Junction is the closest major railhead. From there, continue by road towards Ambegaon and Tale Ghar.",
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

      {/* Contact channel cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Reach Us</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            For enquiries, please reach out
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Call Us - two tappable numbers */}
          <Reveal>
            <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center ring-1 ring-sand-200">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-gold-400">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-forest-900">
                Call Us
              </h3>
              <div className="mt-1 space-y-0.5">
                {callNumbers.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="block text-sm font-medium text-forest-700 transition-colors hover:text-gold-600"
                  >
                    {n.value}
                  </a>
                ))}
              </div>
              <p className="mt-2 text-xs text-stone-soft">
                Available 9 AM - 6 PM, every day
              </p>
            </div>
          </Reveal>

          {channels.map(({ Icon, label, value, href, sub }, i) => (
            <Reveal key={label} delay={(i + 1) * 0.1}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gold-500"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-gold-400 transition-colors group-hover:bg-forest-900">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-forest-900">
                  {label}
                </h3>
                <p className="mt-1 text-sm font-medium text-forest-700">{value}</p>
                <p className="mt-2 text-xs text-stone-soft">{sub}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + location */}
      <section className="bg-sand-100 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
              Send an Enquiry
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-soft">
              Tell us a little about your trip and our team will be in touch to
              help plan your stay.
            </p>
            <div className="mt-7">
              <EnquiryForm />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              <div className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-sand-200">
                <span className="mt-0.5 shrink-0 text-gold-600">
                  <PinIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="eyebrow mb-1">Our Location</h3>
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
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-sand-200">
                <span className="mt-0.5 shrink-0 text-gold-600">
                  <ClockIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="eyebrow mb-1">Reception Hours</h3>
                  <p className="text-base leading-relaxed text-stone-soft">
                    Our support team is available from 9 AM to 6 PM, every day.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl ring-1 ring-sand-200">
                <iframe
                  title="Eshi Resorts location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    site.mapsEmbedQuery
                  )}&output=embed`}
                  className="h-[300px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to reach us */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Getting Here</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            How to reach us
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {directions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-sand-200">
                <h3 className="font-serif text-xl font-semibold text-forest-900">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-soft">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
