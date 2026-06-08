export type Room = {
  slug: string;
  name: string;
  price: number; // INR per night
  image: string;
  view: string;
  blurb: string;
  amenities: string[];
};

const base = [
  "Air Conditioning",
  "Free WiFi",
  "Television",
  "Secure Parking",
  "Multi-cuisine Dining",
];

export const rooms: Room[] = [
  {
    slug: "king-room-with-mountain-view",
    name: "King Room with Mountain View",
    price: 8300,
    image: "/images/rooms/king-room-with-mountain-view.jpeg",
    view: "Mountain View",
    blurb:
      "Wake to sweeping Sahyadri ridgelines from our most coveted room - a king bed, a deep bathtub and uninterrupted valley vistas.",
    amenities: [...base, "Bathtub", "Refrigerator", "Mountain Views"],
  },
  {
    slug: "king-room-with-balcony",
    name: "King Room with Balcony",
    price: 8000,
    image: "/images/rooms/king-room-with-balcony.jpeg",
    view: "Jungle View",
    blurb:
      "Step onto your private balcony and breathe in the jungle. A spacious king retreat with a bathtub and refrigerator for slow, luxurious mornings.",
    amenities: [...base, "Private Balcony", "Bathtub", "Refrigerator", "Jungle Views"],
  },
  {
    slug: "deluxe-room-with-balcony",
    name: "Deluxe Room with Balcony",
    price: 7800,
    image: "/images/rooms/deluxe-room-with-balcony.jpeg",
    view: "Balcony",
    blurb:
      "A refined deluxe room opening to a private balcony - generous space, soft light and the calm of the surrounding forest.",
    amenities: [...base, "Private Balcony"],
  },
  {
    slug: "superior-king-room",
    name: "Superior King Room",
    price: 6500,
    image: "/images/rooms/superior-king-room.jpeg",
    view: "King Comfort",
    blurb:
      "Understated comfort with a plush king bed and all the essentials - an easy, elegant base for your Bhimashankar escape.",
    amenities: [...base],
  },
  {
    slug: "standard-double-room",
    name: "Standard Double Room",
    price: 5500,
    image: "/images/rooms/standard-double-room.jpeg",
    view: "Cosy Retreat",
    blurb:
      "Our most accessible room without compromise - comfortable, private and perfectly placed for exploring the valley.",
    amenities: ["Free WiFi", "Television", "Secure Parking", "Multi-cuisine Dining"],
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
