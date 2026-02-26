// ============================================================
// Mt. Pulag Akiki Trail — Hour-by-Hour Hike Itinerary Data
// March 4–6, 2026
// ============================================================

// ---- Shared Types ----

export interface HeroData {
  icon: string;
  title: string;
  subtitle: string;
  badges: Array<{ icon: string; text: string }>;
}

export interface NavItem {
  id: string;
  label: string;
}

// ---- Trail Overview ----

export interface TrailSegment {
  num: number;
  from: string;
  to: string;
  time: string;
  startElev: string;
  endElev: string;
  net: string;
  gain: string;
  loss: string;
  character: string;
  isKiller?: boolean;
}

// ---- Elevation Profile ----

export interface ElevStop {
  elev: string;
  icon: string;
  name: string;
  detail: string;
  barWidth?: number; // percentage 0–100
  accentVar: string; // CSS variable name e.g. "--accent-summit"
  isKillerNote?: boolean;
}

// ---- Hike Tables ----

export interface TimeRow {
  time: string;
  activity: string;
  terrain?: string;
  notes?: string;
  rowStyle?: "start" | "arrive" | "camp" | "summit" | "highlight";
}

// ---- Segment info ----

export interface SegmentInfo {
  num: number;
  title: string;
  stats: string;
  accentVar: string;
}

// ---- Clothing / Camera info cards ----

export interface InfoItem {
  label: string;
  text: string;
}

export interface InfoCard {
  label: string;
  intro?: string;
  items: InfoItem[];
  sublabels?: Array<{ label: string; items: InfoItem[] }>;
  tip?: string;
}

// ---- Reminders ----

export interface ReminderItem {
  icon: string;
  title: string;
  body: string;
}

// ---- Summary Table ----

export interface SummaryRow {
  segment: string;
  day: string;
  time: string;
  start: string;
  end: string;
  net: string;
  gain: string;
  loss: string;
  isTotals?: boolean;
}

// ============================================================
// DATA EXPORTS
// ============================================================

export const hikeHero: HeroData = {
  icon: "🏔️",
  title: "Mt. Pulag Akiki Trail",
  subtitle: "Hour-by-Hour Trek Itinerary",
  badges: [
    { icon: "📅", text: "March 4–6, 2026" },
    { icon: "🗺️", text: "Akiki → Summit → Ambangeg" },
    { icon: "💪", text: "Difficulty: 7/9" },
    { icon: "🕐", text: "3 days / 2 nights" },
  ],
};

export const navItems: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "elevation", label: "Elevation" },
  { id: "day1", label: "Day 1" },
  { id: "day2", label: "Day 2" },
  { id: "day3", label: "Day 3" },
  { id: "summary", label: "Summary" },
  { id: "reminders", label: "Reminders" },
];

// ---- Trail Overview Segments ----

export const trailSegments: TrailSegment[] = [
  {
    num: 1,
    from: "Ranger Station",
    to: "Eddet River",
    time: "~2–2.5 hrs",
    startElev: "1,314m",
    endElev: "1,265m",
    net: "−49m",
    gain: "+178m",
    loss: "−227m",
    character: "Downhill through pine forest to river valley — deceptively easy start",
  },
  {
    num: 2,
    from: "Eddet River",
    to: "Marlboro Country",
    time: "~3–4 hrs",
    startElev: "1,265m",
    endElev: "2,170m",
    net: "+905m",
    gain: "+905m",
    loss: "0m",
    character: "THE KILLER SECTION — relentless steep pine forest climb",
    isKiller: true,
  },
  {
    num: 3,
    from: "Marlboro Country",
    to: "Mossy Forest",
    time: "~1.5–2 hrs",
    startElev: "2,170m",
    endElev: "2,389m",
    net: "+219m",
    gain: "+219m",
    loss: "0m",
    character: "Rolling terrain transitioning into dense mossy forest",
  },
  {
    num: 4,
    from: "Mossy Forest",
    to: "Grassland",
    time: "~2–3 hrs",
    startElev: "2,389m",
    endElev: "2,584m",
    net: "+195m",
    gain: "+195m",
    loss: "0m",
    character: "Muddy root-tangled cloud forest, opens to grasslands",
  },
  {
    num: 5,
    from: "Grassland",
    to: "Saddle Camp",
    time: "~1 hr",
    startElev: "2,584m",
    endElev: "2,815m",
    net: "+231m",
    gain: "+287m",
    loss: "−56m",
    character: "Beautiful open grassland ridges",
  },
  {
    num: 6,
    from: "Saddle Camp",
    to: "Summit",
    time: "~15–30 min",
    startElev: "2,815m",
    endElev: "2,922m",
    net: "+107m",
    gain: "+71m",
    loss: "0m",
    character: "Quick final assault to Luzon's highest point",
  },
  {
    num: 7,
    from: "Summit",
    to: "Babadak (Ambangeg)",
    time: "~3.5–4 hrs",
    startElev: "2,886m",
    endElev: "2,316m",
    net: "−571m",
    gain: "+101m",
    loss: "−671m",
    character: "Gradual descent via the easy Ambangeg trail",
  },
];

// ---- Elevation Profile Stops ----

export const elevStops: ElevStop[] = [
  {
    elev: "2,922m",
    icon: "★",
    name: "Summit",
    detail: "+71m from Saddle Camp (15–30 min)",
    barWidth: 100,
    accentVar: "--accent-summit",
  },
  {
    elev: "2,815m",
    icon: "🏕️",
    name: "Saddle Camp",
    detail: "Night 2 · COLDEST: 2–5°C, possible −8°C · Full layers + down + gloves + bonnet",
    barWidth: 93,
    accentVar: "--accent-trail",
  },
  {
    elev: "2,584m",
    icon: "🌾",
    name: "Grassland",
    detail: "+195m from Mossy Forest (1 hr) · Wind shell on",
    barWidth: 80,
    accentVar: "--accent-pine",
  },
  {
    elev: "2,389m",
    icon: "🌿",
    name: "Mossy Forest",
    detail: "+219m from Marlboro (2–3 hrs) · Mid layer + shell",
    barWidth: 68,
    accentVar: "--accent-frost",
  },
  {
    elev: "2,170m",
    icon: "🏕️",
    name: "Marlboro Country",
    detail: "Night 1 · 5–12°C · Base layer + fleece + jacket for sleep",
    barWidth: 55,
    accentVar: "--accent-trail",
  },
  {
    elev: "—",
    icon: "🔥",
    name: "905m gain, ZERO descent",
    detail: "3–4 hrs · Strip to t-shirt",
    accentVar: "--accent-ridge",
    isKillerNote: true,
  },
  {
    elev: "1,265m",
    icon: "🏞️",
    name: "Eddet River",
    detail: "Lunch stop · T-shirt weather on the climb",
    barWidth: 25,
    accentVar: "--accent-frost",
  },
  {
    elev: "1,314m",
    icon: "🥾",
    name: "Akiki Ranger Station",
    detail: "START · Light layers, pack the fleece",
    barWidth: 27,
    accentVar: "--accent-campfire",
  },
];

// ============================================================
// DAY 1 DATA
// ============================================================

// Pre-Trek: Wake up & depart
export const day1PreTrekRows: TimeRow[] = [
  { time: "4:00 AM", activity: "Wake up in Baguio", notes: "Both set multiple alarms" },
  { time: "4:15 AM", activity: "Final gear check, freshen up", notes: "Everything packed night before" },
  { time: "4:30 AM", activity: "Head to meeting point", notes: "Taxi or walk, depending on pickup location" },
  { time: "~5:00 AM", activity: "🤝 Meet Manila team", notes: "They arrive after overnight bus from Manila" },
  { time: "5:00–5:30 AM", activity: "Load up, last supply run", notes: "Buy any last-minute food/water if needed" },
  { time: "5:30 AM", activity: "🚐 Depart Baguio for Mt. Pulag", notes: "Via monster jeep or van — rough road" },
];

// Travel: Baguio to Akiki Ranger Station
export const day1TravelRows: TimeRow[] = [
  {
    time: "5:30–7:30 AM",
    activity: "Drive to DENR Office (Ambangeg)",
    notes: "~2 hours, winding mountain roads. Take Bonamine before departure if prone to motion sickness",
  },
  {
    time: "7:30–8:30 AM",
    activity: "DENR registration & orientation",
    notes: "Present medical certificates + IDs (both!). Pay fees, attend mandatory briefing",
  },
  {
    time: "8:30–9:00 AM",
    activity: "Transfer to Akiki Ranger Station",
    notes: "Short jeep ride to the Akiki jump-off point in Kabayan",
  },
  {
    time: "~9:00 AM",
    activity: "Register at Akiki Ranger Station",
    notes: "Meet your assigned trail guide",
  },
];

// Segment 1: Akiki → Eddet River
export const seg1Info: SegmentInfo = {
  num: 1,
  title: "📍 Akiki Ranger Station → Eddet River",
  stats: "1,314m → 1,265m | Net: −49m | ↑ +178m / ↓ −227m | ~2–2.5 hrs",
  accentVar: "--accent-pine",
};

export const seg1ClothingCard: InfoCard = {
  label: "👕 What to Wear — Segment 1",
  intro: "It's ~9AM and already warming up. You're about to descend and will heat up fast.",
  items: [
    { label: "Top", text: "Moisture-wicking t-shirt or light long-sleeve (no fleece — you'll be too hot)" },
    { label: "Bottom", text: "Trekking pants or shorts" },
    { label: "Feet", text: "Trekking boots + liner socks — trail is rocky and loose on the descent" },
    { label: "Pack away", text: "Fleece, jacket — you won't need them until Eddet River or the climb" },
    { label: "Sun protection", text: "Hat + sunscreen — pine canopy is open in sections" },
  ],
  tip: "Don't start in too many layers. You'll regret it by the time you reach the river.",
};

export const seg1CameraCard: InfoCard = {
  label: "📷 Camera — Segment 1",
  items: [
    {
      label: "Duacan Primary School (~1,409m)",
      text: "Just 10–15 min from the ranger station. Remote mountain school framed by pine trees. Great establishing shot. 28mm wide end.",
    },
    {
      label: "Halsema Highway Viewpoint (~1,431m)",
      text: "Clearing with views back toward Halsema Highway cutting through mountain slopes — the highest national road in the Philippines at ~2,500m. Telephoto (100–200mm) to compress the road against the ridgelines.",
    },
    {
      label: "Eddet River (1,265m)",
      text: "Shoot the river itself before lunch. Water, rocks, pine forest backdrop. Also good for environmental portraits of your partner at the crossing.",
    },
  ],
};

export const seg1TrekRows: TimeRow[] = [
  {
    time: "~9:00–9:30 AM",
    activity: "🥾 START TREK from Akiki Ranger Station (1,314m)",
    terrain: "Pine forest, mild terrain",
    notes: "Start slow, find your pace. Don't rush.",
    rowStyle: "start",
  },
  {
    time: "9:30–10:00 AM",
    activity: "Descend through pine forest toward Eddet River valley",
    terrain: "Downhill, rocky path",
    notes: "Trekking poles help on loose ground.",
  },
  {
    time: "10:00–10:30 AM",
    activity: "Continue descent",
    terrain: "Steeper downhill sections",
    notes: "Watch your footing. Knees take a beating going down with a heavy pack.",
  },
  {
    time: "10:30–11:00 AM",
    activity: "Approach Eddet River",
    terrain: "Trail levels out near the river",
    notes: "You'll hear the river before you see it.",
  },
  {
    time: "~11:00–11:30 AM",
    activity: "🏞️ ARRIVE EDDET RIVER (1,265m)",
    terrain: "River valley, flat campsite area",
    rowStyle: "arrive",
  },
];

// Eddet River rest stop
export const eddetRiverRestRows: TimeRow[] = [
  {
    time: "11:30 AM–12:00 PM",
    activity: "REST & LUNCH at Eddet River",
    notes: "Proper campsite with flat ground and a bunkhouse",
  },
  { time: "", activity: "Refill water bottles from the river", notes: "Use purification tablets or filter" },
  { time: "", activity: "Eat a solid meal — you need the fuel", notes: "Trail mix, energy bars, packed lunch" },
  { time: "", activity: "Wash up / cool down", notes: "Last easy water access on the trail" },
];

// Segment 2: Eddet River → Marlboro Country
export const seg2Info: SegmentInfo = {
  num: 2,
  title: "📍 Eddet River → Marlboro Country — THE KILLER SECTION",
  stats: "1,265m → 2,170m | Net: +905m | ↑ +905m / ↓ 0m | ~3.5–4 hrs\n905m of relentless elevation gain. No flat sections. The GPX confirms: literally zero descent.",
  accentVar: "--accent-ridge",
};

export const seg2ClothingCard: InfoCard = {
  label: "👕 What to Wear — Segment 2 (The Killer Section)",
  intro:
    "You are about to sweat more than you've ever sweat on a trail. Dress for heat output, not ambient temperature.",
  items: [
    {
      label: "Top",
      text: "Single moisture-wicking t-shirt only — if you start in a long sleeve you'll be peeling it off within 20 minutes",
    },
    {
      label: "Bottom",
      text: "Trekking pants — loose soil and exposed roots; shorts fine if the heat is intense",
    },
    { label: "Feet", text: "Same boots — the trail gets steeper and grip matters more now" },
    { label: "Pack away", text: "Everything. Jacket, fleece, all of it deep in your bag" },
    { label: "Sun", text: "Hat is useful — pine canopy thins as you gain altitude in the upper half" },
    { label: "Hands", text: "Trekking poles — this is where you'll use them most" },
  ],
  tip: "The golden rule: if you're not slightly cold at the start of the climb, you're overdressed.",
};

export const seg2CameraCard: InfoCard = {
  label: "📷 Camera — Segment 2",
  intro: "You will be exhausted here. Keep the camera accessible but don't stop for long.",
  items: [
    {
      label: "Ibaloi Burial Sites (~1,853m)",
      text: "Ancient wooden coffins embedded in the cliff face mid-trail. Your guide will point these out. This is a once-in-a-trip shot — slow down and take it. Respect the site. No flash.",
    },
    {
      label: "Pine canopy looking up (~1,600–1,800m)",
      text: "During one of your rest stops, shoot upward through the pine crowns. Backlit needles and branches against the sky. 28mm wide.",
    },
    {
      label: "The moment the pines thin (~2,000m+)",
      text: "When the forest starts breaking and the ridge opens, turn around. You'll see the valley and Halsema below you. First real scale-of-climb shot.",
    },
  ],
  tip: "Keep your a7C2 on a chest harness or front of pack strap so you can grab it at rest stops without dropping your bag.",
};

export const seg2TrekRows: TimeRow[] = [
  {
    time: "~12:00 PM",
    activity: "🥾 Resume trek — begin the killer climb",
    terrain: "Immediately steep",
    notes: "Set a sustainable pace. This section breaks people who start too fast.",
    rowStyle: "start",
  },
  {
    time: "12:00–1:00 PM",
    activity: "Steep pine forest ascent",
    terrain: "Very steep, exposed roots, loose soil",
    notes: "10–15 min hiking, 2–3 min rest. Repeat. Hydrate every stop.",
  },
  {
    time: "~1:00 PM",
    activity: "Short trail break",
    terrain: "Find shade",
    notes: "Snack, water, catch breath. Check on each other.",
  },
  {
    time: "1:00–2:00 PM",
    activity: "Continue steep ascent (~1,500–1,750m)",
    terrain: "Relentless uphill",
    notes: "You'll pass indigenous burial sites — respect these.",
  },
  {
    time: "~2:00 PM",
    activity: "Mid-climb break (~1,750m)",
    terrain: "Slight clearing",
    notes: "Energy bar, chocolate, banana. You're burning serious calories.",
  },
  {
    time: "2:00–3:00 PM",
    activity: "Upper slopes (~1,750–2,000m)",
    terrain: "Still steep but occasional flat patches",
    notes: "Pine trees start thinning. Mental game now.",
  },
  {
    time: "3:00–3:30 PM",
    activity: "Final push (~2,000–2,170m)",
    terrain: "Trail opens up",
    notes: "When you see the brown rolling hills — you're through the worst.",
  },
  {
    time: "~3:30–4:00 PM",
    activity: "🏕️ ARRIVE MARLBORO COUNTRY (2,170m)",
    terrain: "Open brown hillside, wide views",
    rowStyle: "camp",
  },
];

// Camp 1: Marlboro Country overnight
export const camp1ClothingCard: InfoCard = {
  label: "👕 What to Wear — Marlboro Country Camp (2,170m · 5–12°C overnight)",
  intro:
    "You are soaked in sweat. The temperature will drop sharply after sunset. Change everything immediately on arrival — this is not optional.",
  sublabels: [
    {
      label: "On arrival (4:00–5:00 PM):",
      items: [
        { label: "", text: "Strip and dry off with your pack towel" },
        { label: "", text: "Change into completely dry base layer top + bottom (this is your sleep layer)" },
        { label: "", text: "Add mid layer fleece over base layer" },
        { label: "", text: "Add down jacket or insulated jacket on top" },
        { label: "", text: "Dry socks + camp shoes or extra socks" },
        { label: "", text: "Bonnet on once the sun drops" },
      ],
    },
    {
      label: "For sleeping:",
      items: [
        {
          label: "",
          text: "Yes — sleep in your base layer. At 5–12°C inside a tent, base layers are essential. Your sleeping bag rating alone won't be enough without a thermal base layer underneath.",
        },
        {
          label: "",
          text: "Base layer top + bottom → mid layer fleece → sleeping bag → down jacket draped on top if needed",
        },
        { label: "", text: "Bonnet and gloves on in the bag — you lose heat from your extremities fast" },
        {
          label: "",
          text: "Camera batteries and phone batteries inside your sleeping bag or jacket pocket overnight",
        },
      ],
    },
  ],
  items: [],
  tip: "Do not sleep in the clothes you hiked in. Damp clothing against your skin at 5°C will wake you up cold at 2AM.",
};

export const camp1CameraCard: InfoCard = {
  label: "📷 Camera — Marlboro Country (Golden Hour + Night)",
  sublabels: [
    {
      label: "Golden Hour (5:00–5:30 PM) — highest priority shoot of Day 1:",
      items: [
        { label: "", text: "Position yourself on the western-facing ridge just above camp before 5PM" },
        {
          label: "",
          text: "The pine-covered slopes below catch warm orange light — shoot wide (28mm) for the landscape, zoom in (100–200mm) to compress ridgelines",
        },
        { label: "", text: "Silhouette your partner against the golden sky on the ridge" },
        { label: "", text: "Shoot the camp itself — tents in the foreground, Cordillera ridges behind" },
      ],
    },
    {
      label: "Milky Way / Night Sky (7:30 PM onwards):",
      items: [
        {
          label: "",
          text: "Marlboro Country at 2,170m with zero light pollution is exceptional for astrophotography",
        },
        {
          label: "",
          text: "Sony a7C2 settings: f/2.8 (widest aperture), ISO 3200–6400, 20–25 sec exposure",
        },
        {
          label: "",
          text: "Foreground: use a tent with a headlamp inside as your light source — warm tent glow + Milky Way arc is the shot",
        },
        {
          label: "",
          text: "Keep your batteries warm — cold kills battery life fast. Swap in a warm battery from your jacket pocket right before shooting",
        },
      ],
    },
  ],
  items: [],
};

export const camp1EveningRows: TimeRow[] = [
  { time: "4:00–4:30 PM", activity: "Set up camp", notes: "Pitch tents, organize sleeping area" },
  {
    time: "4:30–5:00 PM",
    activity: "Change into dry clothes immediately",
    notes: "Wet clothes + cold night = hypothermia risk",
  },
  {
    time: "5:00–5:30 PM",
    activity: "🌅 Sunset + Golden Hour at Marlboro Country",
    notes: "📷 Camera time — see photo notes above",
    rowStyle: "highlight",
  },
  {
    time: "5:30–6:30 PM",
    activity: "Dinner",
    notes: "Prepared by porter/guide or cook your own",
  },
  { time: "6:30–7:00 PM", activity: "Hot drinks, socials with the group", notes: "Coffee, hot chocolate" },
  { time: "7:00–7:30 PM", activity: "Prepare for bed", notes: "Batteries into sleeping bag now" },
  {
    time: "7:30 PM onwards",
    activity: "📷 Milky Way window (if clear skies)",
    notes: "See photo notes above",
    rowStyle: "highlight",
  },
  { time: "8:00 PM", activity: "💤 Lights out", notes: "Sleep as much as you can" },
];

// ============================================================
// DAY 2 DATA
// ============================================================

// Segment 3: Marlboro Country → Mossy Forest
export const seg3Info: SegmentInfo = {
  num: 3,
  title: "📍 Marlboro Country → Mossy Forest",
  stats: "2,170m → 2,389m | Net: +219m | ↑ +219m / ↓ 0m | ~1.5–2 hrs",
  accentVar: "--accent-frost",
};

export const seg3ClothingCard: InfoCard = {
  label: "👕 What to Wear — Segment 3",
  intro:
    "Cool morning start (~5–8°C). You're climbing at a moderate gradient — you'll warm up but not as violently as yesterday.",
  items: [
    {
      label: "Start of trek",
      text: "Base layer + mid layer fleece. Keep the jacket on for the first 20 minutes until you warm up, then shed it into your pack.",
    },
    {
      label: "Bottom",
      text: "Trekking pants — morning dew on vegetation will wet your legs through shorts",
    },
    { label: "Hands", text: "Light liner gloves at the start — your hands will be cold until the sun hits" },
    { label: "Head", text: "Buff or light beanie until you're moving well" },
  ],
  tip: "You'll naturally regulate — start slightly overdressed and peel back one layer once the pace is up.",
};

export const seg3CameraCard: InfoCard = {
  label: "📷 Camera — Segment 3",
  items: [
    {
      label: "Marlboro Country at dawn (6:00–6:30 AM)",
      text: "Before you leave camp, shoot the morning light on the hills. Different mood from yesterday's golden hour — cooler, bluer, misty. Tents in foreground with ridges behind.",
    },
    {
      label: "Pine-to-mossy forest transition (~2,300m)",
      text: "The moment the pines give way to the first moss-covered trees is visually striking. The shift happens gradually then suddenly. Look for the first heavily moss-draped branches.",
    },
  ],
};

export const seg3TrekRows: TimeRow[] = [
  { time: "5:00–5:30 AM", activity: "Wake up + breakfast", terrain: "Cold morning", notes: "Eat well — big day ahead" },
  {
    time: "5:30–6:00 AM",
    activity: "Break camp",
    terrain: "Pack everything, leave no trace",
    notes: "Roll sleeping bag while still warm",
  },
  {
    time: "6:00–6:30 AM",
    activity: "📷 Morning light at Marlboro Country",
    terrain: "Golden morning views",
    notes: "Quick shoot before departure",
    rowStyle: "highlight",
  },
  {
    time: "~6:30 AM",
    activity: "🥾 Resume trek toward Mossy Forest",
    terrain: "Rolling terrain, moderate incline",
    notes: "Fresh legs, cool morning",
    rowStyle: "start",
  },
  {
    time: "6:30–7:30 AM",
    activity: "Transition zone — pine to mossy forest (~2,170–2,300m)",
    terrain: "Trail enters denser vegetation",
    notes: "Temperature drops as you enter the canopy",
  },
  {
    time: "7:30–8:00 AM",
    activity: "Short break at mossy forest edge (~2,350m)",
    terrain: "Lush, green",
  },
  {
    time: "~8:00 AM",
    activity: "🌿 ENTER MOSSY FOREST (2,389m)",
    terrain: "Dense cloud forest, moss-covered trees",
    rowStyle: "arrive",
  },
];

// Segment 4: Mossy Forest → Grassland
export const seg4Info: SegmentInfo = {
  num: 4,
  title: "📍 Mossy Forest → Grassland",
  stats: "2,389m → 2,584m | Net: +195m | ↑ +195m / ↓ 0m | ~2–2.5 hrs",
  accentVar: "--accent-pine",
};

export const seg4ClothingCard: InfoCard = {
  label: "👕 What to Wear — Segment 4 (Mossy Forest)",
  intro:
    "The mossy forest is cold, damp, and dark under the canopy. You're not climbing steeply but the technical footing keeps your effort moderate.",
  items: [
    {
      label: "Keep your mid layer on",
      text: "You won't sweat heavily enough to justify stripping down here",
    },
    {
      label: "Add a light wind/rain shell over your fleece",
      text: "The canopy drips constantly and everything is wet. Keeps your mid layer dry for when you emerge into exposed grassland",
    },
    { label: "Gaiters", text: "Mud and wet roots will spray up your lower legs" },
    {
      label: "Trekking poles essential",
      text: "Slippery roots, uneven ground. Both hands on poles.",
    },
    { label: "Gloves", text: "Optional but your hands will be cold grabbing wet vegetation" },
  ],
  tip: "The temptation is to stay warm and keep moving without stopping. Resist — the mossy forest is one of the best shooting environments on the whole trail.",
};

export const seg4CameraCard: InfoCard = {
  label: "📷 Camera — Segment 4 (Mossy Forest) — Don't Rush This Section",
  intro:
    "This is the most visually unique zone on the entire trail. Otherworldly and difficult to capture well — take your time.",
  items: [
    {
      label: "Moss-covered tree trunks",
      text: "Get close. Fill the frame with texture. The a7C2 at 28mm minimum focus distance works well here. Look for hanging moss with backlight filtering through the canopy.",
    },
    {
      label: "Root systems",
      text: "The root tangles covering the trail are extraordinary abstract subjects. Shoot down from standing height or get low.",
    },
    {
      label: "Fog and depth",
      text: "If there's cloud in the forest (very likely in March), shoot along the trail looking into the mist. A figure (your partner) mid-trail at 30–40m gives scale and depth.",
    },
    {
      label: "Dwarf bamboo transition",
      text: "When bamboo starts appearing alongside the mossy trees, you're nearing the exit. Shoot the mixed vegetation before you lose it.",
    },
  ],
  tip: "The a7C2's IBIS is very helpful here for handheld in low light under the canopy. Stay on Auto ISO with a minimum 1/60 shutter floor.",
};

export const seg4TrekRows: TimeRow[] = [
  {
    time: "8:00–9:00 AM",
    activity: "Trek through mossy forest",
    terrain: "Muddy, root-tangled",
    notes: "Every step deliberate. Trekking poles mandatory.",
  },
  {
    time: "9:00–9:30 AM",
    activity: "Rest break (~2,450m)",
    notes: "Technically demanding even without steep gradient",
  },
  {
    time: "9:30–10:30 AM",
    activity: "Continue through mossy forest, approaching dwarf bamboo zone (~2,500m)",
    terrain: "Gradually opening up",
    notes: "Trees getting shorter — you're nearing grassland",
  },
  {
    time: "~10:30–11:00 AM",
    activity: "🌾 EMERGE INTO GRASSLAND (2,584m)",
    terrain: "Open, windswept grass ridges",
    notes: "Views open up suddenly. You can see the summit!",
    rowStyle: "arrive",
  },
];

// Segment 5: Grassland → Saddle Camp
export const seg5Info: SegmentInfo = {
  num: 5,
  title: "📍 Grassland → Saddle Camp",
  stats: "2,584m → 2,815m | Net: +231m | ↑ +287m / ↓ −56m | ~1 hr\nNote: the GPX shows a −56m dip — there's a rolling descent on the ridge before the final push to Saddle Camp.",
  accentVar: "--accent-pine",
};

export const seg5ClothingCard: InfoCard = {
  label: "👕 What to Wear — Segment 5 (Grassland)",
  intro:
    "You have just walked out of a sheltered forest into fully exposed, windswept open ridge at 2,584m. This is the biggest temperature shock on the trail.",
  items: [
    {
      label: "Put your wind/shell jacket on immediately",
      text: "The grassland is exposed and wind can be brutal. Don't wait until you're already cold.",
    },
    {
      label: "Buff or balaclava over your face",
      text: "At this altitude with wind, exposed skin loses heat fast",
    },
    { label: "Gloves on", text: "Fingers will go numb in wind at this elevation without them" },
    { label: "Sunglasses", text: "UV intensity is high above 2,500m, and wind will dry your eyes" },
    { label: "Bottom", text: "Trekking pants — wind penetrates shorts at this altitude" },
  ],
  tip: "Layer up immediately at the grassland entry. It takes 5 minutes to get cold and 20 minutes to warm back up if you leave it too late.",
};

export const seg5CameraCard: InfoCard = {
  label: "📷 Camera — Segment 5 (Grassland) — Peak Photo Territory",
  intro: "This is the iconic Mt. Pulag shot. If you get one great image from this trip, it will probably be here.",
  items: [
    {
      label: "Sea of Clouds Viewpoint (~2,750m)",
      text: "Marked on your Garmin GPX. The valleys fill with cloud while the summit rises above. Shoot wide (28mm) with rolling dwarf bamboo ridges in the foreground. If you see the sea of clouds, stop and shoot immediately — it can close in or dissipate within minutes.",
    },
    {
      label: "Summit visible from grassland",
      text: "70–200mm telephoto compression with the grassy foreground and summit ridge behind. Extraordinary scale.",
    },
    {
      label: "Your partner in the landscape",
      text: "At this scale, a human figure gives the grassland its true size. Shoot them walking away from you toward the summit.",
    },
    {
      label: "Wind-bent bamboo",
      text: "Shoot into the wind at ground level. The dwarf bamboo bending in the same direction across the ridge is a strong compositional element.",
    },
  ],
  tip: "Wind tip: the a7C2's shutter speed needs to be up — at least 1/500 to freeze wind-blown vegetation. Don't shoot too slow.",
};

export const seg5TrekRows: TimeRow[] = [
  {
    time: "11:00 AM–12:00 PM",
    activity: "Trek across grassland toward Saddle Camp (~2,584–2,815m)",
    terrain: "Gentle rolling hills, some ups and downs",
    notes: "Exposed — wind can be strong. Layer up immediately. 📷 Peak photo territory.",
  },
  {
    time: "~12:00–12:30 PM",
    activity: "🏕️ ARRIVE SADDLE CAMP (2,815m)",
    terrain: "Flat campsite just below the summit",
    rowStyle: "camp",
  },
];

// Segment 6: Saddle Camp → Summit (Afternoon)
export const seg6Info: SegmentInfo = {
  num: 6,
  title: "📍 Saddle Camp → Summit (Afternoon)",
  stats: "2,815m → 2,922m | Net: +107m | ↑ +71m / ↓ 0m | ~15–30 min",
  accentVar: "--accent-summit",
};

export const seg6ClothingCard: InfoCard = {
  label: "👕 What to Wear — Summit Assault (Afternoon, ~2:30 PM)",
  intro: "Light and warm. You're leaving your heavy gear at camp.",
  items: [
    {
      label: "Base layer + mid layer fleece + wind/shell jacket",
      text: "Summit wind is unpredictable and can be strong",
    },
    {
      label: "Buff/balaclava",
      text: "Bring it even if it's not cold yet. On the exposed summit ridge, temperature and wind can change in minutes.",
    },
    { label: "Gloves", text: "Summit standard. Pack them even if your hands are warm on the way up." },
    { label: "Light trekking pants", text: "" },
    {
      label: "Leave in camp",
      text: "Down jacket (keep it for the return when you stop moving), sleeping bag, heavy gear",
    },
  ],
};

export const seg6CameraCard: InfoCard = {
  label: "📷 Camera — Summit (Afternoon)",
  items: [
    {
      label: "Summit marker + wide landscape",
      text: "First priority on arrival. 28mm, shoot the marker with the cloud sea behind. You've earned this shot.",
    },
    {
      label: "360° panorama",
      text: "The summit ridge allows a full panorama. Shoot a 5–7 frame sequence at 28mm for stitching later in Lightroom.",
    },
    {
      label: "Cloud dynamics",
      text: "Afternoon clouds build and shift fast at 2,922m. Shoot continuously during movement — dramatic timelapse potential.",
    },
    {
      label: "🚁 Drone",
      text: "If DENR/guide confirms allowed, this is the primary drone moment. Afternoon light, full cloud sea below, summit ridge visible. Get the drone up fast — wind can close the window.",
    },
    {
      label: "Sunset (optional, ~4:30–5:00 PM)",
      text: "If you stay, position yourself on the western edge of the summit. Silhouette of your partner against the sunset sky on the summit is the hero shot of the trip.",
    },
  ],
};

export const seg6SummitRows: TimeRow[] = [
  {
    time: "12:30–1:30 PM",
    activity: "Set up camp at Saddle Camp (2,815m)",
    notes: "Secure tents well — wind can be fierce",
  },
  { time: "1:30–2:30 PM", activity: "Lunch and rest", notes: "Eat, hydrate, recover" },
  {
    time: "~2:30–3:00 PM",
    activity: "🥾 SUMMIT ASSAULT",
    notes: "Light pack: camera, water, jacket, phone only",
    rowStyle: "start",
  },
  { time: "~3:00–3:15 PM", activity: "🏔️ SUMMIT! 2,922 MASL", rowStyle: "summit" },
  {
    time: "3:15–4:30 PM",
    activity: "📷 Summit shoot + explore",
    notes: "See photo notes above",
    rowStyle: "highlight",
  },
  {
    time: "~4:30–5:00 PM",
    activity: "🌅 Sunset from the summit (optional)",
    notes: "15 min back to camp — can stay late",
    rowStyle: "highlight",
  },
  { time: "5:00–5:15 PM", activity: "Descend back to Saddle Camp" },
];

// Saddle Camp Evening (Camp 2)
export const camp2ClothingCard: InfoCard = {
  label: "👕 What to Wear — Saddle Camp Night (2,815m · 2–5°C · Possible −8°C)",
  intro:
    "This is the coldest night of the trip. The GPX puts you at 2,815m — recorded lows here reach −8°C in cold snaps.",
  sublabels: [
    {
      label: "Change immediately on return from summit:",
      items: [
        { label: "", text: "Strip all sweat-damp layers off entirely" },
        { label: "", text: "Full dry base layer top + bottom (non-negotiable at this altitude)" },
        { label: "", text: "Mid layer fleece" },
        { label: "", text: "Down jacket" },
        { label: "", text: "Thick wool or fleece socks" },
        { label: "", text: "Bonnet" },
      ],
    },
    {
      label: "For sleeping:",
      items: [
        { label: "", text: "Everything listed above stays on inside the sleeping bag" },
        { label: "", text: "Add gloves and balaclava/buff over your face" },
        {
          label: "",
          text: "If your sleeping bag has a hood, cinch it tight — only your face exposed",
        },
        {
          label: "",
          text: "Down jacket can go over the sleeping bag as an extra blanket if needed",
        },
        {
          label: "",
          text: "Batteries (camera, drone, phone, Garmin) all inside the sleeping bag or jacket pocket against your body",
        },
      ],
    },
  ],
  items: [],
  tip: "If you wake up at 2AM shivering, add more layers immediately — don't wait it out. Broken sleep at altitude sets you up for a bad summit morning.",
};

export const camp2CameraCard: InfoCard = {
  label: "📷 Camera — Saddle Camp Night",
  items: [
    {
      label: "Star field / Milky Way",
      text: "At 2,815m, this is your best astrophotography window. Zero light pollution, high altitude = thinner atmosphere = more stars.",
    },
    {
      label: "Settings starting point",
      text: "28mm, f/2.8 (widest), ISO 6400–12800, 15–20 sec (500 rule: 500÷28mm = ~17 sec max before star trails)",
    },
    {
      label: "Foreground",
      text: "Tents with headlamp glow inside, summit silhouette, or your partner standing with a headlamp pointed up",
    },
    {
      label: "Swap in a warm battery right before shooting",
      text: "Cold kills battery life at this temperature. Keep one battery in your jacket inner pocket all evening.",
    },
    {
      label: "Pre-dawn setup",
      text: "Set your camera settings the night before so you're not fumbling in the dark at −5°C",
    },
  ],
};

export const camp2EveningRows: TimeRow[] = [
  {
    time: "5:15–6:00 PM",
    activity: "Change into completely dry layers",
    notes: "See clothing notes above — do this first",
  },
  { time: "6:00–7:00 PM", activity: "Dinner", notes: "Eat everything. You need the calories." },
  {
    time: "7:00–7:30 PM",
    activity: "Prepare for pre-dawn summit",
    notes: "Set alarm 3:30–4:00 AM. Headlamp ready. All batteries in sleeping bag.",
  },
  {
    time: "7:30–8:00 PM",
    activity: "📷 Milky Way window",
    notes: "See photo notes above",
    rowStyle: "highlight",
  },
  {
    time: "8:00 PM",
    activity: "💤 Lights out",
    notes: "Everything on. Cinch your sleeping bag hood.",
  },
];

// Pre-Dawn Summit Return
export const preDawnClothingCard: InfoCard = {
  label: "👕 What to Wear — Pre-Dawn Summit (~3:30–4:15 AM)",
  intro: "The coldest moment of the entire trip. It will be dark, windy, and potentially below 0°C.",
  items: [
    {
      label: "Everything you own, in this order",
      text: "Dry base layer top + bottom → mid layer fleece → down jacket → wind/shell jacket on top",
    },
    { label: "Hands", text: "Liner gloves + thicker outer gloves or mittens over them" },
    { label: "Head", text: "Balaclava or buff covering your face + bonnet on top" },
    { label: "Neck", text: "Buff if you have a second one" },
    { label: "Feet", text: "Thermal sock liner + thick trekking sock in your boots" },
    { label: "Headlamp", text: "On and tested. Spare batteries in jacket pocket." },
  ],
  tip: "You will feel overdressed once you start moving. That's correct. The summit is exposed and you'll stop moving when you reach the top to shoot — you need that buffer.",
};

export const preDawnCameraCard: InfoCard = {
  label: "📷 Camera — Sunrise at Summit (THE Shot)",
  intro: "This is what you came for. Plan this like a shoot, not a hike.",
  items: [
    {
      label: "Arrive 30–45 min before sunrise",
      text: "(~4:30–4:45 AM). Use the dark time to find your position and compose.",
    },
    {
      label: "Blue hour (pre-dawn)",
      text: "Shoot the horizon gradient — deep blue sky to orange on the horizon, with the dark mountain silhouette. This light is often better than direct sunrise.",
    },
    {
      label: "The sea of clouds",
      text: "When the sun hits the clouds below the summit, they light up gold and pink from above. This is the iconic shot. Shoot wide (28mm) to capture the full scale, then zoom in (200mm) to isolate cloud textures.",
    },
    {
      label: "Your partner silhouette against the sunrise",
      text: "Position them on the edge of the summit ridge backlit by the rising sun. Classic, earned, powerful image.",
    },
    {
      label: "Shoot in bursts",
      text: "The clouds move fast at sunrise. Don't shoot a single frame — bracket exposures and shoot sequences.",
    },
    {
      label: "Stay after sunrise",
      text: "Golden hour light at 2,922m lasts 20–30 minutes. The grassland ridges in morning light on the descent back to Saddle Camp are also extraordinary.",
    },
    {
      label: "🚁 Drone at sunrise",
      text: "If conditions allow (check wind before launching), dawn at the summit is the definitive drone moment. Launch just as the light hits, before wind builds.",
    },
  ],
};

export const preDawnSummitRows: TimeRow[] = [
  { time: "3:30–4:00 AM", activity: "Wake up", notes: "Force yourself up. Full gear on." },
  {
    time: "4:00–4:15 AM",
    activity: "Hot drink, layer up completely",
    notes: "Swap warm camera battery from sleeping bag",
  },
  {
    time: "~4:15 AM",
    activity: "🥾 Summit assault in the dark",
    notes: "Headlamp on. 15–30 min climb.",
    rowStyle: "start",
  },
  {
    time: "~4:30–4:45 AM",
    activity: "Arrive at summit — compose and wait",
    notes: "Find your spot. Set up.",
  },
  {
    time: "~5:15–5:45 AM",
    activity: "🌅 SUNRISE AT MT. PULAG SUMMIT (2,922 MASL)",
    notes: "📷 See photo notes above",
    rowStyle: "summit",
  },
  {
    time: "~6:00–6:30 AM",
    activity: "Head back to Saddle Camp",
    notes: "Shoot the grassland morning light on the way down",
  },
];

// ============================================================
// DAY 3 DATA
// ============================================================

// Segment 7: Summit → Babadak Ranger Station
export const seg7Info: SegmentInfo = {
  num: 7,
  title: "📍 Summit → Babadak Ranger Station (Ambangeg)",
  stats: "2,886m → 2,316m | Net: −571m | ↑ +101m / ↓ −671m | ~3.5–4 hrs\nNote: +101m of re-gain is hidden in this descent — the Ambangeg trail has rolling sections.",
  accentVar: "--accent-frost",
};

export const seg7ClothingCard: InfoCard = {
  label: "👕 What to Wear — Day 3 Ambangeg Descent",
  intro: "You start cold at camp and warm significantly as you descend 570m.",
  items: [
    {
      label: "Leaving camp (2,815m, cold)",
      text: "Full layers — base layer + fleece + jacket + gloves + bonnet. Same as summit night.",
    },
    { label: "By ~2,600m (grassland)", text: "Gloves off, bonnet off, unzip jacket" },
    { label: "By ~2,400m (forest re-entry)", text: "Jacket into the pack, trekking in fleece" },
    {
      label: "By ~2,316m (Babadak)",
      text: "You'll likely be in just a t-shirt or light long-sleeve again",
    },
  ],
  tip: "Knees: The Ambangeg descent is long and gradual — trekking poles help enormously on a 570m descent with tired legs and a full pack. Tighten boot laces to lock your heel and reduce hot spots.",
};

export const seg7CameraCard: InfoCard = {
  label: "📷 Camera — Day 3 Ambangeg Descent",
  intro: "Most hikers power-hike the descent to get to Baguio. Don't — there are shots here that almost nobody gets.",
  items: [
    {
      label: "Summit Lookback (~2,842m)",
      text: "Marked on your Garmin GPX. About 15–20 min into the descent, turn around. The last clear view back to the Pulag summit ridge. Telephoto (100–200mm) compresses the distance beautifully.",
    },
    {
      label: "Sea of clouds from above on descent",
      text: "As you descend, the cloud sea is now beside and below you instead of above. The relationship between the trail, your figure, and the clouds shifts completely.",
    },
    {
      label: "Ambangeg Open Ridgeline (~2,630m)",
      text: "Marked on your GPX. Wide open ridge with valley views on both sides. Most people don't stop here. 28mm wide captures the full expanse.",
    },
    {
      label: "Morning light on pine forest (below ~2,400m)",
      text: "The low-angle morning sun shafting through the Ambangeg pine forest is very different from the Akiki side. Shoot the light rays if you hit this section before ~9AM.",
    },
  ],
};

export const seg7DescentRows: TimeRow[] = [
  { time: "6:30–7:00 AM", activity: "Return to Saddle Camp from summit" },
  { time: "7:00–7:30 AM", activity: "Breakfast at camp (2,815m)", notes: "Last mountain meal" },
  { time: "7:30–8:00 AM", activity: "Break camp, pack everything", notes: "Leave no trace" },
  {
    time: "~8:00 AM",
    activity: "🥾 Start descent via Ambangeg Trail",
    terrain: "Grassland, well-maintained",
    notes: "Much easier than Akiki",
    rowStyle: "start",
  },
  {
    time: "8:00–9:00 AM",
    activity: "Grassland section (~2,815–2,650m)",
    terrain: "Gentle downhill",
    notes: "📷 Summit lookback + sea of clouds",
    rowStyle: "highlight",
  },
  {
    time: "9:00–10:00 AM",
    activity: "Pass through Camp 2 Ambangeg (~2,650–2,500m)",
    terrain: "Mossy/dwarf bamboo forest",
    notes: "Steady descent, some muddy sections",
  },
  {
    time: "~10:00–10:30 AM",
    activity: "Short rest break (~2,500m)",
    notes: "Snack, water, stretch",
  },
  {
    time: "10:30–11:30 AM",
    activity: "Continue descent past Camp 1 (~2,500–2,400m)",
    terrain: "Pine forest",
    notes: "Trekking poles essential — your knees will feel this",
  },
  {
    time: "~11:30 AM–12:00 PM",
    activity: "Arrive at Babadak Ranger Station (2,316m)",
    terrain: "End of trail",
    notes: "~3.5–4 hrs from Saddle Camp",
    rowStyle: "arrive",
  },
];

// Return to Baguio
export const returnToBaguioRows: TimeRow[] = [
  {
    time: "12:00–12:30 PM",
    activity: "Register out, settle fees",
    notes: "Wash up at ranger station",
  },
  { time: "12:30–1:00 PM", activity: "Lunch near ranger station", notes: "You've earned a real meal" },
  { time: "1:00–1:30 PM", activity: "Board jeepney/van back to Baguio" },
  { time: "1:30–4:00 PM", activity: "Travel back to Baguio", notes: "Bonamine if needed" },
  {
    time: "~4:00–4:30 PM",
    activity: "Arrive in Baguio",
    notes: "Check in to accommodation",
    rowStyle: "arrive",
  },
  { time: "4:30 PM onwards", activity: "Shower, rest, celebrate" },
  { time: "Evening", activity: "Dinner — you deserve a feast", notes: "Session Road" },
];

// ============================================================
// SUMMARY TABLE
// ============================================================

export const summaryRows: SummaryRow[] = [
  {
    segment: "Ranger Station → Eddet River",
    day: "Day 1",
    time: "2–2.5 hrs",
    start: "1,314m",
    end: "1,265m",
    net: "−49m",
    gain: "+178m",
    loss: "−227m",
  },
  {
    segment: "Eddet River → Marlboro Country",
    day: "Day 1",
    time: "3.5–4 hrs",
    start: "1,265m",
    end: "2,170m",
    net: "+905m",
    gain: "+905m",
    loss: "0m",
  },
  {
    segment: "Marlboro Country → Mossy Forest",
    day: "Day 2",
    time: "1.5–2 hrs",
    start: "2,170m",
    end: "2,389m",
    net: "+219m",
    gain: "+219m",
    loss: "0m",
  },
  {
    segment: "Mossy Forest → Grassland",
    day: "Day 2",
    time: "2–2.5 hrs",
    start: "2,389m",
    end: "2,584m",
    net: "+195m",
    gain: "+195m",
    loss: "0m",
  },
  {
    segment: "Grassland → Saddle Camp",
    day: "Day 2",
    time: "1 hr",
    start: "2,584m",
    end: "2,815m",
    net: "+231m",
    gain: "+287m",
    loss: "−56m",
  },
  {
    segment: "Saddle Camp → Summit",
    day: "Day 2",
    time: "15–30 min",
    start: "2,815m",
    end: "2,922m",
    net: "+107m",
    gain: "+71m",
    loss: "0m",
  },
  {
    segment: "Summit → Babadak (Ambangeg)",
    day: "Day 3",
    time: "3.5–4 hrs",
    start: "2,886m",
    end: "2,316m",
    net: "−571m",
    gain: "+101m",
    loss: "−671m",
  },
  {
    segment: "TOTAL",
    day: "",
    time: "~14–15 hrs",
    start: "",
    end: "",
    net: "",
    gain: "↑ 1,956m",
    loss: "↓ 955m",
    isTotals: true,
  },
];

// ============================================================
// KEY REMINDERS
// ============================================================

export const keyReminders: ReminderItem[] = [
  {
    icon: "🦶",
    title: "Pacing",
    body: "The #1 mistake on Akiki is starting too fast. 905m of climbing comes after the easy descent to Eddet River — save your legs.",
  },
  {
    icon: "💧",
    title: "Hydration",
    body: "Small sips every 15–20 minutes. At altitude you lose moisture through breathing faster than you feel thirst.",
  },
  {
    icon: "🧥",
    title: "Cold Management",
    body: "Change into dry base layers immediately at both camps. Damp clothing against your skin overnight at altitude is how people end up hypothermic. Never sleep in what you hiked in.",
  },
  {
    icon: "🔋",
    title: "Camera Batteries",
    body: "Cold kills batteries 2–3x faster than normal. Sleep with them. Swap a warm battery in right before shooting sunrise.",
  },
  {
    icon: "🔦",
    title: "Headlamp",
    body: "Mandatory for the pre-dawn summit assault. Test the night before. Spare batteries in jacket pocket.",
  },
  {
    icon: "🚁",
    title: "Drone",
    body: "Only fly with DENR/guide confirmation. Best windows: summit afternoon or pre-dawn sunrise. Check wind before launching — gusts at the summit can be severe.",
  },
];
