export type FaqItem = {
  q: string;
  a: string[]; // paragraphs
  bullets?: string[]; // optional bullet list, shown after paragraphs
};

export const faqs: FaqItem[] = [
  {
    q: "How many types of rooms are there at Eshi Resorts?",
    a: ["Eshi Resorts offers five types of rooms:"],
    bullets: [
      "King Room with Mountain View",
      "King Room with Balcony",
      "Deluxe Room with Balcony",
      "Superior King Room",
      "Standard Double Room with Fan",
    ],
  },
  {
    q: "What amenities do the rooms include?",
    a: [
      "Your comfort is our priority. Every room is thoughtfully equipped with premium amenities, including a shaving kit, dental kit, tea and coffee maker, in-room slippers, essential toiletries, shampoo and conditioner, body lotion and bath soap, soft high-quality towels, export-quality bedsheets and plush duvets, an intercom telephone for assistance, and a television with a selection of channels. Furniture includes a two-seater sofa, chair, rolling chair, swing, central table, bed bench and wardrobe.",
      "Premium Rooms - a symphony of luxury and nature: perched on the first and second floors, our premium rooms add air conditioning, a luxurious Jacuzzi bathtub, a personal refrigerator and a romantic canopy bed, with private balconies that open to sweeping, mist-kissed valley views.",
      "By room: King Mountain View and King with Balcony add AC, bathtub, mini-fridge and a 43-inch TV (second floor, private balcony). Deluxe with Balcony has AC, bathtub, canopy bed and TV (first floor, balcony). Superior King has AC, Wi-Fi and TV (first floor, balcony). The Standard Double has a ceiling fan instead of AC, with Wi-Fi and TV (ground floor, private balcony).",
    ],
  },
  {
    q: "What are the nightly rates for the different room types?",
    a: [
      "Rates vary by room type and season, and GST applies as per government norms. You'll see live, up-to-date prices for your chosen dates when you Book a Stay through our booking page - or contact us and we'll be happy to share current tariffs.",
    ],
  },
  {
    q: "How much advance payment is required?",
    a: [
      "To confirm your reservation, we require a minimum advance payment of 50% of the total booking amount.",
    ],
  },
  {
    q: "What payment methods are accepted?",
    a: [
      "We accept multiple payment methods, including credit and debit cards, UPI transactions, and cash payments.",
    ],
  },
  {
    q: "When is a booking considered confirmed?",
    a: [
      "Your booking is confirmed once your payment is received and the resort issues an official booking confirmation note.",
    ],
  },
  {
    q: "What is the cancellation and refund policy?",
    a: [
      "Please note that the resort operates on a strict no-refund policy. Amounts paid towards bookings cannot be refunded under any circumstances.",
    ],
  },
];
