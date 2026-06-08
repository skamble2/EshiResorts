export type Review = {
  name: string;
  location?: string;
  source: "Booking.com" | "TripAdvisor" | "Google";
  date?: string;
  quote: string;
};

// Real guest feedback drawn from the resort's verified Booking.com profile.
// Quotes are short excerpts; refresh periodically from the live listings.
export const reviews: Review[] = [
  {
    name: "Sujit",
    location: "India",
    source: "Booking.com",
    quote: "Everything was excellent - the room, the restaurant and the ambience.",
  },
  {
    name: "Mohan",
    location: "India",
    source: "Booking.com",
    quote: "Location, staff service and climate are all exceptional.",
  },
  {
    name: "Shikha",
    location: "India",
    source: "Booking.com",
    quote: "Great views, spotlessly clean rooms and genuinely helpful staff.",
  },
  {
    name: "Vinay",
    location: "India",
    source: "Booking.com",
    quote: "A very nice, value-for-money resort with the best views around.",
  },
  {
    name: "Gurvinder",
    location: "India",
    source: "Booking.com",
    quote: "Location, rooms and food were all very good. Highly recommended.",
  },
  {
    name: "Ramesh",
    location: "India",
    source: "Booking.com",
    quote: "A wonderful property and absolutely worth the money.",
  },
  {
    name: "Hasmukh",
    source: "Booking.com",
    quote: "Good, attentive staff and prompt service throughout our stay.",
  },
  {
    name: "Subrat",
    location: "India",
    source: "Booking.com",
    quote: "A great stay at Eshi Resort overall - we'll be back.",
  },
];
