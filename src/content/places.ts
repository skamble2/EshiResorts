export type PlaceCategory =
  | "Temples & Spiritual"
  | "Nature & Wildlife"
  | "Viewpoints & Treks"
  | "Forts & Heritage";

// How much of the day a guest needs to set aside - the question people
// actually ask at breakfast, and the primary filter on the Explore page.
export type PlaceBand = "An hour or less" | "Half a day" | "A full day out";

export type Place = {
  slug: string;
  name: string;
  category: PlaceCategory;
  band: PlaceBand;
  distance: string;
  duration: string;
  /** Omitted where we do not yet hold a usable photograph. */
  image?: string;
  gallery?: string[];
  blurb: string;
  highlights: string[];
  details: string[];
  bestTime?: string;
  carry?: string;
  /** An existing Eshi blog post that covers this place in depth. */
  readMore?: { href: string; label: string };
  video?: { id: string; poster: string };
};

export const placeBands: PlaceBand[] = [
  "An hour or less",
  "Half a day",
  "A full day out",
];

export const places: Place[] = [
  {
    slug: "bhimashankar-temple",
    name: "Bhimashankar Jyotirlinga Temple",
    category: "Temples & Spiritual",
    band: "Half a day",
    distance: "~14 km from the resort",
    duration: "1-2 hours",
    image: "/images/explore/bhimashankar-temple.jpg",
    blurb:
      "One of the twelve Jyotirlingas of Lord Shiva, wrapped in dense Sahyadri forest - a visit that is spiritual and scenic in equal measure.",
    highlights: [
      "Ancient stone architecture",
      "Peaceful morning darshan",
      "Forest surroundings",
      "Origin region of the Bhima River",
    ],
    bestTime: "Early morning, especially on weekends and holidays",
    details: [
      "Built in the 13th century, Bhimashankar Temple is a remarkable example of the craftsmanship of the Vishwakarma sculptors. It follows the traditional Nagara style, with carved stone structures, intricate pillars and detailed sculptures depicting divine figures and mythological stories. The shikhara was enhanced in the 18th century by the Maratha statesman Nana Phadnavis, and Chhatrapati Shivaji Maharaj is believed to have granted funds to keep its daily worship going.",
      "Its most sacred feature is the Swayambhu Jyotirlinga - a naturally manifested Shiva Linga in the inner sanctum. The complex also holds a shrine to Lord Shani, and devotees are welcomed at the entrance by the sacred statue of Nandi.",
      "Two ancient legends explain the site. In one, Lord Shiva and Goddess Parvati appear together as Ardhanari Nateshwara to defeat the demon king Tripurasura. In the other, Shiva defeats Bhima, the son of Kumbhakarna, after Bhima imprisons the devotee Kamrupeshwar and tries to destroy the Shiva Linga he worshipped. Both legends place the Jyotirlinga at the spot where the battle ended.",
    ],
    video: { id: "dmGiJLcYTv0", poster: "/images/explore/video-dmGiJLcYTv0.jpg" },
  },
  {
    slug: "bhimashankar-wildlife-sanctuary",
    name: "Bhimashankar Wildlife Sanctuary",
    category: "Nature & Wildlife",
    band: "Half a day",
    distance: "Surrounds the temple area",
    duration: "2-4 hours",
    image: "/images/explore/wildlife-sanctuary.jpg",
    gallery: [
      "/images/explore/wildlife-sanctuary.jpg",
      "/images/explore/wildlife-sanctuary-2.jpg",
      "/images/explore/wildlife-sanctuary-3.jpg",
    ],
    blurb:
      "One of the most beautiful forest regions in the Western Ghats - evergreen cover, waterfalls, trekking trails and the Indian Giant Squirrel that our Shekaru room is named for.",
    highlights: [
      "Indian Giant Squirrel (Shekru)",
      "Bird watching",
      "Monsoon greenery and waterfalls",
      "Nature photography",
    ],
    carry: "Good shoes, and rain protection through the monsoon.",
    details: [
      "Spread across the rugged Sahyadri hills, the sanctuary surrounds the temple and is a wonderful destination for anyone staying with us. It is best known for the Indian Giant Squirrel, or Shekru - the state animal of Maharashtra, and the namesake of our Shekaru Mountain View King Room. Barking deer, wild boar, langurs and, very rarely, leopard also live here.",
      "It is excellent country for birdwatchers. Malabar whistling thrush, drongos, woodpeckers, hornbills, flycatchers and eagles are all regular sightings.",
      "Easy forest trails suit families and are best walked early morning or evening. Longer routes include the Bhimashankar temple forest trail, Ganesh Ghat, Shidi Ghat and the Bhorgiri-Bhimashankar trek, passing through dense forest, water streams, rocky patches and mountain viewpoints.",
    ],
  },
  {
    slug: "hanuman-lake",
    name: "Hanuman Lake",
    category: "Nature & Wildlife",
    band: "An hour or less",
    distance: "In the Bhimashankar forest area",
    duration: "30-60 minutes",
    image: "/images/explore/hanuman-lake.jpg",
    blurb:
      "A small, quiet forest lake ringed by dense vegetation - the calm counterweight to a morning at the temple.",
    highlights: [
      "Quiet, uncrowded setting",
      "Birdlife around the water",
      "Photography",
      "Easy for families",
    ],
    bestTime: "Monsoon, when the hills turn green and mist covers the forest",
    details: [
      "Local belief connects the area with Lord Hanuman and his mother, Anjani Mata, who is said to have performed penance in this forest before his birth. Small Hanuman and Anjani Mata temples stand near the water, which is how the lake took its name.",
      "Unlike the busier stops nearby, Hanuman Lake stays quiet. It is a place to sit, breathe the mountain air and watch the forest. In the monsoon the surrounding hills turn bright green, streams run nearby and the risen water reflects the cloud.",
    ],
  },
  {
    slug: "nagphani-point",
    name: "Nagphani Point",
    category: "Viewpoints & Treks",
    band: "An hour or less",
    distance: "Bhimashankar region",
    duration: "45 minutes - 1 hour",
    blurb:
      "The finest panorama around Bhimashankar - a rocky peak shaped like a cobra's hood, looking out over forested valleys.",
    highlights: [
      "Sunrise and sunset views",
      "Clouds rolling over the mountains in monsoon",
      "Short forest trail",
      "Photography",
    ],
    details: [
      "Nagphani means \"snake's hood\", after the shape of the rocky peak. It is among the most scenic viewpoints and trekking destinations near Bhimashankar, known for its dramatic valley views, rocky landscape, forest trail and sunsets.",
      "From the viewpoint, dense Sahyadri forest spreads out across the valleys below. In the monsoon, cloud rolls in over the mountains and through the gap - the reason most people make the climb.",
    ],
  },
  {
    slug: "bhorgiri-fort",
    name: "Bhorgiri Fort & Village",
    category: "Forts & Heritage",
    band: "Half a day",
    distance: "Near Bhimashankar",
    duration: "Half day",
    image: "/images/explore/bhorgiri-fort.jpg",
    blurb:
      "A small, little-known hill fort with rock-cut caves and river valleys around it - a peaceful trek well away from the crowded routes.",
    highlights: [
      "Beginner-friendly trek",
      "Ancient rock-cut caves",
      "Shiva Lingas and a Virabhadra idol",
      "River valleys and mist-covered hills",
    ],
    details: [
      "Set in one of the most beautiful stretches of the Sahyadris, Bhorgiri offers dense Western Ghats forest, quiet village surroundings, river valleys and views across the Bhimashankar range. Through the monsoon the whole region turns green, and it becomes a favourite of trekkers and nature lovers.",
      "Much of the original structure is now under vegetation, but rock-cut caves, several Shiva Lingas and a stone idol of Lord Virabhadra survive. Little is documented about its history; historians believe it served as a watch post on the ancient trade routes connecting the Konkan to the Pune plateau, letting guards monitor the valleys and mountain passes below.",
    ],
  },
  {
    slug: "ahupe-plateau",
    name: "Ahupe Plateau & Ghat",
    category: "Viewpoints & Treks",
    band: "Half a day",
    distance: "Sahyadri viewpoint route",
    duration: "Half day",
    image: "/images/explore/ahupe-plateau.jpg",
    blurb:
      "A plateau at 3,855 feet, ringed by mountains on three sides and opening onto a dramatic valley - waterfalls everywhere in the monsoon.",
    highlights: [
      "Views of the Machindragad and Gorakhgad twin peaks",
      "Monsoon waterfalls",
      "Ancient Konkan-Sahyadri mountain pass",
      "Floating cloud and panoramic views",
    ],
    details: [
      "Ahupe Plateau is known for untouched landscapes, deep valleys and cascading waterfalls. Sitting at around 3,855 feet, the village is surrounded by mountains on three sides and opens into a dramatic valley on the fourth, with the Machindragad and Gorakhgad twin mountains on the horizon.",
      "The Ahupe Ghat trek follows an ancient mountain pass connecting Khopivali village in the Konkan to Ahupe in the Sahyadris, passing forests, rocky paths, waterfalls and viewpoints along the way.",
    ],
    readMore: { href: "/blog/ahupe-waterfall", label: "Read our guide to Ahupe" },
  },
  {
    slug: "shivneri-fort",
    name: "Shivneri Fort",
    category: "Forts & Heritage",
    band: "A full day out",
    distance: "~57 km (1.5-2 hours each way)",
    duration: "2-3 hours at the fort",
    blurb:
      "The birthplace of Chhatrapati Shivaji Maharaj - seven gates, ancient water tanks and a sixth-century fort that shaped the Maratha empire.",
    highlights: [
      "Seven fort gates",
      "Shivai Devi Temple",
      "Shivaji Maharaj birthplace memorial",
      "Ancient water tanks and viewpoints",
    ],
    bestTime:
      "Monsoon for green hills and waterfalls; winter for the best trekking weather",
    details: [
      "Shivneri is more than a monument of stone. Its origins date to the 6th century, making it one of the oldest and most strategically important forts in Maharashtra. Built first as a military outpost, it passed through the Satavahanas, Yadavas, Bahamanis and Nizamshahis before coming to the Bhosale family.",
      "Recognising its natural protection, Shahaji Bhosale chose Shivneri as a refuge for his wife Jijabai during a period of political uncertainty. Chhatrapati Shivaji Maharaj was born within its walls on 19 February 1630, and spent his early years here learning administration, leadership, warfare and diplomacy from Jijabai - the teaching that shaped his dream of Swarajya.",
      "The climb is easy to moderate and suits families, children and anyone with an interest in history.",
    ],
    video: { id: "RXegAmWNht4", poster: "/images/explore/video-RXegAmWNht4.jpg" },
  },
  {
    slug: "lenyadri-caves",
    name: "Lenyadri Caves",
    category: "Forts & Heritage",
    band: "A full day out",
    distance: "~64 km, near Junnar",
    duration: "1.5-2 hours",
    image: "/images/explore/lenyadri-caves.jpg",
    blurb:
      "Roughly 2,000-year-old Buddhist rock-cut caves in the Junnar hills, home to the Girijatmaj Ganpati - one of the eight Ashtavinayak temples.",
    highlights: [
      "Ancient rock-cut architecture",
      "Girijatmaj Ganpati, an Ashtavinayak temple",
      "Hill climb with valley views",
      "History and spirituality together",
    ],
    details: [
      "Carved into Lenyadri Hill, these caves are among the oldest historical attractions in Pune district. They date mainly between the 1st century BCE and the 3rd century CE, and were originally Buddhist monastic caves used by monks for meditation, study and residence as part of the Deccan's ancient cave network.",
      "The name comes from \"leni\", caves carved from stone, and \"adri\", mountain - together, caves on the mountain. They are best known today for housing the Girijatmaj Ganpati Temple, making the site a rare blend of history, spirituality and natural beauty.",
    ],
    readMore: { href: "/blog/lenyadri-caves", label: "Read our guide to Lenyadri" },
  },
];
