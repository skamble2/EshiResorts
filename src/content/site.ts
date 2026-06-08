export const site = {
  name: "Eshi Resorts",
  legalName: "Eshi Resorts & Restaurant",
  tagline: "Bhimashankar's Jungle Luxury Resort",
  description:
    "A luxury jungle resort in Taleghar, Bhimashankar — where opulent accommodation meets the untouched splendour of the Sahyadri valley. Mountain views, multi-cuisine dining and unforgettable escapes near Pune.",
  url: "https://eshiresorts.com",

  phone: "+91 9309314374",
  phoneRaw: "+919309314374",
  whatsapp: "919309314374",
  email: "admin@eshiresorts.com",

  address: {
    line: "Taleghar, Rajgurunagar–Bhimashankar Road",
    city: "Pune",
    state: "Maharashtra",
    full: "Taleghar, Rajgurunagar–Bhimashankar Road, Pune, Maharashtra",
  },

  // Booking handoff — Aiosell backend (no API for now, just deep-link)
  bookingUrl: "https://be.aiosell.com/book/b507a08c7d",

  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eshi+Resorts+Bhimashankar",

  nav: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;
