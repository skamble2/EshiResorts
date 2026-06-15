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
  image: string;
  view: string;
  blurb: string;
  amenities: AmenityKey[];
  gallery: string[]; // slideshow images for the detail view
  details: string[]; // brochure-based paragraphs for the detail view
};

const galleryOf = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/rooms/${slug}/${i + 1}.jpg`);

// Shared brochure copy
const premiumIntro =
  "Elevate your stay to a realm where luxury whispers to the wilderness. Our Premium Rooms, gracefully perched on the second floor, offer not just a room but a sanctuary of serenity - where every morning dawns with panoramic vistas of mist-kissed valleys and rolling Sahyadri hills.";
const premiumComforts =
  "Romantic and regal canopy beds add charm and comfort, while a luxurious Jacuzzi bathtub is perfect for soaking away stress. Air conditioning ensures year-round comfort, alongside a personal refrigerator to keep refreshments chilled, a tea and coffee maker, and comfortable in-room slippers.";
const inRoomTouches =
  "Guests enjoy complimentary mineral water throughout their stay, soft high-quality towels, export-quality bedsheets and plush duvets, and an amenity kit with dental and shaving essentials, shampoo, conditioner, nourishing body lotion and refreshing bath soap.";
const tranquilRetreat =
  "Every room at Eshi is a tranquil retreat designed to harmonise luxury with nature. From the moment you step inside, you will find warm, earthy interiors, large windows that invite the outdoors in, and the soothing silence of the forest all around.";

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
    image: "/images/rooms/king-room-with-mountain-view.jpeg",
    view: "Mountain View",
    blurb:
      "Wake to sweeping Sahyadri ridgelines from our most coveted room - a king bed, a deep bathtub and uninterrupted valley vistas.",
    amenities: [...base, "bathtub", "fridge", "mountain-view"],
    gallery: galleryOf("king-room-with-mountain-view", 9),
    details: [premiumIntro, premiumComforts, inRoomTouches],
  },
  {
    slug: "deluxe-room-with-balcony",
    name: "Deluxe Room with Balcony",
    image: "/images/rooms/deluxe-room-with-balcony.jpeg",
    view: "Balcony",
    blurb:
      "A refined deluxe room opening to a private balcony - generous space, soft light and the calm of the surrounding forest.",
    amenities: [...base, "safety"],
    gallery: galleryOf("deluxe-room-with-balcony", 6),
    details: [
      tranquilRetreat,
      "Step onto your private balcony and let the jungle in - the perfect spot for a slow morning tea as mist rolls over the treetops, or a quiet evening listening to the forest settle.",
      inRoomTouches,
    ],
  },
  {
    slug: "superior-king-room",
    name: "Superior King Room",
    image: "/images/rooms/superior-king-room.jpeg",
    view: "King Comfort",
    blurb:
      "Understated comfort with a plush king bed and all the essentials - an easy, elegant base for your Bhimashankar escape.",
    amenities: [...base, "safety"],
    gallery: galleryOf("superior-king-room", 2),
    details: [
      tranquilRetreat,
      "Thoughtfully curated to suit every kind of traveller - from romantic getaways to family vacations and solo escapes - the Superior King pairs a plush king bed with all the essentials for an effortless stay.",
      inRoomTouches,
    ],
  },
  {
    slug: "standard-double-room",
    name: "Standard Double Room",
    image: "/images/rooms/standard-double-room.jpeg",
    view: "Cosy Retreat",
    blurb:
      "Our most accessible room without compromise - comfortable, private and perfectly placed for exploring the valley.",
    amenities: ["wifi", "television", "parking", "dining", "safety"],
    gallery: galleryOf("standard-double-room", 4),
    details: [
      tranquilRetreat,
      "Our most accessible room without compromise - comfortable, private and perfectly placed as a base for the temple, the jungle trails and everything Bhimashankar has to offer.",
      inRoomTouches,
    ],
  },
];

// Shared room facts (all rooms)
export const roomFacts = {
  size: "510 sq ft",
  bed: "King Bed",
  occupancy: "2 Guests + 1 (extra person chargeable)",
};
