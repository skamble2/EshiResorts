export const site = {
  name: "Eshi Resorts",
  legalName: "Eshi Resorts & Restaurant",
  tagline: "Bhimashankar's Jungle Luxury Resort",
  description:
    "A luxury jungle resort in Taleghar, Bhimashankar - where opulent accommodation meets the untouched splendour of the Sahyadri valley. Mountain views, multi-cuisine dining and unforgettable escapes near Pune.",
  url: "https://eshiresorts.com",

  phone: "+91 9309314374",
  phoneRaw: "+919309314374",
  whatsapp: "919270314374",
  email: "admin@eshiresorts.com",

  address: {
    line: "Rajgurunagar - Bhimashankar Road, A/P - Taleghar, Tal - Ambegaon",
    city: "Pune",
    state: "Maharashtra",
    pin: "410509",
    full: "Eshi Resorts, Rajgurunagar - Bhimashankar Road, A/P - Taleghar, Tal - Ambegaon, Dist - Pune 410509",
  },

  // Booking handoff - AxisRooms booking engine (deep-link)
  bookingUrl: "https://app.axisrooms.com/beV2/home1.html?bookingEngineId=5021",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Eshi+Resorts+and+Restaurant+Bhimashankar+Manchar+Road+Ambegaon+Tale+Ghar",
  mapsEmbedQuery:
    "Eshi Resorts, Rajgurunagar - Bhimashankar Road, Taleghar, Ambegaon, Pune 410509",

  // Verified ratings (for the reviews page) - static fallbacks; the Google
  // figure goes live automatically once GOOGLE_MAPS_API_KEY is set.
  ratings: {
    google: { score: "4.6", count: 164 },
    booking: { score: "8.6", count: 123 },
    tripadvisor: { score: "5.0", count: 2 },
  },

  logo: "/images/home/header-logo.png", // black wordmark; inverted to white on dark bg

  brochureUrl: "/files/eshi-resorts-brochure.pdf",

  nav: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;
