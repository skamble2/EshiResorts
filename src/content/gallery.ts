export type GalleryCategory =
  | "Rooms"
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
  "Nature",
  "Exterior",
  "Garden",
  "Dining",
];

// A curated mix of the resort's photography and brochure nature shots.
export const gallery: GalleryImage[] = [
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
];
