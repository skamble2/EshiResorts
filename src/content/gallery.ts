export type GalleryCategory =
  | "Rooms"
  | "Swimming Pool"
  | "Nature"
  | "Exterior"
  | "Garden"
  | "Dining";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

// Category order for the filter bar ("All" is added in the UI).
export const galleryCategories: GalleryCategory[] = [
  "Rooms",
  "Swimming Pool",
  "Nature",
  "Exterior",
  "Garden",
  "Dining",
];

// A curated mix of the resort's photography and brochure nature shots.
export const gallery: GalleryImage[] = [
  { src: "/images/pool/pool-1.jpg", alt: "Infinity pool with mushroom fountain at dusk", category: "Swimming Pool" },
  { src: "/images/pool/pool-2.jpg", alt: "Pool overlooking the Sahyadri valley at sunset", category: "Swimming Pool" },
  { src: "/images/pool/pool-3.jpg", alt: "Poolside gazebo with valley views", category: "Swimming Pool" },
  { src: "/images/gallery/exterior-4.jpg", alt: "Aerial view of the resort villas in the valley", category: "Exterior" },
  { src: "/images/brochure/valley-mist.jpg", alt: "Mist over the Sahyadri hills", category: "Nature" },
  { src: "/images/gallery/room-2.jpg", alt: "Luxury room with private jacuzzi and valley view", category: "Rooms" },
  { src: "/images/brochure/sunset.jpg", alt: "Golden sunset over the hills", category: "Nature" },
  { src: "/images/brochure/forest-trail.jpg", alt: "Misty forest trail", category: "Nature" },
  { src: "/images/gallery/room-3.jpg", alt: "Elegant room interior", category: "Rooms" },
  { src: "/images/brochure/jungle-walk.jpg", alt: "Jungle walking trail under blue skies", category: "Nature" },
  { src: "/images/gallery/garden-1.jpg", alt: "Landscaped resort garden", category: "Garden" },
  { src: "/images/brochure/buddha-garden.jpg", alt: "Tranquil Buddha garden in the mist", category: "Garden" },
  { src: "/images/gallery/room-5.jpg", alt: "Room with private jacuzzi bathtub", category: "Rooms" },
  { src: "/images/brochure/restaurant.jpg", alt: "Eshi Restaurant exterior amid the trees", category: "Dining" },
  { src: "/images/gallery/exterior-5.jpg", alt: "Resort exterior", category: "Exterior" },
  { src: "/images/brochure/green-hills.jpg", alt: "Walkway over mist-covered green hills", category: "Nature" },
  { src: "/images/gallery/room-6.jpg", alt: "Cosy room interior", category: "Rooms" },
  { src: "/images/gallery/garden-2.jpg", alt: "Garden seating area", category: "Garden" },
  { src: "/images/gallery/exterior-7.jpg", alt: "Garden swing in the jungle", category: "Garden" },
  { src: "/images/gallery/room-1.jpg", alt: "Comfortable guest room", category: "Rooms" },
  { src: "/images/gallery/exterior-6.jpg", alt: "Rustic dining hall interior", category: "Dining" },
  { src: "/images/rooms/sahyadri-horizon-premium-king-room/8.jpg", alt: "Sahyadri Horizon Premium King Room with canopy bed and valley views", category: "Rooms" },
  { src: "/images/gallery/dining-2.jpg", alt: "Long dining hall beneath the timber roof", category: "Dining" },
  { src: "/images/gallery/nature-1.jpg", alt: "Mist rolling over the Sahyadri hills", category: "Nature" },
  { src: "/images/rooms/shekaru-mountain-view-king-room/18.jpg", alt: "Jacuzzi bathtub in the Shekaru Mountain View King Room", category: "Rooms" },
  { src: "/images/gallery/garden-5.jpg", alt: "Garden gazebo overlooking the valley", category: "Garden" },
  { src: "/images/gallery/dining-3.jpg", alt: "Dining hall with valley-facing windows", category: "Dining" },
  { src: "/images/rooms/girikunj-deluxe-room/8.jpg", alt: "Girikunj Deluxe Room wrapped in floor-to-ceiling glass", category: "Rooms" },
  { src: "/images/gallery/exterior-8.jpg", alt: "Eshi Restaurant lit up at dusk", category: "Exterior" },
  { src: "/images/gallery/nature-2.jpg", alt: "Valley view from the resort deck", category: "Nature" },
  { src: "/images/rooms/shivneri-deluxe-room/9.jpg", alt: "Shivneri Deluxe Room balcony with a swing", category: "Rooms" },
  { src: "/images/gallery/garden-6.jpg", alt: "Buddha garden against the stone wall", category: "Garden" },
  { src: "/images/gallery/dining-1.jpg", alt: "Restaurant interior in warm lantern light", category: "Dining" },
  { src: "/images/rooms/prakruti-family-room/7.jpg", alt: "Canopy bed in the Prakruti Family Room", category: "Rooms" },
  { src: "/images/gallery/exterior-9.jpg", alt: "Guest block framed by the jungle canopy", category: "Exterior" },
  { src: "/images/gallery/nature-3.jpg", alt: "Monsoon mist across the valley", category: "Nature" },
  { src: "/images/rooms/aranyam-deluxe-room/3.jpg", alt: "Aranyam Deluxe Room opening onto the forest", category: "Rooms" },
  { src: "/images/gallery/garden-7.jpg", alt: "Lantern-lit pathway through the campus", category: "Garden" },
  { src: "/images/gallery/dining-5.jpg", alt: "A plated dish from the multi-cuisine kitchen", category: "Dining" },
  { src: "/images/rooms/vanvaibhav-standard-room/3.jpg", alt: "Vanvaibhav Standard Room and its private balcony", category: "Rooms" },
  { src: "/images/gallery/exterior-10.jpg", alt: "Guest rooms rising above the treeline", category: "Exterior" },
  { src: "/images/gallery/nature-4.jpg", alt: "Monsoon greenery around the resort", category: "Nature" },
  { src: "/images/rooms/shantivan-forest-room/11.jpg", alt: "Shantivan Forest Room under its tensile fabric roof", category: "Rooms" },
  { src: "/images/gallery/garden-3.jpg", alt: "Water feature in the landscaped garden", category: "Garden" },
  { src: "/images/gallery/dining-4.jpg", alt: "Bright dining room among the trees", category: "Dining" },
  { src: "/images/rooms/sahyadri-horizon-premium-king-room/10.jpg", alt: "Private jacuzzi beside the bed in the Sahyadri Horizon suite", category: "Rooms" },
  { src: "/images/gallery/garden-8.jpg", alt: "Illuminated walkway after the rain", category: "Garden" },
  { src: "/images/gallery/garden-4.jpg", alt: "Sculpture among the monsoon greenery", category: "Garden" },
  { src: "/images/rooms/shekaru-mountain-view-king-room/16.jpg", alt: "Shekaru Mountain View King Room with panoramic windows", category: "Rooms" },
];
