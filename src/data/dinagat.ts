// =============================================
// DINAGAT ISLANDS — DATA FILE
// =============================================

export interface HeroBadge {
  icon: string;
  text: string;
}

export interface CrewMember {
  initials: string;
  name: string;
  accent: string;
  accentDim: string;
}

export interface NavItem {
  id: string;
  label: string;
  color?: string;
}

export interface OverviewRow {
  detail: string;
  info: string;
  badge?: { text: string; variant: string };
  highlight?: string;
}

export interface FerryRow {
  operator: string;
  operatorNote?: string;
  travelTime: string;
  fare: string;
  notes: string;
}

export interface AccommodationRow {
  name: string;
  badges?: { text: string; variant: string }[];
  rate: string;
  highlights: string;
}

export interface AccommodationSection {
  location: string;
  rows: AccommodationRow[];
}

export interface TouristSpot {
  num: string;
  name: string;
  location: string;
  mapsUrl?: string;
  description: string;
  tip?: string;
}

export interface SpotTier {
  label: string;
  icon: string;
  tierClass: string;
  spots: TouristSpot[];
}

export interface ItineraryRow {
  time: string;
  activity: string;
  details: string;
}

export interface DayData {
  id: string;
  dayNum: number;
  dateLabel: string;
  title: string;
  theme: string;
  accent: string;
  rows: ItineraryRow[];
  callout?: {
    variant: "tip" | "warning" | "info" | "success";
    icon: string;
    title: string;
    body: string;
  };
}

export interface PhotoSpot {
  rank: string;
  location: string;
  type: string;
  bestTime: string;
  lensRange: string;
}

export interface CameraSettingItem {
  label: string;
  value: string;
}

export interface BudgetRow {
  item: string;
  cost: string;
  notes: string;
  isTotal?: boolean;
}

export interface PackingCategory {
  category: string;
  items: string[];
}

export interface CarrierRow {
  carrier: string;
  signal: string;
  verdict: string;
  badgeVariant: string;
  badgeText: string;
}

export interface ConnectivityRow {
  task: string;
  feasibility: string;
  color: string;
}

export interface TipItem {
  text: string;
}

export interface CircuitData {
  dayLabel: string;
  dayColorClass: string;
  title: string;
  stops: string[];
}

export interface ContactRow {
  contact: string;
  details: string;
  isLink?: boolean;
  href?: string;
  isMono?: boolean;
}

// =============================================
// HERO DATA
// =============================================
export const heroBadges: HeroBadge[] = [
  { icon: "📅", text: "April 9–13, 2026" },
  { icon: "🕐", text: "5 Days, 4 Nights" },
  { icon: "👥", text: "6 Travelers" },
  { icon: "📍", text: "Caraga, Mindanao" },
];

export const crewMembers: CrewMember[] = [
  { initials: "JA", name: "Jason", accent: "var(--accent-turquoise)", accentDim: "var(--accent-turquoise-dim)" },
  { initials: "CJ", name: "Christyl Jade", accent: "var(--accent-coral)", accentDim: "var(--accent-coral-dim)" },
  { initials: "MJ", name: "Mary Jhade", accent: "var(--accent-palm)", accentDim: "var(--accent-palm-dim)" },
  { initials: "JE", name: "Jeshiela", accent: "var(--accent-sand)", accentDim: "var(--accent-sand-dim)" },
  { initials: "JU", name: "Justice", accent: "var(--accent-lagoon)", accentDim: "var(--accent-lagoon-dim)" },
  { initials: "HA", name: "Harold", accent: "var(--accent-sunset)", accentDim: "var(--accent-sunset-dim)" },
];

export const heroQuote =
  '"A land of raw nature, with breathtaking limestone cliffs, unbelievably clear turquoise waters, and unlimited adventures."';

export const heroIntro =
  "Dinagat Islands is a captivating archipelago in the Caraga region of Mindanao — a province of over 40 islands with Coron-like lagoons without the tour queues, pocket beaches as pristine as Palawan, and a mystical cultural identity shaped by the Philippine Benevolent Missionaries Association (PBMA). Often called the Philippines' \"Mystical Last Frontier,\" Dinagat rewards patience with solitude, raw beauty, and experiences you simply won't find on a packaged route.";

// =============================================
// STICKY NAV
// =============================================
export const navItems: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "getting-there", label: "Getting There" },
  { id: "stay", label: "Stay" },
  { id: "spots", label: "Spots" },
  { id: "day1", label: "Day 1", color: "#7eb8da" },
  { id: "day2", label: "Day 2", color: "#2dd4bf" },
  { id: "day3", label: "Day 3", color: "#2dd4bf" },
  { id: "day4", label: "Day 4", color: "#2dd4bf" },
  { id: "day5", label: "Day 5", color: "#7eb8da" },
  { id: "photography", label: "Photos" },
  { id: "budget", label: "Budget" },
  { id: "packing", label: "Packing" },
  { id: "connectivity", label: "WiFi" },
  { id: "tips", label: "Tips" },
  { id: "circuits", label: "Circuits" },
  { id: "contacts", label: "Contacts" },
];

// =============================================
// OVERVIEW
// =============================================
export const overviewRows: OverviewRow[] = [
  { detail: "Travel Dates", info: "April 9–13, 2026 (Wednesday–Sunday)" },
  {
    detail: "Outbound Flight",
    info: "CEB → Surigao, 2:15 PM – 3:15 PM",
    badge: { text: "DG 6901", variant: "turquoise" },
  },
  {
    detail: "Return Flight",
    info: "Surigao → CEB, 3:35 PM – 4:25 PM",
    badge: { text: "DG 6902", variant: "turquoise" },
  },
  {
    detail: "Gateway",
    info: "Surigao Airport (SUG) → Surigao Port → San Jose, Dinagat Islands",
  },
  {
    detail: "Season",
    info: "Dry season (April–June) — ideal conditions",
    highlight: "palm",
  },
  {
    detail: "Language",
    info: "Cebuano, Surigaonon, Dinagatnon; Tagalog & English understood",
  },
  {
    detail: "Currency",
    info: "Philippine Peso (₱) — bring cash; ATMs are extremely scarce",
    highlight: "coral",
  },
  {
    detail: "Mobile Signal",
    info: "Patchy; Smart/TNT slightly better than Globe",
  },
];

// =============================================
// GETTING THERE
// =============================================
export const ferryRows: FerryRow[] = [
  {
    operator: "Montenegro Shipping",
    operatorNote: "RORO/Fastcraft",
    travelTime: "~2.5 hrs",
    fare: "₱170–255",
    notes: "Twice daily",
  },
  {
    operator: "Evaristo & Sons",
    operatorNote: "RORO",
    travelTime: "~1.5 hrs",
    fare: "₱150–200",
    notes: "Early & late morning",
  },
  {
    operator: "Vince Gabriel Liner",
    travelTime: "~1 hr",
    fare: "~₱200",
    notes: "Early afternoon",
  },
  {
    operator: "Pumpboats (Lantsa)",
    travelTime: "1.5–2 hrs",
    fare: "~₱200",
    notes: "First trip ~5:30 AM",
  },
];

// =============================================
// ACCOMMODATION
// =============================================
export const accommodationSections: AccommodationSection[] = [
  {
    location: "San Jose (Capital — Recommended Base)",
    rows: [
      {
        name: "Jmalls Island Tourist Inn (RedDoorz)",
        badges: [{ text: "WiFi", variant: "turquoise" }],
        rate: "₱800–1,200/night",
        highlights: "Near port, popular with backpackers, free WiFi advertised",
      },
      {
        name: "JK Tourist Inn",
        rate: "₱500–800/night",
        highlights: "Basic, clean, near town center",
      },
      {
        name: "Along D Road Homestay",
        rate: "₱1,500/night (AC, 2 pax)",
        highlights: "Sea view, family-run, loft for groups",
      },
      {
        name: "Candelaria Bed & Breakfast",
        rate: "₱2,000/night (Standard)",
        highlights: "Cozy, local charm",
      },
      {
        name: "Island View Suites",
        badges: [
          { text: "WiFi", variant: "turquoise" },
          { text: "✅ BOOKED", variant: "palm" },
        ],
        rate: "₱1,000–1,500/night",
        highlights:
          "Booked and confirmed. Sea views, AC, 8 rooms across 4 floors. Confirmed WiFi. Best option for remote workers.",
      },
      {
        name: "Camagong Suites",
        rate: "₱1,200–1,800/night",
        highlights: "Newer property",
      },
      {
        name: "Vine's Bed & Breakfast Homtel",
        rate: "₱800–1,200/night",
        highlights:
          "European-standard amenities, spacious balcony, bay views. Contact via WhatsApp: +63-915-211-7217",
      },
      {
        name: "Saturn Homestay",
        rate: "₱600–1,000/night",
        highlights: "Budget option",
      },
    ],
  },
  {
    location: "Basilisa",
    rows: [
      {
        name: "Cape Seaductive Resort & Spa",
        badges: [{ text: "NO WiFi", variant: "coral" }],
        rate: "₱2,500–5,000/night",
        highlights:
          "Best resort in Dinagat; ocean-view villas. No WiFi, no grid electricity (generator only). Intentional \"unplug\" experience.",
      },
      {
        name: "Park Forest Resort",
        rate: "₱1,500–2,500/night",
        highlights: "Beachside, relaxing",
      },
    ],
  },
  {
    location: "Cagdianao",
    rows: [
      {
        name: "Blesed-Bradgette Resort",
        rate: "₱800–1,500/night",
        highlights: "Quiet coastal views",
      },
      {
        name: "Fluir Frio Beach Resort",
        rate: "₱1,000–2,000/night",
        highlights: "Beach access",
      },
    ],
  },
];

// =============================================
// TOURIST SPOTS
// =============================================
export const spotTiers: SpotTier[] = [
  {
    label: "Must-See — Tier 1",
    icon: "⭐",
    tierClass: "tier-1",
    spots: [
      {
        num: "01",
        name: "Pangabangan Blue Lagoon",
        mapsUrl: "https://maps.google.com/?q=10.4280,125.5680",
        location: "📍 Pangabangan Island, Libjo",
        description:
          "The crown jewel. A shallow tidal pool of impossibly turquoise water framed by limestone cliffs and mangroves. A subterranean hole creates a deep blue-green gradient. Swimming, kayaking, bamboo raft rides. Entrance: ₱20.",
        tip: "📸 Climb to Pangabangan Peak viewdeck for the iconic aerial shot. Best light: early morning or late afternoon.",
      },
      {
        num: "02",
        name: "Lake Bababu & Bababu Beach",
        mapsUrl: "https://maps.google.com/?q=10.0742,125.5091",
        location: "📍 Basilisa (~30–45 min trek from BEAP)",
        description:
          "One of the few meromictic lakes in the Philippines — freshwater floats above saltwater, never mixing. Connected to the sea by a 650-meter underwater cave, the longest in the Philippines. Make a wish (local tradition).",
        tip: "📸 Emerald-green water under overcast skies looks otherworldly. Wide-angle lens recommended.",
      },
      {
        num: "03",
        name: "Hagakhak Rock Formation",
        mapsUrl: "https://maps.google.com/?q=Hagakhak+Rock+Formation+Basilisa+Dinagat+Islands+Philippines",
        location: "📍 Off the coast of Basilisa",
        description:
          "Nature's Cathedral. Colossal sedimentary rock formations carved by ocean waves over thousands of years. Jagged limestone cliffs rise dramatically from the sea. Viewing from boat only — no swimming due to strong currents.",
        tip: "📸 Best photographed from the boat at varying distances. Morning light gives warm tones.",
      },
      {
        num: "04",
        name: "Miracle Pool",
        mapsUrl: "https://maps.google.com/?q=Miracle+Pool+Pangabangan+Island+Libjo+Dinagat+Islands+Philippines",
        location: "📍 Pangabangan Island, Libjo",
        description:
          "The Underground Oasis. A subterranean cave pool with crystal-clear freshwater, sparkling with natural calcite deposits. Cool, dimly lit, and utterly surreal. Life vest rental: ₱50.",
        tip: "📸 Low-light challenge. ISO 3200+, f/2.8 or wider. Calcite deposits sparkle beautifully.",
      },
      {
        num: "05",
        name: "Mt. Redondo Natural Bonsai Forest",
        mapsUrl: "https://maps.google.com/?q=Mt+Redondo+Bonsai+Forest+Loreto+Dinagat+Islands+Philippines",
        location: "📍 Loreto (highest mountain in the province)",
        description:
          "A 200+ hectare forest of naturally miniature trees — magkuno, lauan, pine, pitcher plants — shaped by wind and weather. Fully-grown trees reach a maximum height of 4 feet. Home to the critically endangered Dinagat Cloud Rat.",
        tip: "📸 Low-angle shots make bonsai trees look full-sized. Panoramic summit views of surrounding islands.",
      },
    ],
  },
  {
    label: "Beaches — Tier 2",
    icon: "🏖️",
    tierClass: "tier-2",
    spots: [
      {
        num: "06",
        name: "Bitaog Beach",
        mapsUrl: "https://maps.google.com/?q=Bitaog+Beach+Basilisa+Dinagat+Islands+Philippines",
        location: "📍 Basilisa",
        description:
          "Fine white sand, turquoise water, limestone formations — rivals Palawan. Best spot for snorkeling and underwater photography.",
      },
      {
        num: "07",
        name: "Duyos Beach / Duyos Island",
        mapsUrl: "https://maps.google.com/?q=Duyos+Beach+Basilisa+Dinagat+Islands+Philippines",
        location: "📍 Basilisa",
        description:
          "A shifting sandbar that rises and sinks with the tides. Drone-worthy minimalist seascape.",
      },
      {
        num: "08",
        name: "Sundayo Beach",
        mapsUrl: "https://maps.google.com/?q=Sundayo+Beach+Hagakhak+Island+Dinagat+Islands+Philippines",
        location: "📍 Hagakhak Island",
        description:
          "Long white sand beach with dramatic rock formations. Secluded and pristine. Check availability before going — occasionally closed.",
      },
      {
        num: "09",
        name: "Pagkawasan Beach",
        mapsUrl: "https://maps.google.com/?q=Pagkawasan+Beach+San+Jose+Dinagat+Islands+Philippines",
        location: "📍 Near San Jose",
        description:
          "Rustic charm, unspoilt shoreline, quiet atmosphere. A favorite for genuine island escape seekers.",
      },
      {
        num: "10",
        name: "Cab-Ilan Beach",
        mapsUrl: "https://maps.google.com/?q=Cab-Ilan+Beach+Basilisa+Dinagat+Islands+Philippines",
        location: "📍 Basilisa",
        description:
          "Creamy white sand fringed with coconut palms. Calm waters for swimming and snorkeling.",
      },
      {
        num: "11",
        name: "Hinabyan Beach",
        mapsUrl: "https://maps.google.com/?q=Hinabyan+Beach+Cagdianao+Dinagat+Islands+Philippines",
        location: "📍 Cagdianao (eastern coast)",
        description:
          "Long, quiet, powdery sand — practically untouched. True digital detox territory.",
      },
      {
        num: "12",
        name: "Campintac Black Beach",
        mapsUrl: "https://maps.google.com/?q=Campintac+Black+Beach+San+Jose+Dinagat+Islands+Philippines",
        location: "📍 Near San Jose",
        description:
          "Dark volcanic sand with WWII history — once a Japanese landing site. The contrast of black sand against turquoise water is striking at golden hour.",
      },
      {
        num: "13",
        name: "Cabacongan Cove",
        mapsUrl: "https://maps.google.com/?q=Cabacongan+Cove+Basilisa+Dinagat+Islands+Philippines",
        location: "📍 Basilisa",
        description:
          "Secluded, powdery sand, crystal-clear waters. Limestone cliffs frame the cove. Perfect for cliff-jumping shots.",
      },
      {
        num: "14",
        name: "Alyssa's Hidden Beach",
        mapsUrl: "https://maps.google.com/?q=Alyssa+Hidden+Beach+Dinagat+Islands+Philippines",
        location: "📍 Secluded (ask local guide)",
        description:
          "White sand, crystal-clear waters, coconut trees, dramatic rock formations. Perfect for romantic retreats.",
      },
    ],
  },
  {
    label: "Islands & Islets",
    icon: "🏝️",
    tierClass: "tier-islands",
    spots: [
      {
        num: "15",
        name: "Pangabangan Island",
        mapsUrl: "https://maps.google.com/?q=Pangabangan+Island+Libjo+Dinagat+Islands+Philippines",
        location: "📍 Northwest of Basilisa, Libjo area",
        description:
          "Houses both the Blue Lagoon and Miracle Pool. Unique tidal pool and inviting sandbar.",
      },
      {
        num: "16",
        name: "Isla Aga",
        mapsUrl: "https://maps.google.com/?q=Isla+Aga+Basilisa+Dinagat+Islands+Philippines",
        location: "📍 Northwest of Bababu, Basilisa",
        description:
          "Cluster of karst cliffs with white sand. Famous for one of the most scenic hanging bridges in the Philippines — crystal-clear water directly under your feet.",
        tip: "📸 Shoot the hanging bridge from multiple angles.",
      },
      {
        num: "17",
        name: "Kisses Islet",
        mapsUrl: "https://maps.google.com/?q=Kisses+Islet+Libjo+Dinagat+Islands+Philippines",
        location: "📍 Near Libjo",
        description:
          'Tiny, rounded twin islets rising side by side from the sea. Calm waters for a quick swim.',
        tip: '📸 Best from a distance showing the "kissing" formation.',
      },
      {
        num: "18",
        name: "Sayaw Island",
        mapsUrl: "https://maps.google.com/?q=Sayaw+Island+Cagdianao+Dinagat+Islands+Philippines",
        location: "📍 Off Cagdianao (eastern coast)",
        description:
          "Pristine, rarely included in standard tours. True castaway retreat. Minimal infrastructure, few visitors.",
      },
      {
        num: "19",
        name: "Oasis Islet",
        mapsUrl: "https://maps.google.com/?q=Oasis+Islet+Libjo+Dinagat+Islands+Philippines",
        location: "📍 Libjo area",
        description:
          "A perfect anchoring spot to gaze at surrounding limestone islands jutting from every corner of the sea.",
      },
    ],
  },
  {
    label: "Cultural & Historical",
    icon: "🏛️",
    tierClass: "tier-cultural",
    spots: [
      {
        num: "20",
        name: "PBMA Divine Master's Shrine",
        mapsUrl: "https://maps.google.com/?q=PBMA+Divine+Masters+Shrine+San+Jose+Dinagat+Islands+Philippines",
        location: "📍 Barangay Aurelio, San Jose",
        description:
          "HQ of the Philippine Benevolent Missionaries Association, founded by Ruben Ecleo Sr. in 1965. Sprawling complex with elaborate gardens, ponds, streams, and mausoleum. Dress code required: Males: pants, shirt, closed shoes. Females: skirts, enclosed shoes, no sleeveless. Loaner pants: ₱20.",
        tip: "📸 Architecture blends modern and folk elements. Terraced gardens are photogenic.",
      },
      {
        num: "21",
        name: "Islander's Castle (White Castle)",
        location: "📍 Hilltop, San Jose",
        description:
          "A ₱350-million Disney-like palatial residence of the Ecleo family, built in 2007. Visible from the sea when approaching San Jose. Private property — photos only from the gates. Panoramic views of the bay.",
        tip: "📸 Capture it against the hillside from boats. Use telephoto from the gates.",
      },
      {
        num: "22",
        name: "Pulang Yuta Viewpoint",
        location: "📍 Barangay Cuarinta, San Jose",
        description:
          "Elevated red-earth viewpoint with panoramic views of the town and sea. Short motorcycle ride from town center.",
      },
    ],
  },
  {
    label: "Surfing & Water Sports",
    icon: "🏄",
    tierClass: "tier-2",
    spots: [
      {
        num: "S1",
        name: "Tagbirayan Beach",
        mapsUrl: "https://maps.google.com/?q=Tagbirayan+Beach+Cagdianao+Dinagat+Islands+Philippines",
        location: "📍 Barangay San Jose, Cagdianao",
        description:
          "Dinagat's only recognised surf break — an emerging destination that has already hosted competitions (\"Harok sa Tagbi\"). Professional surfers have confirmed its potential. Wave season mirrors Siargao: best from late September to March. April can still deliver on good swell days. Check Surfline or Magicseaweed 3–4 days before your trip.",
        tip: "🏄 Best checked via Surfline forecast before committing. Boards available for rent locally. Reef-safe sunscreen mandatory — this is a reef break. Great for beginners to intermediate on smaller swell days.",
      },
    ],
  },
  {
    label: "Hidden Gems & Secret Spots",
    icon: "🌊",
    tierClass: "tier-hidden",
    spots: [
      {
        num: "23",
        name: "Tambongon Lagoon",
        location: "📍 Protected fish sanctuary",
        description:
          "Home to endemic aquatic species. Scenic views, swimming, and boating.",
      },
      {
        num: "24",
        name: "Paragamac Falls",
        location: "📍 Mt. Pulhi area",
        description:
          "Multi-tier waterfall with naturally-built pools at each cascade. Cliff jumping and swimming. Motorcycle ride (~₱300) then short trek.",
      },
      {
        num: "25",
        name: "Punta Buena Suerte Resort",
        location: "📍 Tip of Libjo",
        description:
          "180-degree view of waters below with several picturesque spots. Guided tour: ₱30.",
      },
      {
        num: "26",
        name: "Jelmar's Islet Resort",
        location: "📍 Near Libjo",
        description:
          "Iconic bamboo stilt bridges leading to the main resort. Perfect Instagram spot. Often a lunch stop on island-hopping tours.",
      },
      {
        num: "27",
        name: "Babas Cove",
        location: "📍 Basilisa",
        description:
          "Lucent aquamarine and turquoise waters revealing corals. Starting point for Lake Bababu trek. Climb the karst cliff for grandstand views.",
      },
      {
        num: "28",
        name: "Mount Cambinliw Bonsai Forest",
        location: "📍 Loreto area (940m elevation)",
        description:
          "Second bonsai forest in Dinagat. Key biodiversity site with endemic species. Less visited than Mt. Redondo.",
      },
      {
        num: "29",
        name: "Luta's Beach Resort",
        location: "📍 Near Blue Lagoon area, Libjo",
        description:
          "Crystal-clear waters, nice cottages, karaoke spot. Access point for Blue Lagoon via AO Resort.",
      },
      {
        num: "30",
        name: "San Jose Mangrove Eco-Park",
        location: "📍 San Jose",
        description:
          "Boardwalk through mangroves, local flora and fauna, peaceful nature walk.",
      },
    ],
  },
];

// =============================================
// DAILY SCHEDULE
// =============================================
export const days: DayData[] = [
  {
    id: "day1",
    dayNum: 1,
    dateLabel: "Wednesday, April 9",
    title: "Arrival & San Jose Exploration",
    theme: "Transit, check-in, cultural immersion",
    accent: "var(--accent-palm)",
    rows: [
      { time: "12:30 PM", activity: "🛫 Arrive at Mactan-Cebu International Airport", details: "Check in for DG 6901. Bring snacks for the journey." },
      { time: "2:15 PM", activity: "🛫 Depart CEB → Surigao", details: "Flight DG 6901 (1 hour)" },
      { time: "3:15 PM", activity: "🛬 Arrive Surigao Airport", details: "Collect luggage" },
      { time: "3:30 PM", activity: "🚐 Tricycle to Surigao Port (Pantalan Dos)", details: "₱30–50, ~20 min. Walk past the airport touts." },
      { time: "3:50 PM", activity: "🎫 Buy ferry ticket", details: "Head to Pantalan Dos. Check which line has the next departure." },
      { time: "4:00–5:30 PM", activity: "🚢 Ferry to San Jose, Dinagat Islands", details: "~1–1.5 hours depending on vessel. Enjoy coastline views — coconut-fringed beaches and the silhouette of Islander's Castle." },
      { time: "5:30 PM", activity: "🏨 Arrive San Jose Port", details: "Meet pre-arranged guide/transport. Check in at accommodation." },
      { time: "6:00 PM", activity: "🧳 Check-in & freshen up", details: "Settle into your room. Charge devices — power can be inconsistent." },
      { time: "6:30 PM", activity: "🌅 Sunset walk to San Jose waterfront", details: "Houses on stilts, fishing boats, salty sea breeze." },
      { time: "7:00 PM", activity: "🍽️ Dinner at local carinderia", details: "Try grilled fish, kinilaw (ceviche), sinugba. Budget: ₱80–150/meal." },
      { time: "8:00 PM", activity: "📋 Coordinate with guide for Day 2", details: "Confirm island-hopping itinerary, boat rental, departure time. Contact: Kuya Alon (09076102770) or Azonta Travel & Tours or Yaco Travel and Tours (Saira)." },
      { time: "9:00 PM", activity: "🌙 Rest", details: "Early night — big day tomorrow." },
    ],
    callout: {
      variant: "warning",
      icon: "🚨",
      title: "Backup Plan",
      body: "If you miss the last afternoon ferry (usually 2:00–3:00 PM), stay overnight in Surigao City near the port. Options: Boulevard Tourist Inn, Bee Hub Pension, or Gateway Hotel. Take the earliest ferry (5:00–6:00 AM) the next morning.",
    },
  },
  {
    id: "day2",
    dayNum: 2,
    dateLabel: "Thursday, April 10",
    title: "Libjo Loop: Island Hopping Day 1",
    theme: "Blue Lagoon, Miracle Pool, dramatic rock formations",
    accent: "var(--accent-lagoon)",
    rows: [
      { time: "5:00 AM", activity: "⏰ Wake up", details: "Early start for calm seas and best light." },
      { time: "5:30 AM", activity: "🍳 Breakfast", details: "At accommodation or nearby eatery. Pack a lunch (buy at carinderia near port)." },
      { time: "6:00 AM", activity: "🚤 Depart San Jose Port by chartered boat", details: "Head north toward Libjo. Boat rental: ~₱3,000–3,500/day for 4–8 pax. Bring: dry bag, reef-safe sunscreen, sturdy sandals, snorkel gear, water, packed lunch." },
      { time: "6:30 AM", activity: "📸 Coastal views en route", details: "Coastline from San Jose to Libjo is studded with karst formations. Keep your camera ready — comparable to Coron and El Nido." },
      { time: "7:30 AM", activity: "🏝️ STOP 1: Hagakhak Rock Formation", details: "~30 min. Photograph from varying distances. No swimming (strong currents). Shoot wide at 28mm for scale, then zoom to 200mm for dramatic compression." },
      { time: "8:15 AM", activity: "⛵ Sail to Pangabangan Island", details: "~20 min transit through stunning islet clusters." },
      { time: "8:45 AM", activity: "🏊 STOP 2: Pangabangan Blue Lagoon", details: "Swim in the crystal-clear tidal pool. Bamboo raft ride. Climb viewdeck for iconic aerial shot. Allow 1.5–2 hours. Morning light (8–10 AM) creates beautiful reflections. Harvest fresh \"lato\" (seaweed) from the shoreline." },
      { time: "10:45 AM", activity: "🕳️ STOP 3: Miracle Pool Cave", details: "Short walk from Blue Lagoon. Swim in the surreal underground cave pool. Life vest rental: ₱50. Allow 45 min. ISO 3200+, f/2.8 or wider." },
      { time: "11:30 AM", activity: "🏝️ STOP 4: Kisses Islet", details: "Quick photo stop at the twin islets. 15 min. Swim in calm waters." },
      { time: "12:00 PM", activity: "🍱 Lunch break", details: "At Jelmar's Islet Resort (iconic bamboo stilt bridges) or Luta's Beach Resort (cottages, crystal water). ~1 hour." },
      { time: "1:00 PM", activity: "🏝️ STOP 5: Oasis Islet", details: "Explore the cluster of limestone islands. Snorkeling among coral gardens. 45 min." },
      { time: "1:45 PM", activity: "🏖️ STOP 6: Sundayo Beach (if open)", details: "Long white sand beach on Hagakhak Island. If closed, explore Cab-Ilan Beach instead. Swim, relax, photograph rock formations. 1 hour." },
      { time: "3:00 PM", activity: "🚤 Return voyage to San Jose", details: "~1.5 hours. Enjoy the golden afternoon light on the water." },
      { time: "4:30 PM", activity: "🏛️ San Jose Land Tour: PBMA Shrine", details: "Habal-habal to the shrine (~₱50). Register, get visitor pass, rent proper attire if needed (₱20). Tour grounds, terraced gardens, mausoleum exterior. Allow 1 hour." },
      { time: "5:30 PM", activity: "🏰 Islander's Castle", details: "Short ride from PBMA Shrine. View the \"White Castle\" from the gates. Photograph against sunset sky. Panoramic bay views. 30 min." },
      { time: "6:00 PM", activity: "🌅 Sunset from castle viewpoint", details: "One of the best sunset vantage points on the island. Bay, islands, and sky create a dramatic composition." },
      { time: "6:30 PM", activity: "🍽️ Dinner in San Jose", details: "Fresh seafood at a local carinderia. Try: tinolang isda, sinugba, puso (hanging rice)." },
      { time: "8:00 PM", activity: "⭐ Stargazing", details: "Minimal light pollution. Exceptional night sky from the waterfront. 20-sec exposure, ISO 3200, 28mm wide." },
      { time: "9:30 PM", activity: "🌙 Rest", details: "" },
    ],
    callout: {
      variant: "info",
      icon: "🚤",
      title: "Boat Cost Estimate",
      body: "₱3,000–3,500 for full-day Libjo Loop (split among group of 4–8 passengers)",
    },
  },
  {
    id: "day3",
    dayNum: 3,
    dateLabel: "Friday, April 11",
    title: "Basilisa Circuit: Island Hopping Day 2",
    theme: "Lake Bababu, pristine beaches, cliff coves",
    accent: "var(--accent-sand)",
    rows: [
      { time: "5:00 AM", activity: "⏰ Wake up", details: "Another early start." },
      { time: "5:30 AM", activity: "🍳 Breakfast + pack lunch", details: "" },
      { time: "6:00 AM", activity: "🚤 Depart San Jose → Basilisa circuit", details: "Head south. Coron-like seascape en route." },
      { time: "6:45 AM", activity: "🏖️ STOP 1: Babas Cove", details: "Starting point for Lake Bababu. Lucent aquamarine waters revealing corals. Climb the karst cliff for grandstand panoramic view. 30 min." },
      { time: "7:15 AM", activity: "🥾 STOP 2: Trek to Lake Bababu", details: "30–45 min moderate trek through rocky limestone terrain. Register at Bababu Ecotourism Adventure Park (BEAP). Guide will narrate stories about the lake's mysteries." },
      { time: "8:00 AM", activity: "🏞️ Lake Bababu", details: "Emerge at the enigmatic meromictic lake. Swim, kayak, or absorb the mystical atmosphere. Make a wish (local tradition). Allow 1 hour. Wide-angle with surrounding forest canopy reflected in still water." },
      { time: "9:00 AM", activity: "🥾 Trek back to Babas Cove", details: "30 min descent." },
      { time: "9:30 AM", activity: "🏖️ STOP 3: Bababu Beach", details: "White-sand beach just behind the lake. Quick swim and rest after the trek. 30 min." },
      { time: "10:15 AM", activity: "⛵ Sail to nearby islands", details: "" },
      { time: "10:30 AM", activity: "🏝️ STOP 4: Isla Aga", details: "Limestone formations and the famous hanging bridge over crystal-clear water. Shoot from the bridge and from the shore. Allow 45 min." },
      { time: "11:15 AM", activity: "🏖️ STOP 5: Bitaog Beach", details: "The best beach in Dinagat. Crystal turquoise water, powder-fine white sand, steep limestone cliffs. Palawan-level beauty. Swim, snorkel, photograph. Allow 1.5 hours. Underwater shots here are stunning." },
      { time: "12:45 PM", activity: "🍱 Lunch on the beach", details: "Packed lunch in paradise." },
      { time: "1:30 PM", activity: "🏖️ STOP 6: Duyos Beach / Duyos Island", details: "The shifting sandbar. Walk the sandbar, photograph the minimalist seascape. 45 min." },
      { time: "2:15 PM", activity: "🏖️ STOP 7: Cabacongan Cove", details: "Secluded, powdery sand, crystal-clear waters surrounded by limestone. Cliff jumping for the adventurous. 45 min." },
      { time: "3:00 PM", activity: "🏖️ STOP 8: Pagkawasan Beach", details: "Quick stop. Rustic, unspoilt shoreline. 20 min." },
      { time: "3:30 PM", activity: "🚤 Head to Cagdianao", details: "~30 min boat ride to the eastern coast." },
      { time: "4:00 PM", activity: "🏄 STOP 9: Tagbirayan Beach — SURFING", details: "Dinagat's only surf break. Hosted competitions, endorsed by professional surfers. Board rentals available on-site (~₱200–300/hr). Allow 2 hours. April can deliver waves on good swell days — check Surfline forecast 3–4 days before the trip. Beginners welcome on smaller days. Reef break — wear reef-safe sunscreen and water shoes." },
      { time: "6:00 PM", activity: "🚤 Return voyage to San Jose", details: "~45 min. Golden light on the water for last sea photos." },
      { time: "6:45 PM", activity: "🏨 Return to accommodation", details: "Shower, rest, recharge." },
      { time: "7:15 PM", activity: "🍽️ Dinner", details: "Celebrate with a seafood feast. Try: grilled curacha (if available), sinuglaw, fresh shrimp." },
      { time: "8:30 PM", activity: "🌙 Night photography / rest", details: "Another chance for astrophotography if skies are clear." },
    ],
    callout: {
      variant: "info",
      icon: "🏄",
      title: "Boat Cost + Surf",
      body: "₱3,000–3,500 for full-day Basilisa Circuit + Tagbirayan (split among group of 4–8 passengers). Surfboard rental at Tagbirayan: ~₱200–300/hr per board. Check Surfline forecast 3–4 days before departure — April can still deliver on good swell days.",
    },
  },
  {
    id: "day4",
    dayNum: 4,
    dateLabel: "Saturday, April 12",
    title: "Mountain Trek + Hidden Gems",
    theme: "Bonsai forest, waterfalls, Cagdianao coast, cultural immersion",
    accent: "var(--accent-sunset)",
    rows: [
      { time: "5:00 AM", activity: "⏰ Wake up", details: "" },
      { time: "5:30 AM", activity: "🍳 Early breakfast", details: "" },
      { time: "6:00 AM", activity: "🏍️ Habal-habal to Loreto", details: "~1–1.5 hours ride to the base of Mt. Redondo. Arrange motorcycle the night before. Cost: ~₱300–500 one way." },
      { time: "7:30 AM", activity: "🥾 Mt. Redondo Bonsai Forest Trek", details: "Begin the hike through lush greenery. Trail ascends through progressively more surreal vegetation. Look for wild blueberries along the trail." },
      { time: "9:00 AM", activity: "🌳 Bonsai Forest Summit", details: "200+ hectare natural bonsai forest. Fully-grown trees no taller than your waist. Panoramic summit views of surrounding islands. Use low angle to make bonsai trees look like a full-sized forest. Watch for the critically endangered Dinagat Cloud Rat and Tarsier. Allow 1.5 hours." },
      { time: "10:30 AM", activity: "🥾 Descend Mt. Redondo", details: "~1 hour down." },
      { time: "11:30 AM", activity: "🍱 Lunch in Loreto", details: "Local eatery. Simple Filipino fare." },
      { time: "12:30 PM", activity: "🏍️ Ride to Cagdianao", details: "~1 hour. Explore the eastern coast." },
      { time: "1:30 PM", activity: "🏖️ Hinabyan Beach, Cagdianao", details: "Long, quiet, practically untouched. Digital detox at its finest. Swim, relax, enjoy the solitude. 1 hour." },
      { time: "2:30 PM", activity: "🏝️ Sayaw Island (if accessible by boat)", details: "Off the Cagdianao coast. Pristine, rarely included in tours. True castaway retreat. If not accessible, explore Fluir Frio Beach Resort or Blesed-Bradgette Resort area." },
      { time: "3:30 PM", activity: "🏍️ Return to San Jose", details: "~1.5 hours ride." },
      { time: "5:00 PM", activity: "🏨 Rest & freshen up", details: "" },
      { time: "5:30 PM", activity: "🚶 San Jose walking tour", details: "San Jose Mangrove Eco-Park, public market (buy pasalubong/souvenirs), local shops. Houses on stilts, fishing boats, friendly locals." },
      { time: "6:00 PM", activity: "🌅 Final sunset in Dinagat", details: "From the waterfront or Pulang Yuta viewpoint (red-earth elevated spot in Brgy. Cuarinta)." },
      { time: "6:30 PM", activity: "🍽️ Farewell dinner", details: "Your best dinner yet. Consider asking your host family to prepare a special seafood meal." },
      { time: "8:00 PM", activity: "📷 Photo review & backup", details: "Review all photos from the trip. Backup to external storage." },
      { time: "9:00 PM", activity: "🧳 Pack for departure", details: "Organize gear for tomorrow's early exit." },
    ],
    callout: {
      variant: "warning",
      icon: "🏍️",
      title: "Transport Cost Estimate",
      body: "₱1,000–1,500 for full-day habal-habal charter (Loreto + Cagdianao round trip)",
    },
  },
  {
    id: "day5",
    dayNum: 5,
    dateLabel: "Sunday, April 13",
    title: "Departure",
    theme: "Final morning, transit back to Cebu",
    accent: "var(--accent-coral)",
    rows: [
      { time: "5:00 AM", activity: "⏰ Wake up", details: "Final morning in paradise." },
      { time: "5:30 AM", activity: "🌅 Sunrise at waterfront", details: "Last chance for golden-hour photography. The San Jose port area with fishing boats at dawn is atmospheric." },
      { time: "6:00 AM", activity: "🍳 Breakfast", details: "" },
      { time: "6:30 AM", activity: "🧳 Check out", details: "Say goodbye to your hosts." },
      { time: "7:00 AM", activity: "🚢 Early ferry San Jose → Surigao City", details: "Take the 7:00 AM or earliest available ferry. Travel time: 1–1.5 hours." },
      { time: "8:30 AM", activity: "🏙️ Arrive Surigao City", details: "" },
      { time: "9:00 AM", activity: "☕ Coffee & brunch in Surigao", details: "Explore Surigao City briefly. Options near the port area." },
      { time: "10:00 AM", activity: "🛍️ Surigao City exploration", details: "Visit local market for dried fish, calamansi products, native delicacies as pasalubong." },
      { time: "12:00 PM", activity: "🍽️ Lunch in Surigao", details: "" },
      { time: "1:00 PM", activity: "🚐 Head to Surigao Airport", details: "Tricycle/van, ~20 min. Be at airport by 1:30 PM for the 3:35 PM flight." },
      { time: "1:30 PM", activity: "🛫 Check in at Surigao Airport", details: "" },
      { time: "3:35 PM", activity: "🛫 Depart Surigao → Cebu", details: "Flight DG 6902 (~50 min)" },
      { time: "4:25 PM", activity: "🛬 Arrive Mactan-Cebu International Airport", details: "Welcome back home!" },
    ],
  },
];

// =============================================
// PHOTOGRAPHY
// =============================================
export const photoSpots: PhotoSpot[] = [
  { rank: "#1", location: "Pangabangan Blue Lagoon Viewdeck", type: "Landscape", bestTime: "8–10 AM", lensRange: "28mm wide" },
  { rank: "#2", location: "Hagakhak Rock Formation", type: "Seascape", bestTime: "Morning", lensRange: "28–200mm" },
  { rank: "#3", location: "Lake Bababu", type: "Landscape/Mood", bestTime: "Overcast or early AM", lensRange: "28–50mm" },
  { rank: "#4", location: "Bitaog Beach", type: "Beach/Underwater", bestTime: "10 AM–2 PM", lensRange: "28–70mm" },
  { rank: "#5", location: "Mt. Redondo Bonsai Forest", type: "Nature/Surreal", bestTime: "Morning", lensRange: "28–70mm" },
  { rank: "#6", location: "Miracle Pool Cave", type: "Low-light", bestTime: "Anytime", lensRange: "28mm, high ISO" },
  { rank: "#7", location: "Isla Aga Hanging Bridge", type: "Adventure", bestTime: "Midday", lensRange: "28–50mm" },
  { rank: "#8", location: "Duyos Sandbar", type: "Minimalist", bestTime: "Low tide", lensRange: "28mm / drone" },
  { rank: "#9", location: "Islander's Castle", type: "Architecture", bestTime: "Sunset", lensRange: "70–200mm" },
  { rank: "#10", location: "San Jose Port at Dawn", type: "Street/Documentary", bestTime: "5:30–6:30 AM", lensRange: "28–70mm" },
];

export const cameraSettings: CameraSettingItem[] = [
  { label: "Seascapes", value: "f/8–11, ISO 100–400. Use polarizing filter to cut water glare." },
  { label: "Cave / Miracle Pool", value: "f/2.8, ISO 3200–6400. Stabilize against rocks." },
  { label: "Bonsai Forest", value: "f/5.6–8, ISO 200–800. Use low angles for surreal perspective." },
  { label: "Astrophotography", value: "f/2.8, ISO 3200, 20-sec exposure. Manual focus on stars." },
  { label: "Underwater", value: "f/5.6, ISO 400–800. White balance set to underwater preset. Waterproof housing required." },
];

// =============================================
// BUDGET
// =============================================
export const budgetRows: BudgetRow[] = [
  { item: "Flights (CEB-SUG roundtrip)", cost: "Already booked", notes: "DG 6901 / DG 6902" },
  { item: "Ferry (Surigao-Dinagat roundtrip)", cost: "₱400–500", notes: "Includes terminal fees" },
  { item: "Accommodation (4 nights)", cost: "₱3,000–6,000", notes: "Depending on choice" },
  { item: "Island hopping Day 1 (Libjo Loop)", cost: "₱3,000–3,500", notes: "Split among group" },
  { item: "Island hopping Day 2 (Basilisa)", cost: "₱3,000–3,500", notes: "Split among group" },
  { item: "Day 4 transport (habal-habal)", cost: "₱1,000–1,500", notes: "Full day charter" },
  { item: "Local transport (tricycles, habal-habal)", cost: "₱500–800", notes: "Throughout trip" },
  { item: "Entrance fees", cost: "₱200–300", notes: "Various sites" },
  { item: "Food (5 days)", cost: "₱2,000–3,000", notes: "Local eateries" },
  { item: "Surfboard rental — Tagbirayan (Day 3)", cost: "₱1,200–1,800", notes: "~₱200–300/hr per board, 2 hrs, 6 pax" },
  { item: "Guide tips & miscellaneous", cost: "₱500–1,000", notes: "" },
  { item: "TOTAL ESTIMATE", cost: "₱14,800–21,900", notes: "~$260–385 USD", isTotal: true },
];

// =============================================
// PACKING
// =============================================
export const packingCategories: PackingCategory[] = [
  {
    category: "Essentials",
    items: [
      "Cash — ₱15,000–20,000 for entire trip. No reliable ATMs.",
      "Dry bag — Essential for boat transfers and beach hopping",
      "Reef-safe sunscreen — Protect the coral reefs",
      "Sturdy sandals/water shoes — Rocky terrain, coral, limestone treks",
      "Insect repellent — Evenings can be mosquito-heavy",
      "Flashlight/headlamp — Power outages possible",
      "Power bank — Multiple, fully charged",
      "Water bottles — Refillable; buy large jugs in San Jose",
      "Towels — Quick-dry microfiber",
    ],
  },
  {
    category: "Camera Gear",
    items: [
      "Sony a7C2 + 28-200mm lens",
      "Extra batteries (3–4 recommended)",
      "Memory cards (multiple)",
      "Waterproof housing or underwater case",
      "Lens cleaning cloth & kit",
      "Mini tripod/gorillapod for astrophotography",
      "Polarizing filter",
    ],
  },
  {
    category: "Clothing",
    items: [
      "Rash guard / swim shirt (UV protection) — essential for surfing",
      "Board shorts / quick-dry shorts",
      "Water shoes / reef booties — Tagbirayan is a reef break",
      "Surfboard wax (optional — rentals usually come waxed)",
      "Light long pants (for PBMA Shrine visit & habal-habal rides)",
      "Closed shoes (for shrine visit & mountain trek)",
      "Hat / cap",
      "Light rain jacket (April showers possible)",
    ],
  },
  {
    category: "Health & Safety",
    items: [
      "First aid kit",
      "Seasickness medicine (Bonamine)",
      "Personal medication",
      "Waterproof phone case",
    ],
  },
];

// =============================================
// CONNECTIVITY
// =============================================
export const carrierRows: CarrierRow[] = [
  {
    carrier: "Smart / TNT",
    signal: "Poor to fair in San Jose and resort areas",
    verdict: "BEST OPTION",
    badgeVariant: "palm",
    badgeText: "BEST OPTION",
  },
  {
    carrier: "DITO",
    signal: "Highest quality scores in Caraga region, no Dinagat-specific data",
    verdict: "BACKUP",
    badgeVariant: "sand",
    badgeText: "BACKUP",
  },
  {
    carrier: "Globe / TM",
    signal: "Essentially non-existent across most of the island",
    verdict: "AVOID",
    badgeVariant: "coral",
    badgeText: "AVOID",
  },
];

export const connectivityRows: ConnectivityRow[] = [
  { task: "Email, Slack, messaging", feasibility: "Usually works from San Jose accommodations with WiFi", color: "palm" },
  { task: "Light web browsing", feasibility: "Usually works — expect slower speeds", color: "palm" },
  { task: "Google Docs, collaborative tools", feasibility: "Possible but expect lag and disconnections", color: "sand" },
  { task: "Video calls (Zoom, Meet)", feasibility: "Unreliable. May work sporadically, not guaranteed", color: "sunset" },
  { task: "Large uploads/downloads", feasibility: "Very difficult. Plan around this", color: "coral" },
];

// =============================================
// TIPS
// =============================================
export const tips: string[] = [
  "Cash is king. ATMs are almost nonexistent. Digital payments are rarely accepted. Bring more than you think you'll need.",
  "Book your guide and boat in advance. Contact local tour operators before arrival: Kuya Alon (09076102770), Azonta Travel & Tours (San Jose based), Yaco Travel and Tours (Saira) — local, personalized, and Jmalls Island Tourist Inn — offers package tours.",
  "Ferry schedules change. Always confirm the day before. Weather can cancel trips. Have a backup plan.",
  "Respect the PBMA Shrine dress code. Pants/shirt for males, skirt/closed shoes for females. No sleeveless tops.",
  "Don't get scammed at the port. Avoid tricycle drivers immediately outside Surigao Port and San Jose Port. Walk a block away to get fair fares.",
  "Mobile signal is unreliable. Download offline maps before you go. Smart/TNT network has slightly better coverage than Globe.",
  "April is peak dry season — perfect weather, calm seas, clear skies. Best time for island hopping and photography.",
  "Bring a positive attitude. Dinagat is remote, undeveloped, and beautifully raw. Embrace the slow pace. The roads are unpaved, the infrastructure is basic — but that's exactly the charm.",
  "Check surf forecast before Day 3. Visit Surfline or Magicseaweed around April 5–7. Tagbirayan's peak season ends in March, but April can still deliver on good swell days. If the forecast is flat, use the time for an extra beach stop instead.",
  "Be environmentally responsible. This is an emerging ecotourism destination. Take nothing but photos, leave nothing but footprints. Use reef-safe sunscreen. Don't touch coral.",
  "Support local. Eat at local carinderias, hire local guides, stay at locally-owned homestays. Your tourism supports one of the Philippines' poorest provinces.",
];

// =============================================
// CIRCUITS
// =============================================
export const circuits: CircuitData[] = [
  {
    dayLabel: "Day 2 — Thursday, April 10",
    dayColorClass: "circuit-day2",
    title: "Libjo Loop",
    stops: [
      "San Jose",
      "Hagakhak Rock Formation",
      "Pangabangan Blue Lagoon",
      "Miracle Pool",
      "Kisses Islet",
      "Jelmar's Resort",
      "Oasis Islet",
      "Sundayo Beach",
      "San Jose",
    ],
  },
  {
    dayLabel: "Day 3 — Friday, April 11",
    dayColorClass: "circuit-day3",
    title: "Basilisa Circuit",
    stops: [
      "San Jose",
      "Babas Cove",
      "Lake Bababu Trek",
      "Bababu Beach",
      "Isla Aga",
      "Bitaog Beach",
      "Duyos Beach",
      "Cabacongan Cove",
      "Pagkawasan Beach",
      "Tagbirayan Beach (Surfing)",
      "San Jose",
    ],
  },
  {
    dayLabel: "Day 4 — Saturday, April 12",
    dayColorClass: "circuit-day4",
    title: "Mountain & East Coast",
    stops: [
      "San Jose",
      "Loreto",
      "Mt. Redondo Bonsai Forest",
      "Cagdianao",
      "Hinabyan Beach",
      "Sayaw Island",
      "San Jose",
    ],
  },
];

// =============================================
// CONTACTS
// =============================================
export const contactRows: ContactRow[] = [
  { contact: "Provincial Tourism Office", details: "Dinagat Islands Tourism and Culture Office" },
  { contact: "Tour Guide — Kuya Alon", details: "09076102770", isMono: true },
  { contact: "Azonta Travel & Tours", details: "San Jose, Dinagat Islands" },
  { contact: "Yaco Travel and Tours (Saira)", details: "Local operator, personalized experiences" },
  {
    contact: "Evaristo & Sons Sea Transport",
    details: "booking.barkota.com",
    isLink: true,
    href: "https://booking.barkota.com",
  },
  { contact: "Montenegro Shipping Lines", details: "Check at Surigao Port (Pantalan Dos)" },
  { contact: "Philippine Coast Guard — Surigao", details: "For sea condition updates before departures" },
];
