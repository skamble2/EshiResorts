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
  | "canopy-bed"
  | "balcony"
  | "kettle"
  | "mineral-water"
  | "hot-water"
  | "toiletries"
  | "hairdryer"
  | "bathrobe"
  | "driver-room";

export type Room = {
  slug: string;
  name: string;
  image: string;
  view: string;
  size: string;
  bed: string;
  blurb: string;
  amenities: AmenityKey[];
  gallery: string[]; // slideshow images for the detail view
  details: string[]; // brochure-based paragraphs for the detail view
};

const galleryOf = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/rooms/${slug}/${i + 1}.jpg`);

// Shared brochure copy
const inRoomTouches =
  "Guests enjoy complimentary mineral water throughout their stay, soft high-quality towels, export-quality bedsheets and plush duvets, and an amenity kit with dental and shaving essentials, shampoo, conditioner, nourishing body lotion and refreshing bath soap.";

// Maps each amenity to its icon (from the resort's own icon set) and label.
export const amenityMeta: Record<AmenityKey, { icon: string; label: string }> = {
  ac: { icon: "/images/amenities/ac.png", label: "Air Conditioning" },
  wifi: { icon: "/images/amenities/wifi.svg", label: "Free WiFi" },
  television: { icon: "/images/amenities/television.svg", label: "Television" },
  parking: { icon: "/images/amenities/parking.svg", label: "Secure Parking" },
  dining: { icon: "/images/amenities/dining.svg", label: "Multi-cuisine Dining" },
  bathtub: { icon: "/images/amenities/bathtub.svg", label: "Jacuzzi Bathtub" },
  fridge: { icon: "/images/amenities/fridge.png", label: "Mini Fridge" },
  "mountain-view": {
    icon: "/images/amenities/mountain-view.svg",
    label: "Valley & Mountain View",
  },
  "jungle-view": {
    icon: "/images/amenities/jungle-view.png",
    label: "Jungle View",
  },
  "canopy-bed": {
    icon: "/images/amenities/canopy-bed.svg",
    label: "Canopy Bed",
  },
  balcony: { icon: "/images/amenities/balcony.svg", label: "Private Balcony" },
  kettle: {
    icon: "/images/amenities/kettle.svg",
    label: "Kettle, Tea & Coffee",
  },
  "mineral-water": {
    icon: "/images/amenities/mineral-water.svg",
    label: "Mineral Water",
  },
  "hot-water": {
    icon: "/images/amenities/hot-water.svg",
    label: "Hot & Cold Water",
  },
  toiletries: { icon: "/images/amenities/toiletries.svg", label: "Toiletries" },
  hairdryer: { icon: "/images/amenities/hairdryer.svg", label: "Hairdryer" },
  bathrobe: { icon: "/images/amenities/bathrobe.svg", label: "Bathrobe" },
  "driver-room": {
    icon: "/images/amenities/driver-room.svg",
    label: "Driver's Room",
  },
};

// Present in every room category; distinctive amenities are listed first per room.
const standard: AmenityKey[] = [
  "ac",
  "television",
  "wifi",
  "fridge",
  "hot-water",
  "kettle",
  "mineral-water",
  "toiletries",
  "hairdryer",
  "parking",
  "dining",
  "driver-room",
];

export const rooms: Room[] = [
  {
    slug: "sahyadri-horizon-premium-king-room",
    name: "Sahyadri Horizon Premium King Room",
    image: "/images/rooms/sahyadri-horizon-premium-king-room/15.jpg",
    view: "Valley & Mountain View",
    size: "510 sq ft",
    bed: "Canopy King Bed",
    blurb:
      "Our signature retreat on the second floor - a canopy king bed, a private jacuzzi bathtub and breathtaking valley views that unfold like a living painting.",
    amenities: ["mountain-view", "bathtub", "canopy-bed", "bathrobe", "balcony", ...standard],
    gallery: galleryOf("sahyadri-horizon-premium-king-room", 23),
    details: [
      "Sahyadri Horizon Premium King Room is our signature retreat, perched on the second floor, just 18/20 steps away. Wake up to breathtaking valley and mountain views that unfold like a living painting. An elegant king-size canopy bed adds a touch of grandeur, while the private bathtub with Jacuzzi invites you to unwind. Complete with AC, mini fridge, mineral water bottles and Smart TV, this premium room is where nature meets indulgence.",
      inRoomTouches,
    ],
  },
  {
    slug: "shekaru-mountain-view-king-room",
    name: "Shekaru Mountain View King Room",
    image: "/images/rooms/shekaru-mountain-view-king-room/2.jpg",
    view: "Valley & Mountain View",
    size: "510 sq ft",
    bed: "Canopy King Bed",
    blurb:
      "Ground-floor grandeur - panoramic valley views from a king size canopy bed, a spacious balcony and a luxurious jacuzzi bathtub.",
    amenities: ["mountain-view", "bathtub", "canopy-bed", "bathrobe", "balcony", ...standard],
    gallery: galleryOf("shekaru-mountain-view-king-room", 24),
    details: [
      "Set on the ground floor, Shekaru Mountain View King Room is our signature premium retreat, where the valley unfolds before you and majestic mountains create a breathtaking backdrop. Wake up to panoramic views from an elegant king size canopy bed and step onto the spacious balcony to soak in nature's beauty. Unwind in the luxurious jacuzzi bathtub and enjoy AC, mini fridge, mineral water and Smart TV - where refined comfort meets the grandeur of the mountains.",
      inRoomTouches,
    ],
  },
  {
    slug: "girikunj-deluxe-room",
    name: "Girikunj Deluxe Room",
    image: "/images/rooms/girikunj-deluxe-room/5.jpg",
    view: "Valley & Mountain View",
    size: "650 sq ft",
    bed: "Canopy King Bed",
    blurb:
      "650 sq ft where nature becomes your room - floor-to-ceiling glass on all four sides beneath a graceful tensile-fabric roof.",
    amenities: ["mountain-view", "canopy-bed", "balcony", ...standard],
    gallery: galleryOf("girikunj-deluxe-room", 16),
    details: [
      "Girikunj is a luxurious 650 sq. ft. retreat where nature becomes your room. Beneath a graceful tensile-fabric roof, floor-to-ceiling glass on all four sides frames sweeping mountain and valley views, draped with curtains like an elegant shamiyana. A canopy king bed, private balcony, spacious bathroom, AC, Smart TV, mini fridge, open wardrobe, kettle, mineral water and hot & cold water complete this enchanting escape. Reached by 10/12 steps.",
      inRoomTouches,
    ],
  },
  {
    slug: "prakruti-family-room",
    name: "Prakruti Family Room",
    image: "/images/rooms/prakruti-family-room/3.jpg",
    view: "Jungle View",
    size: "600 sq ft",
    bed: "Canopy King Bed",
    blurb:
      "A spacious ground-floor retreat with an elegant canopy bed and a private balcony opening straight onto the green.",
    amenities: ["jungle-view", "canopy-bed", "balcony", ...standard],
    gallery: galleryOf("prakruti-family-room", 12),
    details: [
      "Prakruti is a spacious ground-floor retreat surrounded by lush greenery, designed for a serene and regal stay. Featuring an elegant canopy bed for a royal touch, the room opens onto a private balcony overlooking nature. Enjoy a spacious bathroom with hot & cold water, AC, mineral water bottles, kettle with tea & coffee facilities, open-style wardrobe, mini fridge, Wi-Fi and Smart TV - blending comfort, charm and nature beautifully.",
      inRoomTouches,
    ],
  },
  {
    slug: "shivneri-deluxe-room",
    name: "Shivneri Deluxe Room",
    image: "/images/rooms/shivneri-deluxe-room/3.jpg",
    view: "Valley & Mountain View",
    size: "510 sq ft",
    bed: "King Bed",
    blurb:
      "A first-floor retreat just 5-6 steps up - a king size bed and a large balcony with a swing, set against valley and mountain views.",
    amenities: ["mountain-view", "balcony", ...standard],
    gallery: galleryOf("shivneri-deluxe-room", 16),
    details: [
      "Shivneri is a charming first-floor retreat, accessible by just 5/6 steps, nestled amidst lush greenery with breathtaking valley and mountain views. Featuring a spacious king-size bed and a large balcony with a swing and comfortable chairs, it offers the perfect setting to unwind in nature. The room includes AC, hot & cold water, mini fridge, mineral water bottles, kettle with tea & coffee, Wi-Fi, TV and an open-style wardrobe.",
      inRoomTouches,
    ],
  },
  {
    slug: "aranyam-deluxe-room",
    name: "Aranyam Deluxe Room",
    image: "/images/rooms/aranyam-deluxe-room/9.jpg",
    view: "Jungle View",
    size: "510 sq ft",
    bed: "Canopy King Bed",
    blurb:
      "Where the jungle whispers at your doorstep - a regal canopy bed on the ground floor, embraced by swaying trees.",
    amenities: ["jungle-view", "canopy-bed", "balcony", ...standard],
    gallery: galleryOf("aranyam-deluxe-room", 10),
    details: [
      "Step into Aranyam Deluxe Room, where the jungle whispers at your doorstep. Nestled on the ground floor, embraced by swaying trees, it feels like a royal retreat deep within the wild. Rest beneath a regal canopy bed, breathe in the green, and unwind on your private balcony. With cool AC, a kettle, and refreshing water bottles, every comfort meets the charm of a timeless forest stay.",
      inRoomTouches,
    ],
  },
  {
    slug: "vanvaibhav-standard-room",
    name: "Vanvaibhav Standard Room",
    image: "/images/rooms/vanvaibhav-standard-room/4.jpg",
    view: "Jungle View",
    size: "510 sq ft",
    bed: "King Bed",
    blurb:
      "A spacious ground-floor retreat with a luxurious king size bed and a private balcony overlooking the forest.",
    amenities: ["jungle-view", "balcony", ...standard],
    gallery: galleryOf("vanvaibhav-standard-room", 12),
    details: [
      "Vanvaibhav is a spacious ground-floor retreat nestled amidst lush greenery, offering a serene escape with a touch of regal charm. Featuring a luxurious king-size bed and a private balcony overlooking nature, the room is designed for comfort and relaxation. It includes AC, a spacious bathroom with hot & cold water, mineral water bottles, kettle with tea & coffee facilities, open-style wardrobe, mini fridge, Wi-Fi and Smart TV - perfectly blending modern comforts with the beauty of nature.",
      inRoomTouches,
    ],
  },
  {
    slug: "shantivan-forest-room",
    name: "Shantivan Forest Room",
    image: "/images/rooms/shantivan-forest-room/12.jpg",
    view: "Jungle View",
    size: "300 sq ft",
    bed: "King Bed",
    blurb:
      "A cosy ground-floor room under a distinctive tensile fabric roof, nestled amid lush trees for a true jungle-retreat stay.",
    amenities: ["jungle-view", ...standard],
    gallery: galleryOf("shantivan-forest-room", 17),
    details: [
      "Shantivan is a cozy ground-floor room nestled amidst lush trees, offering a unique jungle-retreat experience. The room features a distinctive tensile fabric roof and is equipped with AC (hot & cold), hot and cold water, mini fridge, complimentary water bottles, kettle with tea & coffee facilities, Wi-Fi, TV and an open-style wardrobe. Ideal for guests seeking a peaceful stay surrounded by nature with modern comforts.",
      inRoomTouches,
    ],
  },
];

// Shared room facts (all rooms)
export const roomFacts = {
  occupancy: "2 Guests + 1 (extra person chargeable)",
};
