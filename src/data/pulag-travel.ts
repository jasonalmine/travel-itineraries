// ============================================
// Mt. Pulag Travel Itinerary Data
// ============================================

export interface NavItem {
  id: string;
  label: string;
  color?: string;
}

export interface HeroBadge {
  icon: string;
  text: string;
}

export interface RouteNode {
  label: string;
  highlight?: boolean;
}

export interface OverviewRow {
  day: string;
  date: string;
  plan: string;
}

export interface FlightCard {
  label: string;
  route: string;
  depart: string;
  arrive: string;
  duration: string;
  terminal: string;
}

export interface BusScheduleRow {
  time: string;
  type: string;
  fare: string;
  recommended?: boolean;
}

export interface ItineraryRow {
  time: string;
  activity: string;
}

export interface BudgetRow {
  item: string;
  cost: string;
  isTotal?: boolean;
}

export interface RiskItem {
  title: string;
  severity: "high" | "medium" | "low";
  description: string;
  mitigation: string;
}

export interface ChecklistItem {
  text: string;
}

export interface GearItem {
  text: string;
}

export interface GearCategoryData {
  icon: string;
  title: string;
  items: GearItem[];
  fullWidth?: boolean;
}

export interface GearDayData {
  title: string;
  subtitle: string;
  categories: GearCategoryData[];
  dividerBefore?: boolean;
}

export interface ContactRow {
  what: string;
  contact: string;
}

// ============================================
// BAGUIO ACCOMMODATION (CONFIRMED)
// ============================================

export const baguioAccomDetails: ItineraryRow[] = [
  { time: "Property", activity: "Cedar Peak by Awesome Stay" },
  { time: "Location", activity: "Baguio City" },
  { time: "Status", activity: "Confirmed" },
];

// ============================================
// NAV
// ============================================

export const navItems: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "flights", label: "Flights" },
  { id: "day1", label: "Day 1", color: "#7eb8da" },
  { id: "day2", label: "Day 2", color: "#4ade80" },
  { id: "day3", label: "Day 3", color: "#4ade80" },
  { id: "day4", label: "Day 4", color: "#4ade80" },
  { id: "day5", label: "Day 5", color: "#7eb8da" },
  { id: "day6", label: "Day 6", color: "#7eb8da" },
  { id: "day7", label: "Day 7", color: "#7eb8da" },
  { id: "budget", label: "Budget" },
  { id: "risks", label: "Risks" },
  { id: "checklist", label: "Checklist" },
  { id: "gear", label: "Gear" },
  { id: "packing", label: "Packing" },
  { id: "contacts", label: "Contacts" },
];

// ============================================
// HERO
// ============================================

export const heroBadges: HeroBadge[] = [
  { icon: "📅", text: "March 3–9, 2026" },
  { icon: "🕐", text: "7 days, 6 nights" },
  { icon: "📍", text: "Benguet, Cordillera" },
];

export const routeNodes: RouteNode[] = [
  { label: "Cebu" },
  { label: "Clark" },
  { label: "Baguio" },
  { label: "Mt. Pulag", highlight: true },
  { label: "Baguio" },
  { label: "Manila" },
  { label: "Cebu" },
];

// ============================================
// OVERVIEW
// ============================================

export const overviewRows: OverviewRow[] = [
  { day: "Day 1", date: "Mar 3 (Tue)", plan: "Fly CEB to CRK, bus to Baguio, check in, explore, rest" },
  { day: "Day 2", date: "Mar 4 (Wed)", plan: "Meet Manila team ~5 AM, travel to Pulag, Akiki Trail trek to camp" },
  { day: "Day 3", date: "Mar 5 (Thu)", plan: "Trek to summit (2,922 MASL), Camp 2 overnight" },
  { day: "Day 4", date: "Mar 6 (Fri)", plan: "Descend Pulag, travel back to Baguio, rest overnight" },
  { day: "Day 5", date: "Mar 7 (Sat)", plan: "Baguio city tour, organizer's van back to Manila (~3 PM departure)" },
  { day: "Day 6", date: "Mar 8 (Sun)", plan: "Manila day. Stay at Makati Diamond Residences" },
  { day: "Day 7", date: "Mar 9 (Mon)", plan: "Fly MNL to CEB 1:40 PM, arrive Cebu 3:10 PM" },
];

// ============================================
// FLIGHTS
// ============================================

export const flightCards: FlightCard[] = [
  {
    label: "Outbound Flight · March 3",
    route: "CEB → CRK",
    depart: "6:20 AM",
    arrive: "7:45 AM",
    duration: "~1h 25m",
    terminal: "Clark Terminal 2",
  },
  {
    label: "Return Flight · March 9",
    route: "MNL → CEB",
    depart: "1:40 PM",
    arrive: "3:10 PM",
    duration: "~1h 30m",
    terminal: "Non-stop",
  },
];

// ============================================
// DAY 1 DATA
// ============================================

export const clarkToBaguioSchedule: BusScheduleRow[] = [
  { time: "2:00 AM", type: "Regular Aircon", fare: "₱450" },
  { time: "4:00 AM", type: "Regular Aircon", fare: "₱450" },
  { time: "8:00 AM", type: "JoyBus Premiere", fare: "₱670" },
  { time: "9:30 AM 🌟", type: "JoyBus Executive", fare: "₱620", recommended: true },
  { time: "11:00 AM", type: "JoyBus Premiere", fare: "₱670" },
  { time: "1:00 PM", type: "JoyBus Deluxe", fare: "₱510" },
  { time: "3:30 PM", type: "Regular Aircon", fare: "₱450" },
  { time: "5:30 PM", type: "JoyBus Executive", fare: "₱620" },
  { time: "7:30 PM", type: "Regular Aircon", fare: "₱450" },
];

export const clarkArrivalTimeline: ItineraryRow[] = [
  { time: "7:45 AM", activity: "Land at Clark Airport Terminal 2" },
  { time: "7:45 – 8:15 AM", activity: "Deplane, collect luggage, exit to Arrivals" },
  { time: "8:15 – 8:30 AM", activity: "Walk to bus station at the Arrival Area" },
  { time: "8:30 AM", activity: "Buy ticket for next available bus" },
  { time: "9:30 AM", activity: "🚌 Board JoyBus Executive to Baguio" },
];

export const baguioArrivalTimeline: ItineraryRow[] = [
  { time: "12:30–1:30 PM", activity: "Arrive Baguio — Governor Pack Road Terminal" },
  { time: "1:30 PM", activity: "Grab taxi to accommodation (~₱80–150)" },
  { time: "2:00 PM", activity: "Check in to hotel / transient / Airbnb" },
  { time: "2:00–3:00 PM", activity: "Lunch on Session Road" },
  { time: "3:00–6:00 PM", activity: "Free time: Session Road, Burnham Park, Baguio Market" },
  { time: "6:00–8:00 PM", activity: "Heavy dinner — carb-rich, last meal before the trail" },
  { time: "8:00–9:00 PM", activity: "Prepare trekking gear for tomorrow" },
  { time: "9:00–9:30 PM", activity: "Lights out" },
];

export const eveningPrepRows: ItineraryRow[] = [
  { time: "Organize gear", activity: "Layers, headlamp, rain gear, snacks, water bottles" },
  { time: "Split shared gear", activity: "Divide between 2 packs: first aid, extra snacks, etc." },
  { time: "Charge devices", activity: "Phones, headlamps, camera, drone, power banks" },
  { time: "Set alarms", activity: "Set multiple alarms for 4:00 AM" },
  { time: "Phone ringer on", activity: "In case Manila team updates on departure/ETA" },
  { time: "Sleep by 9:30 PM", activity: "~6.5–7 hours of sleep before the trek" },
];

// ============================================
// DAY 2 DATA
// ============================================

export const manilaTeamTimeline: ItineraryRow[] = [
  { time: "12:00 MN (Mar 3→4)", activity: "Team departs Manila" },
  { time: "12:00–5:00 AM", activity: "~4–5 hours travel (nighttime, minimal traffic)" },
  { time: "~4:30–5:30 AM", activity: "Team arrives in Baguio" },
];

export const day2EarlyMorningTimeline: ItineraryRow[] = [
  { time: "4:00 AM", activity: "Wake up, freshen up" },
  { time: "4:15 AM", activity: "Final check: bags packed, gear ready, check out" },
  { time: "4:30 AM", activity: "Head to meeting point (taxi/walk)" },
  { time: "~5:00 AM", activity: "🤝 Meet the Manila team!" },
  { time: "~5:00–8:00 AM", activity: "Travel to Mt. Pulag DENR Office (~2–3 hrs via monster jeep)" },
  { time: "~8:00–10:00 AM", activity: "DENR orientation, proceed to Akiki Trail jump-off" },
  { time: "~10:00 AM+", activity: "Start the Akiki Trail trek to camp" },
];

export const meetingPoints = [
  { bus: "Genesis / JoyBus", location: "Governor Pack Road Terminal (near SM Baguio)" },
  { bus: "Victory Liner", location: "Upper Session Road, Brgy. Marcoville" },
  { bus: "Solid North", location: "Governor Pack Road" },
];

// ============================================
// DAY 3 DATA
// ============================================

export const day3Timeline: ItineraryRow[] = [
  { time: "Early AM", activity: "Begin summit push" },
  { time: "Sunrise", activity: "Reach the summit (2,922 MASL) for the famous sea of clouds" },
  { time: "Daytime", activity: "Summit photos, rest at the peak" },
  { time: "Evening", activity: "Stay at Camp 2 overnight" },
];

// ============================================
// DAY 4 DATA
// ============================================

export const day4Timeline: ItineraryRow[] = [
  { time: "Morning", activity: "Break camp, begin descent from Mt. Pulag" },
  { time: "Afternoon", activity: "Travel back to Baguio via monster jeep" },
  { time: "Evening", activity: "Check in to Baguio accommodation, rest and recover" },
];

// ============================================
// DAY 5 DATA
// ============================================

export const day5Timeline: ItineraryRow[] = [
  { time: "8:00 AM", activity: "Wake up, breakfast" },
  { time: "9:00 AM–3:00 PM", activity: "Baguio city tour: explore, shop, eat" },
  { time: "~3:00 PM", activity: "Tour wraps up" },
  { time: "~3:30 PM", activity: "🚐 Board organizer's van to Manila" },
  { time: "~8:30–9:30 PM", activity: "Arrive Manila (Makati area)" },
  { time: "~9:30 PM", activity: "Grab/taxi to Makati Diamond Residences, check in" },
];

// ============================================
// DAY 6 DATA
// ============================================

export const makatAccomDetails: ItineraryRow[] = [
  { time: "Location", activity: "Legazpi Village, Makati City" },
  { time: "Room", activity: "41sqm Studio (Room Only)" },
  { time: "Check-in", activity: "Saturday, 07 Mar 2026 (~9:30–10:00 PM)" },
  { time: "Check-out", activity: "Monday, 09 Mar 2026" },
  { time: "Nights", activity: "2 nights" },
  { time: "Total Cost", activity: "₱15,470 (confirmed)" },
  { time: "Booking Ref", activity: "9455" },
  { time: "Airport Access", activity: "~30–45 min to NAIA via Grab/taxi" },
];

// ============================================
// DAY 7 DATA
// ============================================

export const returnFlightDetails: ItineraryRow[] = [
  { time: "Route", activity: "MNL (NAIA) → CEB (Mactan-Cebu)" },
  { time: "Departure", activity: "1:40 PM" },
  { time: "Arrival", activity: "3:10 PM" },
  { time: "Flight Time", activity: "~1 hour 30 minutes" },
  { time: "Type", activity: "Non-stop" },
];

export const day7Timeline: ItineraryRow[] = [
  { time: "8:00–9:00 AM", activity: "Wake up, breakfast at Makati Diamond Residences" },
  { time: "9:00–10:30 AM", activity: "Pack up, check out, last-minute Manila time" },
  { time: "10:30–11:00 AM", activity: "Head to NAIA from Makati (~30–45 min via Grab/taxi)" },
  { time: "11:00–11:40 AM", activity: "Arrive at airport (~2 hours before flight)" },
  { time: "11:40 AM–1:40 PM", activity: "Check in, security, boarding" },
  { time: "1:40 PM", activity: "🛫 Depart Manila" },
  { time: "3:10 PM", activity: "🏠 Land in Cebu — welcome home!" },
];

// ============================================
// BUDGET
// ============================================

export const budgetRows: BudgetRow[] = [
  { item: "Bus Clark → Baguio (JoyBus Executive)", cost: "₱1,240" },
  { item: "Cedar Peak by Awesome Stay — March 3 (1 night)", cost: "₱1,200 – ₱1,800" },
  { item: "Cedar Peak by Awesome Stay — March 6 (1 night)", cost: "₱1,200 – ₱1,800" },
  { item: "Baguio → Manila (organizer's van, March 7)", cost: "Included with tour" },
  { item: "Makati Diamond Residences — March 7–9 (2 nights, ref: 9455)", cost: "₱15,470" },
  { item: "Taxis / Grab rides (Baguio + Manila)", cost: "₱500 – ₱1,000" },
  { item: "Meals (March 3, 7, 8, 9 — non-trek days)", cost: "₱2,000 – ₱4,000" },
  { item: "Subtotal (excl. flights, Pulag tour fees)", cost: "~₱21,610 – ₱25,310", isTotal: true },
];

// ============================================
// RISKS
// ============================================

export const risks: RiskItem[] = [
  {
    title: "Flight Delay → Missed Bus",
    severity: "medium",
    description: "Buffer between landing (7:45 AM) and the 9:30 AM bus is 1 hour 45 minutes.",
    mitigation: "Book 9:30 AM online in advance. If delayed, next buses are 11:00 AM and 1:00 PM.",
  },
  {
    title: "Bus Sells Out — Only 28 Seats",
    severity: "medium",
    description: "Genesis/JoyBus is the only direct bus from Clark Airport to Baguio. Seats are limited.",
    mitigation: "Book online at iwantseats.com days in advance. Backup: Grab to Dau Terminal.",
  },
  {
    title: "Medical Certificate — Non-Negotiable",
    severity: "high",
    description: "DENR requires a medical certificate from a licensed physician for every hiker. No cert = no climb.",
    mitigation: "Get medical certificates in Cebu before March 3.",
  },
  {
    title: "Akiki Trail Physical Demand",
    severity: "medium",
    description: "Akiki is the \"Killer Trail\" — Difficulty 7/9, 10–11 hours of steep climbing.",
    mitigation: "Full night's sleep in Baguio before trek. Don't overexplore March 3. Sleep by 9:30 PM.",
  },
  {
    title: "Summit Cold — Near Freezing",
    severity: "high",
    description: "Cebu 30°C+ → Pulag summit 2–5°C (recorded lows -8°C). Wind chill makes it worse.",
    mitigation: "Proper layering. NO COTTON. Keep batteries warm in jacket pockets.",
  },
  {
    title: "Rain & Unpredictable Weather",
    severity: "medium",
    description: "March is dry season but Pulag creates its own weather. Akiki is extremely slippery when wet.",
    mitigation: "Waterproof everything. Trekking poles recommended.",
  },
  {
    title: "Weekend Camping Ban at Camp 2",
    severity: "low",
    description: "DENR bans Camp 2 camping Fri–Sun. The Camp 2 night = March 5 (Thursday) = OK.",
    mitigation: "Confirm with tour organizer.",
  },
  {
    title: "Missing 6:20 AM Cebu Flight",
    severity: "high",
    description: "Missing this flight means missing the entire trip.",
    mitigation: "Arrange transport the night before. Alarms at 3:00–3:15 AM. Leave by 3:45–4:00 AM.",
  },
];

// ============================================
// PRE-TRIP CHECKLIST
// ============================================

export const checklistItems: string[] = [
  "Get medical certificates — licensed doctor in Cebu, certifying fitness for strenuous activity",
  "Book seats: 9:30 AM March 3 Clark→Baguio bus — iwantseats.com",
  "Confirm van departure time and pickup point with tour organizer for March 7 return to Manila",
  "Confirm with tour organizer: DENR reservation confirmed? Camp 2 slot March 5 cleared? Pickup point March 4? What gear is provided?",
  "Ask the team: What bus from Manila? Exact meeting/pickup point in Baguio?",
  "Arrange Mactan Airport transport for 4:00 AM on March 3",
  "Confirm drone rules at Mt. Pulag — DENR may restrict drone use in the national park",
  "Charge all batteries — camera (2+), drone, power banks, phones",
  "Format SD cards — camera + drone",
  "Download offline maps — Google Maps / maps.me for Baguio & Benguet area",
];

// ============================================
// GEAR CHECKLIST
// ============================================

export const gearDays: GearDayData[] = [
  {
    title: "Day 1: Trek to Camp 2 (Akiki Trail)",
    subtitle: "Full day hike through pine forest, steep ascent, ~7-9 hours",
    categories: [
      {
        icon: "🧵",
        title: "Clothing",
        items: [
          { text: "Moisture-wicking t-shirt" },
          { text: "Trekking pants (quick-dry, not jeans)" },
          { text: "Mid layer fleece (put on as altitude rises)" },
          { text: "Wind/rain shell jacket (afternoon rain likely)" },
          { text: "Underwear & hiking socks (merino/synthetic)" },
          { text: "Buff / bandana (sun + sweat)" },
          { text: "Hat / cap (sun protection)" },
        ],
      },
      {
        icon: "🦾",
        title: "Footwear & Gear",
        items: [
          { text: "Trekking boots (broken in, ankle support)" },
          { text: "Trekking poles (essential for Akiki's steep sections)" },
          { text: "Backpack (40-50L with rain cover)" },
          { text: "Water bottles (2-3 liters capacity)" },
          { text: "Trail snacks (energy bars, nuts, chocolate)" },
          { text: "Packed lunch" },
          { text: "Electrolyte packets" },
        ],
      },
    ],
  },
  {
    title: "Day 2: Summit Push (2,922m)",
    subtitle: "Pre-dawn start, summit at sunrise, extreme cold (2-5°C), wind chill near 0°C",
    categories: [
      {
        icon: "🧵",
        title: "Clothing",
        items: [
          { text: "Base layer top + bottom (thermal, moisture-wicking)" },
          { text: "Mid layer fleece" },
          { text: "Down / insulated jacket (critical for summit)" },
          { text: "Wind/rain shell (outer layer)" },
          { text: "Trekking pants" },
          { text: "Thermal socks" },
          { text: "Bonnet / beanie" },
          { text: "Buff / balaclava (face protection from wind)" },
          { text: "Gloves (liner + outer pair)" },
        ],
      },
      {
        icon: "📷",
        title: "Camera & Summit Gear",
        items: [
          { text: "Camera + lens (Sony a7C2 + 28-200mm)" },
          { text: "Camera batteries (2-3, keep warm in inner pocket)" },
          { text: "SD cards (formatted, multiple)" },
          { text: "Tripod / mini-pod (for astrophotography)" },
          { text: "Drone + batteries (if allowed by DENR)" },
          { text: "Headlamp + spare batteries (pre-dawn start)" },
          { text: "Sunglasses (bright at altitude)" },
        ],
      },
    ],
  },
  {
    title: "Day 3: Descent via Ambangeg",
    subtitle: "Break camp, descend to Ranger Station, return to Baguio",
    categories: [
      {
        icon: "🧵",
        title: "Clothing",
        items: [
          { text: "Moisture-wicking t-shirt (fresh change)" },
          { text: "Trekking pants" },
          { text: "Mid layer (morning is still cold, shed as descending)" },
          { text: "Rain shell (keep accessible)" },
          { text: "Clean socks" },
          { text: "Camp shoes / sandals (for after the hike)" },
        ],
        fullWidth: true,
      },
    ],
  },
  {
    title: "Camping Gear",
    subtitle: "For Camp 2 overnight (confirm with tour organizer what’s provided)",
    dividerBefore: true,
    categories: [
      {
        icon: "🏕️",
        title: "Shelter & Sleep",
        items: [
          { text: "Sleeping bag (rated for 0-5°C)" },
          { text: "Sleeping pad / mat" },
          { text: "Tent (confirm if provided by tour)" },
          { text: "Pack towel" },
        ],
      },
      {
        icon: "🍲",
        title: "Food & Water",
        items: [
          { text: "Water purification tablets / filter" },
          { text: "Instant coffee / hot chocolate sachets" },
          { text: "Extra trail snacks (for camp evening)" },
          { text: "Reusable utensils" },
        ],
      },
    ],
  },
  {
    title: "Toiletries & Essentials",
    subtitle: "Carry throughout the trek",
    dividerBefore: true,
    categories: [
      {
        icon: "💊",
        title: "Health & Toiletries",
        items: [
          { text: "Medical certificate (required for DENR)" },
          { text: "Valid ID" },
          { text: "Personal first aid kit" },
          { text: "Bonamine / motion sickness meds" },
          { text: "Sunscreen SPF 50+" },
          { text: "Lip balm with SPF" },
          { text: "Toothbrush + toothpaste" },
          { text: "Wet wipes" },
          { text: "Tissue / toilet paper" },
          { text: "Hand sanitizer" },
          { text: "Insect repellent" },
        ],
      },
      {
        icon: "🔥",
        title: "Lights & Misc",
        items: [
          { text: "Headlamp + spare batteries" },
          { text: "Power bank(s)" },
          { text: "Phone charger + cable" },
          { text: "Dry bags / zip-locks (for electronics + clothes)" },
          { text: "Trash bags (leave no trace)" },
          { text: "Whistle (emergency signal)" },
          { text: "Pocket knife / multi-tool" },
          { text: "Cash (small bills for guides, stores)" },
        ],
      },
    ],
  },
];

// ============================================
// PACKING GUIDE (Non-hike days)
// ============================================

export const packingDays: GearDayData[] = [
  {
    title: "Day 1: Cebu → Clark → Baguio",
    subtitle: "Early flight, 4-5 hour bus ride, cool Baguio evening (18-22°C)",
    categories: [
      {
        icon: "👕",
        title: "Outfit",
        items: [
          { text: "Comfortable jeans or travel pants" },
          { text: "T-shirt or casual top" },
          { text: "Hoodie or light jacket (cold plane + Baguio evening)" },
          { text: "Sneakers or walking shoes" },
          { text: "Comfortable socks" },
        ],
      },
      {
        icon: "🛍️",
        title: "Carry-on Essentials",
        items: [
          { text: "Valid ID + boarding pass" },
          { text: "Earphones / earbuds" },
          { text: "Neck pillow (long bus ride)" },
          { text: "Snacks + water" },
          { text: "Power bank + cable" },
          { text: "Light reading / downloaded content" },
        ],
      },
    ],
  },
  {
    title: "Day 5: Baguio City Tour & Van to Manila",
    subtitle: "City tour until ~3 PM, then organizer's van to Manila (15-22°C in Baguio)",
    categories: [
      {
        icon: "👕",
        title: "Outfit",
        items: [
          { text: "Fresh t-shirt or casual top" },
          { text: "Jeans or casual pants" },
          { text: "Light jacket or hoodie (Baguio is cool + bus AC)" },
          { text: "Comfortable walking shoes" },
          { text: "Clean socks & underwear" },
        ],
      },
      {
        icon: "🛍️",
        title: "Day Pack",
        items: [
          { text: "Small daypack / crossbody bag" },
          { text: "Camera (Baguio has great views)" },
          { text: "Sunscreen" },
          { text: "Umbrella or rain jacket" },
          { text: "Neck pillow + eye mask (van ride)" },
          { text: "Light jacket (van AC)" },
        ],
      },
    ],
  },
  {
    title: "Day 6: Manila Exploration",
    subtitle: "Full day in the city, hot and humid (28-34°C), hotel stay at night",
    categories: [
      {
        icon: "👕",
        title: "Outfit",
        items: [
          { text: "Light t-shirt or polo" },
          { text: "Shorts or light pants" },
          { text: "Comfortable walking shoes or sneakers" },
          { text: "Light socks & underwear" },
          { text: "Sleepwear (hotel night)" },
        ],
      },
      {
        icon: "🛍️",
        title: "Day Essentials",
        items: [
          { text: "Sunscreen + hat (Manila sun is intense)" },
          { text: "Umbrella (rain or shade)" },
          { text: "Water bottle" },
          { text: "Small crossbody bag" },
          { text: "Camera" },
          { text: "Cash + cards (some places are cash-only)" },
        ],
      },
    ],
  },
  {
    title: "Day 7: Fly Home",
    subtitle: "Check out from hotel, airport transfer, afternoon flight",
    categories: [
      {
        icon: "👕",
        title: "Outfit & Essentials",
        items: [
          { text: "Comfortable travel outfit (same style as Day 1)" },
          { text: "Hoodie or jacket (airport AC)" },
          { text: "Sneakers" },
          { text: "All chargers and electronics packed" },
          { text: "Check hotel room: nothing left behind" },
          { text: "Boarding pass + valid ID" },
        ],
        fullWidth: true,
      },
    ],
  },
  {
    title: "Packing Tips",
    subtitle: "How to organize for a 7-day trip with a 3-day hike in the middle",
    dividerBefore: true,
    categories: [
      {
        icon: "💼",
        title: "Bag Strategy",
        items: [
          { text: "Main backpack (40-50L) for the hike" },
          { text: "Small duffel or packing cube for city clothes (leave at Baguio hotel or van)" },
          { text: "Daypack for city days" },
          { text: "Dirty clothes bag (plastic or laundry sack)" },
        ],
      },
      {
        icon: "💡",
        title: "Pro Tips",
        items: [
          { text: "Roll clothes to save space and reduce wrinkles" },
          { text: "Wear the bulkiest items on travel days (boots, jacket)" },
          { text: "Keep trek gear separate from city clothes" },
          { text: "Laundry in Baguio: drop off Day 4 evening, pick up Day 5 morning" },
          { text: "Reuse the Day 1 outfit for Day 7 (it stays clean)" },
        ],
      },
    ],
  },
];

// ============================================
// CONTACTS
// ============================================

export const contacts: ContactRow[] = [
  { what: "Genesis Transport (JoyBus)", contact: "Facebook: /GenesisTransportInc" },
  { what: "Genesis Mobile", contact: "+63 999 221 9767" },
  { what: "Clark Garage (Genesis)", contact: "0919-072-2911" },
  { what: "Baguio Terminal (Genesis)", contact: "074-422-7763 / 0933-852-7648" },
  { what: "Online Booking", contact: "iwantseats.com / pinoytravel.com.ph" },
  { what: "Clark Airport Info", contact: "clarkinternationalairport.com" },
  { what: "Clark Airport Trunkline", contact: "+63 (45) 598-3120" },
  { what: "Victory Liner (backup)", contact: "+63 998 591 5102 / Viber: 0917-842-5463" },
  { what: "Dau Terminal Dispatcher", contact: "0918-519-0878" },
];
