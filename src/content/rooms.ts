export type AmenityKey =
  | "ac"
  | "wifi"
  | "television"
  | "parking"
  | "dining"
  | "bathtub"
  | "fridge"
  | "mountain-view"
  | "jungle-view"
  | "safety";

export type Room = {
  slug: string;
  name: string;
  price: number; // INR per night
  image: string;
  view: string;
  blurb: string;
  amenities: AmenityKey[];
};

// Maps each amenity to its icon (from the resort's own icon set) and label.
export const amenityMeta: Record<AmenityKey, { icon: string; label: string }> = {
  ac: { icon: "/images/amenities/ac.png", label: "Air Conditioning" },
  wifi: { icon: "/images/amenities/wifi.svg", label: "Free WiFi" },
  television: { icon: "/images/amenities/television.svg", label: "Television" },
  parking: { icon: "/images/amenities/parking.svg", label: "Secure Parking" },
  dining: { icon: "/images/amenities/dining.svg", label: "Multi-cuisine Dining" },
  bathtub: { icon: "/images/amenities/bathtub.svg", label: "Bathtub" },
  fridge: { icon: "/images/amenities/fridge.png", label: "Refrigerator" },
  "mountain-view": {
    icon: "/images/amenities/mountain-view.svg",
    label: "Mountain View",
  },
  "jungle-view": {
    icon: "/images/amenities/jungle-view.png",
    label: "Jungle View",
  },
  safety: { icon: "/images/amenities/safety.svg", label: "Privacy & Safety" },
};

const base: AmenityKey[] = ["ac", "wifi", "television", "parking", "dining"];

export const rooms: Room[] = [
  {
    slug: "king-room-with-mountain-view",
    name: "King Room with Mountain View",
    price: 8300,
    image: "/images/rooms/king-room-with-mountain-view.jpeg",
    view: "Mountain View",
    blurb:
      "Wake to sweeping Sahyadri ridgelines from our most coveted room - a king bed, a deep bathtub and uninterrupted valley vistas.",
    amenities: [...base, "bathtub", "fridge", "mountain-view"],
  },
  {
    slug: "king-room-with-balcony",
    name: "King Room with Balcony",
    price: 8000,
    image: "/images/rooms/king-room-with-balcony.jpeg",
    view: "Jungle View",
    blurb:
      "Step onto your private balcony and breathe in the jungle. A spacious king retreat with a bathtub and refrigerator for slow, luxurious mornings.",
    amenities: [...base, "bathtub", "fridge", "jungle-view"],
  },
  {
    slug: "deluxe-room-with-balcony",
    name: "Deluxe Room with Balcony",
    price: 7800,
    image: "/images/rooms/deluxe-room-with-balcony.jpeg",
    view: "Balcony",
    blurb:
      "A refined deluxe room opening to a private balcony - generous space, soft light and the calm of the surrounding forest.",
    amenities: [...base, "safety"],
  },
  {
    slug: "superior-king-room",
    name: "Superior King Room",
    price: 6500,
    image: "/images/rooms/superior-king-room.jpeg",
    view: "King Comfort",
    blurb:
      "Understated comfort with a plush king bed and all the essentials - an easy, elegant base for your Bhimashankar escape.",
    amenities: [...base, "safety"],
  },
  {
    slug: "standard-double-room",
    name: "Standard Double Room",
    price: 5500,
    image: "/images/rooms/standard-double-room.jpeg",
    view: "Cosy Retreat",
    blurb:
      "Our most accessible room without compromise - comfortable, private and perfectly placed for exploring the valley.",
    amenities: ["wifi", "television", "parking", "dining", "safety"],
  },
];

// Shared room facts (all rooms)
export const roomFacts = {
  size: "510 sq ft",
  bed: "King Bed",
  occupancy: "2 Guests + 1 (extra person chargeable)",
};

export const inr = (n: number) =>
  `₹${n.toLocaleString("en-IN")}`;
