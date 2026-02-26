export interface Trip {
  href: string;
  icon: string;
  title: string;
  meta: string;
  variant: "mountain" | "island";
}

export const trips: Trip[] = [
  {
    href: "/pulag",
    icon: "🏔️",
    title: "Mt. Pulag Travel Itinerary",
    meta: "March 3–9, 2026 · 7 days · Cebu → Clark → Baguio → Pulag → Manila",
    variant: "mountain",
  },
  {
    href: "/pulag/hike",
    icon: "🥾",
    title: "Mt. Pulag Hike Itinerary",
    meta: "March 4–6, 2026 · 3 days · Akiki Trail → Summit → Ambangeg",
    variant: "mountain",
  },
  {
    href: "/dinagat",
    icon: "🏝️",
    title: "Dinagat Islands",
    meta: "April 9–13, 2026 · 5 days · Caraga, Mindanao",
    variant: "island",
  },
];
