import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { Footer } from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Taiwan — Work, Hike, Eat, Shoot",
};

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

interface SpotCard {
  icon: string;
  name: string;
  type: string;
  note: string;
  cost?: string;
  accent?: string;
}

// ──────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────

function Stat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statIcon}>{icon}</span>
      <div>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
      </div>
    </div>
  );
}

function DayHeader({
  day,
  date,
  title,
  sub,
  accent,
}: {
  day: string;
  date: string;
  title: string;
  sub: string;
  accent: "jade" | "lantern" | "sky" | "blossom" | "tea" | "stone";
}) {
  return (
    <div className={`${styles.dayHeader} ${styles[accent]}`}>
      <div className={styles.dayLabel}>Day {day} · {date}</div>
      <h2 className={styles.dayTitle}>{title}</h2>
      <p className={styles.dayDesc}>{sub}</p>
    </div>
  );
}

function TimelineItem({
  time,
  title,
  body,
  highlight = false,
  tag,
}: {
  time: string;
  title: string;
  body: string;
  highlight?: boolean;
  tag?: string;
}) {
  return (
    <div className={`${styles.timelineItem} ${highlight ? styles.highlight : ""}`}>
      <div className={styles.timelineTime}>{time}</div>
      <div className={styles.timelineDot} />
      <div className={styles.timelineContent}>
        <div className={styles.timelineHeader}>
          <p className={styles.timelineTitle}>{title}</p>
          {tag && <span className={styles.tag}>{tag}</span>}
        </div>
        <p className={styles.timelineBody}>{body}</p>
      </div>
    </div>
  );
}

function CalloutCard({ icon, children, variant = "default" }: { icon: string; children: React.ReactNode; variant?: "default" | "tip" | "weather" | "work" }) {
  return (
    <div className={`${styles.calloutCard} ${styles[`callout_${variant}`]}`}>
      <span className={styles.calloutIcon}>{icon}</span>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}

function SectionHead({ icon, label, title }: { icon: string; label: string; title: string }) {
  return (
    <div className={styles.sectionHead}>
      <span className={styles.sectionHeadIcon}>{icon}</span>
      <div>
        <div className={styles.sectionLabel}>{label}</div>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
    </div>
  );
}

function Card({ icon, name, type, note, cost }: SpotCard) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.cardIcon}>{icon}</span>
        <div>
          <div className={styles.cardName}>{name}</div>
          <div className={styles.cardType}>{type}</div>
        </div>
        {cost && <div className={styles.cardCost}>{cost}</div>}
      </div>
      <p className={styles.cardNote}>{note}</p>
    </div>
  );
}

function BudgetRow({ label, low, high }: { label: string; low: string; high: string }) {
  return (
    <div className={styles.budgetRow}>
      <span className={styles.budgetLabel}>{label}</span>
      <span className={styles.budgetRange}>{low} – {high}</span>
    </div>
  );
}

// ──────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────

export default function TaiwanPage() {
  return (
    <div data-theme="taiwan">
      <div className={styles.wrap}>

        {/* HERO */}
        <PageHero
          icon="🇹🇼"
          title="Taiwan"
          subtitle="Work flexibly, hike mountains, eat well, shoot everything."
          badges={[
            { label: "July 25–30, 2026" },
            { label: "6 Days" },
            { label: "Taipei Base" },
            { label: "Solo" },
          ]}
        />

        {/* STATS */}
        <div className={styles.statsBar}>
          <Stat icon="✈️" label="Flights" value="5J 312 / 5J 311" />
          <Stat icon="🏙️" label="Base" value="Taipei" />
          <Stat icon="🌡️" label="July Temp" value="33–36 °C" />
          <Stat icon="🌧️" label="Rain" value="Daily PM storms" />
          <Stat icon="📸" label="Cameras" value="A7C2 · iPhone" />
          <Stat icon="💰" label="Budget" value="NT$9–15k total" />
        </div>

        {/* FLIGHTS */}
        <div className={styles.flightStrip}>
          <div className={styles.flightLeg}>
            <span className={styles.flightIcon}>🛫</span>
            <div>
              <div className={styles.flightRoute}>Cebu → Manila → Taipei</div>
              <div className={styles.flightDetail}>Jul 25 · 5J 2508 at 1:55 AM → 5J 312 at 6:50 AM</div>
            </div>
          </div>
          <div className={styles.flightDivider} />
          <div className={styles.flightLeg}>
            <span className={styles.flightIcon}>🛬</span>
            <div>
              <div className={styles.flightRoute}>Taipei → Manila → Cebu</div>
              <div className={styles.flightDetail}>Jul 31 · 5J 311 at 3:15 AM → 5J 551 at 7:50 AM</div>
            </div>
          </div>
        </div>

        {/* WEATHER NOTE */}
        <CalloutCard icon="🌀" variant="weather">
          <strong>July = typhoon season.</strong> Taiwan averages 2–3 typhoons in July–August.
          Check forecasts before any mountain or outdoor plan. The upside: dry days between
          storms are spectacular — deep blue skies, crisp mountain views, sea of clouds.
          Keep the itinerary flexible.
        </CalloutCard>

        {/* ─────────────── DAY 1 ─────────────── */}
        <DayHeader
          day="1"
          date="July 25, Saturday"
          title="Arrive & Orient"
          sub="Taoyuan Airport → Taipei · Get your bearings, scout the neighbourhood, first night market"
          accent="jade"
        />
        <div className={styles.dayContent}>
          <p className={styles.prose}>
            You land at Taoyuan around 9–10 AM local time (Taiwan is UTC+8, same as Philippines).
            Clear immigration, grab your SIM and EasyCard at the airport, and you&apos;re already
            on the MRT into the city. Taipei&apos;s transit is excellent — one of the best in Asia.
            Day 1 is light on purpose: recover from the early departure, get settled, and scout
            a good café for tomorrow&apos;s work session.
          </p>
          <div className={styles.timeline}>
            <TimelineItem
              time="9–10 AM"
              title="Land at Taoyuan International Airport"
              body="Immigration is straightforward with Philippine passport (visa-free 90 days). Priority stop: Chunghwa Telecom booth for a 7-day tourist SIM (NT$300, fast 5G). Pick up an EasyCard from any convenience store inside arrivals — you'll use this for every MRT and bus trip."
              tag="🚨 Do first"
            />
            <TimelineItem
              time="10:30 AM"
              title="MRT to Taipei Main Station"
              body="Taoyuan Airport MRT to Taipei Main Station, ~45 minutes, NT$160. Fast, air-conditioned, and direct. Store big luggage at the station lockers (NT$30–80) if you can't check in early — saves dragging bags around on Day 1."
            />
            <TimelineItem
              time="12 PM"
              title="Check In + Rest"
              body="Stay in Zhongzheng or Da'an district — central, walking distance to MRT, good café density for working. Budget guesthouses and capsule hotels in this area run NT$900–1,500/night. Rest, shower, do a gear check for the week."
              highlight
            />
            <TimelineItem
              time="3 PM"
              title="Neighbourhood Walk + Café Scout"
              body="Walk your area. Find a café that has stable wifi and power outlets — you'll want to know where to go tomorrow morning before you need to work. Da'an, Zhongshan, and Yongkang Street areas have the highest density of good working cafes in Taipei."
              tag="📸 Shoot"
            />
            <TimelineItem
              time="6 PM"
              title="Raohe Night Market — First Dinner"
              body="Raohe Street Night Market (饒河夜市) is one of Taipei's oldest and most photogenic. Covered, so it runs even in afternoon rain. Must-try: pepper buns from the famous Fuzhou stall at the temple gate (NT$55, queue worth it), oyster omelette, grilled corn. Great intro vlog segment — busy, colourful, authentic."
              highlight
              tag="🍜 Food"
            />
          </div>
          <CalloutCard icon="📱" variant="tip">
            <strong>Chunghwa Telecom vs. Taiwan Mobile:</strong> Both are solid. Chunghwa
            has slightly better rural/mountain coverage — useful if you&apos;re hiking.
            Get the tourist SIM at the airport, not the city, to avoid hunting for a store
            when you arrive.
          </CalloutCard>
        </div>

        {/* ─────────────── DAY 2 ─────────────── */}
        <DayHeader
          day="2"
          date="July 26, Sunday"
          title="Elephant Mountain at Sunrise + Work Day"
          sub="象山 Dawn Shoot · Café Work Session · Wanhua District · Night Market"
          accent="lantern"
        />
        <div className={styles.dayContent}>
          <p className={styles.prose}>
            July mornings in Taipei are actually pleasant before 9 AM — it&apos;s the
            middle of the day that destroys you. Elephant Mountain at sunrise is one of
            the best photography spots in the country: the 101 skyline backlit by golden
            hour, mist in the valleys below. Go early, shoot hard, then retreat to an
            air-conditioned café and get work done while it&apos;s hot outside.
          </p>
          <div className={styles.timeline}>
            <TimelineItem
              time="5:15 AM"
              title="Leave for Elephant Mountain (象山)"
              body="MRT to Xiangshan Station (红线), 5-minute walk to trailhead. The climb is 20–30 minutes up steep stone steps. Bring a torch, water, and the A7C2. You want to be at the top rocks (第一巨石) by 5:45–6:00 AM for first light over the Taipei skyline."
              highlight
              tag="📸 Key Shot"
            />
            <TimelineItem
              time="5:45 AM"
              title="Sunrise Shoot — Taipei 101 Skyline"
              body="The classic composition: Taipei 101 with the mountain ridge and morning mist. 18mm wide for the cityscape, zoom in at 100–200mm for compression shots of 101 against the clouds. Golden hour lasts maybe 30 minutes before it gets hazy. This is prime vlog material — time-lapse of the city waking up, drone-style movement."
              tag="📸 Golden Hour"
            />
            <TimelineItem
              time="7:30 AM"
              title="Breakfast: Soy Milk Shop"
              body="Walk back down to the Xinyi or Da'an area for a proper Taiwanese breakfast. Look for a 豆漿 (dòu jiāng / soy milk) shop — the style with freshly made soy milk, scallion pancakes (蔥油餅), egg crepe (蛋餅), and rice rolls (飯糰). NT$50–80, filling, completely local."
              tag="🍜 Food"
            />
            <TimelineItem
              time="9 AM – 1 PM"
              title="Work Session — Café"
              body="4-hour work block while the city heats up. Good options: Cama Café (chain, reliable wifi, NT$100 minimum), Simple Kaffa (specialty coffee, Da'an), or any independent café with visible power strips at tables. Order a coffee every 2 hours to keep the seat without issue."
              tag="💻 Work"
              highlight
            />
            <TimelineItem
              time="2 PM"
              title="Wanhua District + Longshan Temple"
              body="Oldest district in Taipei. Longshan Temple (龍山寺) is the best incense photography in Taiwan — smoky, layered, genuinely spiritual. Be respectful: shoot from the sides, avoid photographing worshippers directly. Surrounding streets have traditional medicine shops, street food, and layers of history."
              tag="📸 Shoot"
            />
            <TimelineItem
              time="5 PM"
              title="Ximending — Street Food + Culture"
              body="Youth culture hub, pedestrian zone. Loud, colourful, great for street photography and b-roll vlog footage. Stinky tofu here if you want to try it — NT$50. Red Bean Mochi ice cream NT$30. Walk the alleys."
            />
            <TimelineItem
              time="7 PM"
              title="Ningxia Night Market"
              body="Authentic local night market frequented by Taipei residents, not just tourists. More intimate than Shilin. Must-try: taro balls (芋圓) in sweet soup (NT$55), peanut brittle ice cream rolls, braised pork rice (滷肉飯) for NT$40."
              tag="🍜 Food"
            />
          </div>
        </div>

        {/* ─────────────── DAY 3 ─────────────── */}
        <DayHeader
          day="3"
          date="July 27, Monday"
          title="Jiufen + Shifen Day Trip"
          sub="Old Town · Sky Lanterns · Waterfall · Golden Hour Photography"
          accent="blossom"
        />
        <div className={styles.dayContent}>
          <p className={styles.prose}>
            Jiufen (九份) is the town that inspired Spirited Away — stacked teahouses on
            a hillside, red lanterns, narrow stone alleys, ocean views. Shifen is 20
            minutes away with Taiwan&apos;s widest waterfall and the famous sky lantern
            tradition. Do both in one day. The golden hour in Jiufen from 5–7 PM is
            some of the best photography lighting in Asia.
          </p>
          <div className={styles.timeline}>
            <TimelineItem
              time="7:30 AM"
              title="Train: Taipei Main Station → Ruifang"
              body="TRA (台灣鐵路) regional train, ~40 minutes, NT$50. Trains run frequently. Buy tickets at the station or via the TRA app. Ruifang is the hub for both Jiufen and Shifen."
            />
            <TimelineItem
              time="9 AM"
              title="Shifen Old Street + Waterfall"
              body="From Ruifang, take a local train or bus to Shifen (十分). The Old Street sits right on active train tracks — trains roll through every 20–30 minutes, which makes for great vlog footage. Shifen Waterfall (十分瀑布) is a 20-minute walk — Taiwan's widest waterfall, nicknamed the 'mini Niagara.' Long exposure with the 18mm here."
              tag="📸 Waterfall"
              highlight
            />
            <TimelineItem
              time="10:30 AM"
              title="Sky Lanterns (Optional)"
              body="Sky lanterns are the thing here — you write your wishes on a lantern and release it. NT$150–200. Great vlog content. Note: this is a tourist activity, but it reads authentically on camera. Shoot the release from below at wide angle, then zoom as it rises."
              tag="📸 Vlog Moment"
            />
            <TimelineItem
              time="11:30 AM"
              title="Bus to Jiufen"
              body="Local bus from Shifen to Jiufen takes ~20 minutes. Alternatively, taxi NT$200–300. Arrive before the main tourist rush."
            />
            <TimelineItem
              time="12 PM"
              title="Jiufen Lunch"
              body="Eat at a small local restaurant on the main street. Taro ball soup (芋圓) at Ah-Gan's Original Taro (阿柑姨芋圓) is the classic — get the cold version in July. Fish ball soup and braised pork rice are the local staples. NT$100–150 for a full meal."
              tag="🍜 Food"
            />
            <TimelineItem
              time="1–4 PM"
              title="Jiufen Old Town — Explore"
              body="Wander the main alley (基山街) and Shuqi Road (豎崎路 — the stone steps). A-Mei Tea House (阿妹茶樓) is the iconic Spirited Away-looking teahouse — best photographed from across the valley or from the steps above. NT$200 minimum order to sit inside. Worth it for one cup of Taiwanese oolong."
              tag="📸 Shoot"
            />
            <TimelineItem
              time="5–7 PM"
              title="Golden Hour Photography — Jiufen"
              body="This is the reason to stay late. When the lanterns light up and the sun drops behind the mountains, Jiufen turns into something extraordinary. Warm orange and red light, ocean in the background, mist on the hills. Set up the iPhone tripod for static wide shots, use the A7C2 for telephoto compression of the lit-up teahouses. This is the money shot for the vlog."
              highlight
              tag="📸 Golden Hour"
            />
            <TimelineItem
              time="7:30 PM"
              title="Bus back to Ruifang → Train to Taipei"
              body="Regular buses back to Ruifang from Jiufen every 15–20 minutes. Be aware: after golden hour, the bus gets crowded with everyone leaving at the same time. Alternatively, take a taxi to Ruifang (NT$200). Train back to Taipei."
            />
          </div>
          <CalloutCard icon="🌧️" variant="weather">
            <strong>Jiufen + rain = actually great photography.</strong> The misty, rainy
            version of Jiufen looks even more atmospheric on camera. Bring a small
            travel umbrella. If it&apos;s clear, it&apos;s beautiful. If it&apos;s
            raining, it&apos;s cinematic.
          </CalloutCard>
        </div>

        {/* ─────────────── DAY 4 ─────────────── */}
        <DayHeader
          day="4"
          date="July 28, Tuesday"
          title="Yangmingshan National Park"
          sub="Volcanic Hike · Sulfur Vents · Beitou Hot Springs"
          accent="tea"
        />
        <div className={styles.dayContent}>
          <p className={styles.prose}>
            Yangmingshan is Taipei&apos;s backyard volcano — 30 minutes from the city
            centre, and one of the best hikes in northern Taiwan. The volcanic landscape
            is unlike anything else: sulfur vents steaming from the ground, crater lakes,
            open ridgeline with panoramic views of Taipei below. Go early before the heat
            peaks.
          </p>
          <div className={styles.timeline}>
            <TimelineItem
              time="5:30 AM"
              title="Bus to Yangmingshan"
              body="Bus 260 from Zhongshan MRT Station to Yangmingshan National Park (~1 hour, NT$15 with EasyCard). Or take the MRT to Jiantan then Bus S9 to the main park area. Get on early to secure a seat."
            />
            <TimelineItem
              time="6:30 AM"
              title="Qixing Trail — Main Hike"
              body="Qixingshan (七星山, 1,120m) is the highest peak in Taipei and the most rewarding hike in the park. The main trail from Xiaoyoukeng visitor centre takes 2–3 hours round trip. Volcanic terrain: rocky switchbacks, open ridgeline, dramatic views. Start here before clouds build up mid-morning."
              highlight
              tag="🥾 Hike"
            />
            <TimelineItem
              time="7 AM"
              title="Xiaoyoukeng — Sulfur Vents"
              body="The sulfur vent area near the trailhead is prime photography. Steaming cracks in the earth, the smell of sulfur, yellow mineral deposits on the rocks. Wide angle at 18mm for the landscape scale, then zoom into individual vents for texture shots. Surreal and completely free to visit."
              tag="📸 Unique Shot"
              highlight
            />
            <TimelineItem
              time="9:30 AM"
              title="Summit + Views of Taipei"
              body="Clear morning days give you a full panorama: Taipei basin below, the ocean to the east, neighbouring peaks. The summit is open and exposed — bring water. This is where the 18-200mm zoom earns its place: wide for context, then compress the Taipei 101 skyline from 1,100m."
              tag="📸 Summit"
            />
            <TimelineItem
              time="11 AM"
              title="Back to Park Visitor Centre"
              body="Grab food at the park's café or convenience store. The midday heat at lower elevations is brutal — rest here or head back to Taipei earlier."
            />
            <TimelineItem
              time="1 – 5 PM"
              title="Work Session — Taipei Café"
              body="Back in Taipei for the afternoon work block. Yangmingshan morning + work afternoon is the ideal split for this trip's work-travel balance."
              tag="💻 Work"
              highlight
            />
            <TimelineItem
              time="6 PM"
              title="Beitou Hot Springs (北投溫泉)"
              body="Public hot spring baths near Yangmingshan. Xinbeitou MRT station (Red Line) → 10-min walk to Millennium Hot Spring (千禧湯), the cheapest public bath: NT$70 for adults. Outdoor pools at around 40°C. Strange but deeply relaxing after a morning hike. Bring a towel and flip flops."
              tag="♨️ Hot Springs"
              highlight
            />
          </div>
          <CalloutCard icon="⚠️" variant="tip">
            <strong>Typhoon check before Yangmingshan.</strong> If a typhoon is within
            100km, the park closes and buses stop running. Check the Taiwan Central
            Weather Bureau (CWB) app the night before. Have a backup plan (indoor
            coworking day or museum).
          </CalloutCard>
        </div>

        {/* ─────────────── DAY 5 ─────────────── */}
        <DayHeader
          day="5"
          date="July 29, Wednesday"
          title="Taipei Deep Dive"
          sub="Yongkang Street · Full Work Day · Palace Museum · Maokong Gondola"
          accent="sky"
        />
        <div className={styles.dayContent}>
          <p className={styles.prose}>
            Day 5 is the most Taipei day of the trip. Morning food exploration, a proper
            full work session, then cultural photography at the National Palace Museum
            and sunset views from Maokong mountain. A good mix of productivity and
            exploration without needing to travel far.
          </p>
          <div className={styles.timeline}>
            <TimelineItem
              time="7:30 AM"
              title="Yongkang Street — Breakfast + Food Street"
              body="Yongkang Street (永康街) is Taipei's best street for food tourism. Start with breakfast at a local spot — Yongkang Beef Noodles (永康牛肉麵) isn't open for breakfast but the area has great morning options. Browse the street: tea shops, mochi, tofu pudding. This is also Din Tai Fung's original location for anyone wanting soup dumplings for brunch (NT$200–350)."
              tag="🍜 Food"
            />
            <TimelineItem
              time="9 AM – 1 PM"
              title="Full Work Session"
              body="4–5 hour work block. Recommended spots: Simple Kaffa (Da'an, specialty coffee), Fujin Tree Café (Songshan area, great atmosphere), or WorkInn coworking in Xinyi (NT$250/day, fast wifi, standing desks). Midweek cafes in Da'an are quieter and easier to hold a seat."
              tag="💻 Work"
              highlight
            />
            <TimelineItem
              time="2 PM"
              title="National Palace Museum (故宮博物院)"
              body="One of the world's greatest collections of Chinese artefacts — jade, ceramics, calligraphy, bronze. NT$350 entry. The main hall is massively air-conditioned (essential in July). Photography of artefacts is generally allowed (no flash). Good vlog content: contrast of ancient craft with modern Taiwan. Budget 2 hours."
              tag="📸 Cultural"
            />
            <TimelineItem
              time="4:30 PM"
              title="Maokong Gondola — Mountain Tea Views"
              body="Cable car from Taipei Zoo MRT station up to Maokong mountain. NT$120 one way. Tea plantations on the hillside, city views on the way up, tea houses at the top serving traditional Taiwanese oolong with mountain snacks. Sunset from up here on a clear day is excellent. A7C2 on the gondola glass for cityscape shots."
              tag="📸 Views"
              highlight
            />
            <TimelineItem
              time="7 PM"
              title="Linjiang / Tonghua Night Market"
              body="The local's favourite night market in Da'an district. Smaller than Shilin and Raohe, but the food quality is consistently high. Oyster vermicelli (蚵仔麵線, NT$50), pepper rolls, fresh-cut fruit, grilled squid. Great for last-minute shooting in low tungsten market light."
              tag="🍜 Food"
            />
          </div>
        </div>

        {/* ─────────────── DAY 6 ─────────────── */}
        <DayHeader
          day="6"
          date="July 30, Thursday"
          title="Tamsui + Final Night"
          sub="Fishing Village · Fort San Domingo · Last Sunset · Early Checkout"
          accent="jade"
        />
        <div className={styles.dayContent}>
          <p className={styles.prose}>
            Last full day. Keep it relaxed — you have a 3:15 AM flight. Tamsui is easy,
            beautiful, and photogenic without requiring much physical effort. End the trip
            at Shilin Night Market for a final Taiwan meal, then pack early and rest before
            the departure.
          </p>
          <div className={styles.timeline}>
            <TimelineItem
              time="8 AM"
              title="MRT to Tamsui (淡水)"
              body="Red Line, end of the line, ~40 minutes from central Taipei. The MRT runs right along the river for the last stretch — scenic on its own. NT$52."
            />
            <TimelineItem
              time="9 AM"
              title="Tamsui Waterfront Walk"
              body="The old fishing village has a well-maintained waterfront promenade. Fisherman's Wharf, old Dutch and Japanese colonial architecture, small shrines. The wide Tamsui River with fishing boats makes for strong morning photography — good light before 11 AM, manageable temperatures."
              tag="📸 Shoot"
            />
            <TimelineItem
              time="10 AM"
              title="Fort San Domingo (紅毛城)"
              body="17th-century Dutch fort, then Spanish, then British consulate — layers of colonial history in one site. NT$80 entry. Brick walls, iron doors, ocean views. Strong architectural photography: the red walls against blue sky are iconic Taiwan."
              tag="📸 Architecture"
              highlight
            />
            <TimelineItem
              time="11:30 AM"
              title="Tamsui Old Street — Last Snacks"
              body="Walk the old street before heading back. Tamsui is famous for: iron eggs (鐵蛋, NT$30), fish crackers, a-gei (阿給 — tofu stuffed with noodles, unique to Tamsui). Buy some iron eggs to take home. They're vacuum-packed and travel well."
              tag="🍜 Food"
            />
            <TimelineItem
              time="1 PM"
              title="Return + Final Work / Rest"
              body="Back in Taipei. Do a short work check-in if needed, then rest. You have a 3:15 AM departure — sleeping now is the right call."
              tag="💻 Work"
            />
            <TimelineItem
              time="6 PM"
              title="Shilin Night Market — Final Dinner"
              body="Shilin (士林夜市) is Taipei's largest night market. Overwhelming in the best way. Final meal: stinky tofu if you haven't tried it (the smell is worse than the taste), large fried chicken cutlet (雞排, NT$70), oysters, bubble tea. Vlog your goodbyes to Taiwan food here."
              tag="🍜 Final Night"
              highlight
            />
            <TimelineItem
              time="9 PM"
              title="Pack + Sleep"
              body="Full pack before you sleep. Alarm at 1:30 AM for a taxi to Taoyuan airport (NT$1,000–1,200 fixed fare from most Taipei hotels, ~45 minutes). Don't rely on the MRT — airport MRT ends at midnight."
              tag="🚨 Important"
              highlight
            />
          </div>
          <CalloutCard icon="🚕" variant="tip">
            <strong>3:15 AM flight logistics:</strong> Set two alarms. Pre-book a taxi
            the night before through your hotel or the Line Taxi app. Airport MRT last
            train is around midnight — don&apos;t miss it unless you have a cab confirmed.
            Check-in closes 60 minutes before departure.
          </CalloutCard>
        </div>

        <div className={styles.divider} />

        {/* ─────────────── HIKING SPOTS ─────────────── */}
        <section className={styles.section} id="hiking">
          <SectionHead icon="🥾" label="Hiking" title="Taiwan Trail Notes" />
          <p className={styles.sectionProse}>
            Taiwan is one of the best hiking destinations in Asia — over 200 peaks above
            3,000m and accessible trails starting from city suburbs. July is hot at low
            elevation but cool at altitude. Start early, carry 2L of water minimum.
          </p>
          <div className={styles.cardGrid}>
            <Card
              icon="🏙️"
              name="Elephant Mountain (象山)"
              type="Easy · 30 min · Xinyi District"
              note="Best Taipei 101 photography. Stone steps, open rocks at the top. Go at sunrise (5:30 AM) or sunset. Very accessible — 5 min walk from Xiangshan MRT."
              cost="Free"
            />
            <Card
              icon="🌋"
              name="Qixingshan — Yangmingshan"
              type="Moderate · 3–4 hrs · North Taipei"
              note="Highest peak in Taipei at 1,120m. Volcanic terrain, sulfur vents, open ridgeline. Best views of the city from above. Take Bus 260 or S9."
              cost="Free"
            />
            <Card
              icon="🌊"
              name="Shifen Waterfall Trail"
              type="Easy · 30 min · New Taipei"
              note="Taiwan's widest waterfall. Short, flat trail through forest. Best in the morning. Long exposure shots require a tripod and ND filter."
              cost="Free"
            />
            <Card
              icon="🫖"
              name="Maokong Trail"
              type="Easy · 1–2 hrs · Wenshan"
              note="Tea plantation mountain above Taipei. Trail connects several tea houses. Can hike down from the gondola station. Cooler than the city, beautiful terraced views."
              cost="Free (gondola NT$120)"
            />
            <Card
              icon="🌊"
              name="Tamsui Coastal Walk"
              type="Easy · 2 hrs · Tamsui"
              note="Flat waterfront walk from Tamsui Station to Fisherman's Wharf. Not a hike but great for morning light and river photography. No elevation gain."
              cost="Free"
            />
          </div>
        </section>

        {/* ─────────────── FOOD ─────────────── */}
        <section className={styles.section} id="food">
          <SectionHead icon="🍜" label="Food" title="What to Eat" />
          <p className={styles.sectionProse}>
            Taiwan has some of the best street food in the world. Night markets are the
            backbone — cheap, varied, and open until midnight. Budget NT$100–200 per meal
            comfortably.
          </p>
          <div className={styles.cardGrid}>
            <Card
              icon="🌙"
              name="Raohe Night Market"
              type="Night Market · Songshan"
              note="Covered market, great for rainy nights. Pepper buns (胡椒餅) from the temple stall are mandatory — join the queue. Oyster omelette, stinky tofu, fruit."
              cost="NT$50–150/item"
            />
            <Card
              icon="🌙"
              name="Shilin Night Market"
              type="Night Market · Shilin"
              note="Taipei's largest. Underground food hall + outdoor stalls. Fried chicken cutlets, oysters, bubble tea. Touristy but genuinely great food."
              cost="NT$50–150/item"
            />
            <Card
              icon="🌙"
              name="Ningxia Night Market"
              type="Night Market · Zhongshan"
              note="Most authentic of the big markets. Taro balls (芋圓), peanut ice cream rolls (花生捲冰淇淋), braised pork rice (滷肉飯). Locals outnumber tourists."
              cost="NT$40–80/item"
            />
            <Card
              icon="🥣"
              name="Taiwanese Breakfast Shop"
              type="Local Breakfast · Everywhere"
              note="Soy milk (豆漿), scallion pancake (蔥油餅), egg crepe (蛋餅). The quintessential Taiwan start. Find a local shop near your hotel — there's one within 200m of anywhere in Taipei."
              cost="NT$50–80"
            />
            <Card
              icon="🍜"
              name="Beef Noodle Soup"
              type="Sit-down · Various"
              note="Taiwan's unofficial national dish. Braised beef in a rich spiced broth, hand-pulled noodles. Yongkang Beef Noodle (永康牛肉麵) is the most famous. NT$180–250."
              cost="NT$180–250"
            />
            <Card
              icon="🏪"
              name="7-Eleven / FamilyMart"
              type="Convenience Store · Everywhere"
              note="Underrated. Taiwan convenience stores have hot lurou fan (braised pork rice, NT$35), freshly heated meals, good coffee (NT$45), and free wifi. Reliable backup for any meal."
              cost="NT$35–100"
            />
          </div>
        </section>

        {/* ─────────────── WORK + CAFES ─────────────── */}
        <section className={styles.section} id="work">
          <SectionHead icon="💻" label="Work + Cafes" title="Where to Work" />
          <p className={styles.sectionProse}>
            Taiwan is one of the best countries in the world for working remotely.
            Fast wifi everywhere, café culture is deeply embedded, and the
            NT$80–150 minimum order buys you hours of power-outlet time in
            comfortable, air-conditioned spaces.
          </p>
          <div className={styles.cardGrid}>
            <Card
              icon="☕"
              name="Cama Café"
              type="Chain Café · Multiple Locations"
              note="Most reliable for work. Stable wifi, plenty of outlets, good drip coffee at NT$100–130. The Da'an and Zhongshan branches are never overpacked on weekdays."
              cost="NT$100–150 minimum"
            />
            <Card
              icon="☕"
              name="Simple Kaffa"
              type="Specialty Coffee · Da'an"
              note="World-class specialty coffee in a calm, focused environment. Good for a morning 2–3 hour session. NT$150–200 for a flat white. One of the best cafés in Asia."
              cost="NT$150–200"
            />
            <Card
              icon="🏢"
              name="WorkInn"
              type="Coworking · Xinyi"
              note="Proper coworking space with day passes. Fast internet, standing desks, meeting rooms available. Best for full work days when you need separation from café distractions."
              cost="NT$250/day"
            />
            <Card
              icon="🏪"
              name="FamilyMart / 7-Eleven"
              type="Convenience Store · Everywhere"
              note="Free wifi, outlets at some seats, open 24 hours. Not glamorous but 100% reliable. Good for a quick 30-minute check-in or when you need to work at odd hours."
              cost="Drink purchase only"
            />
          </div>
          <CalloutCard icon="📡" variant="work">
            <strong>Taiwan wifi reality:</strong> Most cafés advertise wifi but speeds
            vary. Download the{" "}
            <strong>iTaiwan</strong> app — free government wifi at MRT stations,
            libraries, and public spaces nationwide. Your Chunghwa SIM will be faster
            than most café wifi anyway — tethering is always a backup.
          </CalloutCard>
        </section>

        {/* ─────────────── PHOTOGRAPHY + VLOG ─────────────── */}
        <section className={styles.section} id="photography">
          <SectionHead icon="📸" label="Photography + Vlog" title="Shooting Taiwan" />

          <div className={styles.twoCol}>
            <div>
              <div className={styles.subhead}>Sony A7C2 + 18–200mm</div>
              <ul className={styles.tipList}>
                <li>18mm for temples, night markets, wide cityscapes — stay close, shoot wide</li>
                <li>50–85mm for food shots — flatters plates, natural compression</li>
                <li>100–200mm for compressing 101 against mountains from Elephant Mountain</li>
                <li>July midday light is harsh and flat — shoot before 10 AM or after 5 PM</li>
                <li>Night markets: tungsten lighting — set WB to 3200K or shoot RAW. A7C2 handles high ISO beautifully</li>
                <li>ND filter for outdoor video — mandatory in July brightness</li>
                <li>Humidity warning: condensation forms when moving from AC indoors to hot outside. Give the camera 5 minutes to adjust before shooting</li>
              </ul>
            </div>
            <div>
              <div className={styles.subhead}>Vlog Notes</div>
              <ul className={styles.tipList}>
                <li>iPhone tripod: set up static wide shots while you shoot with the A7C2 — dual angle coverage</li>
                <li>Taiwan is vlog-friendly: public spaces, markets, temples are all generally permissive</li>
                <li>Best vlog moments: Jiufen lanterns at dusk, Shifen sky lantern release, sulfur vents at Yangmingshan, Taipei 101 time-lapse, night market food sequence</li>
                <li>Drone in Taiwan: register with the Civil Aeronautics Administration (CAA) before the trip. Many city areas have restrictions. Yangmingshan requires prior approval.</li>
                <li>Power bank: essential for a full vlog day. Sony NP-FZ100 drains faster with screen on for vlogging — carry two batteries</li>
                <li>MRT is the best vlog transition tool: fast, clean, modern — great for establishing shot sequences</li>
              </ul>
            </div>
          </div>

          <div className={styles.shootGrid}>
            {[
              { spot: "Elephant Mountain", shot: "Taipei 101 at sunrise with city mist", time: "5:30–6:30 AM" },
              { spot: "Jiufen Tea Houses", shot: "Red lanterns at golden hour dusk", time: "5–7 PM" },
              { spot: "Shifen Waterfall", shot: "Long exposure waterfall, 18mm wide", time: "Morning" },
              { spot: "Yangmingshan Vents", shot: "Sulfur steam from volcanic ground", time: "7–8 AM" },
              { spot: "Longshan Temple", shot: "Incense smoke + worshippers, backlit", time: "Afternoon" },
              { spot: "Tamsui Waterfront", shot: "Fort San Domingo red walls + blue sky", time: "9–11 AM" },
              { spot: "Night Markets", shot: "Food detail shots, tungsten glow, crowds", time: "After dark" },
              { spot: "Maokong Gondola", shot: "Taipei cityscape through gondola glass", time: "Sunset" },
            ].map((item, i) => (
              <div key={i} className={styles.shootItem}>
                <div className={styles.shootSpot}>{item.spot}</div>
                <div className={styles.shootNote}>{item.shot}</div>
                <div className={styles.shootTime}>{item.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────── BUDGET ─────────────── */}
        <section className={styles.section} id="budget">
          <SectionHead icon="💰" label="Budget" title="Cost Breakdown" />
          <p className={styles.sectionProse}>
            Taiwan is excellent value for money, especially on food and transport.
            Accommodation is the main variable — capsule hotels at NT$600–900/night
            vs. budget guesthouses at NT$1,200–1,500/night. Everything else is cheap.
          </p>
          <div className={styles.budgetTable}>
            <BudgetRow label="Accommodation (5 nights)" low="NT$4,500" high="NT$7,500" />
            <BudgetRow label="Food (night markets + local)" low="NT$2,000" high="NT$3,500" />
            <BudgetRow label="Transport (MRT + trains + buses)" low="NT$800" high="NT$1,200" />
            <BudgetRow label="Attractions + hot springs" low="NT$400" high="NT$800" />
            <BudgetRow label="Coffee + work cafes" low="NT$600" high="NT$1,000" />
            <BudgetRow label="SIM card (Chunghwa 7-day)" low="NT$300" high="NT$300" />
            <BudgetRow label="Airport taxi (departure)" low="NT$1,000" high="NT$1,200" />
            <div className={`${styles.budgetRow} ${styles.budgetTotal}`}>
              <span className={styles.budgetLabel}>Total (ex-flights)</span>
              <span className={styles.budgetRange}>NT$9,600 – NT$15,500</span>
            </div>
            <div className={styles.budgetNote}>
              ≈ PHP 16,500 – 26,500 · 1 NT$ ≈ 1.72 PHP (as of 2026)
            </div>
          </div>
        </section>

        {/* ─────────────── PACKING ─────────────── */}
        <section className={styles.section} id="packing">
          <SectionHead icon="🎒" label="Packing" title="What to Bring" />
          <div className={styles.twoCol}>
            <div>
              <div className={styles.subhead}>Clothing + Gear</div>
              <ul className={styles.tipList}>
                <li>Light moisture-wicking clothes — cotton is miserable in 35°C humidity</li>
                <li>Compact rain jacket or packable poncho (afternoon storms are daily)</li>
                <li>Hiking shoes — proper trail footwear for Yangmingshan (not sandals)</li>
                <li>Small towel — you will sweat constantly outside AC</li>
                <li>Flip flops for Beitou hot springs</li>
                <li>Sunscreen SPF 50+ (UV index is extreme in July)</li>
                <li>Bug spray for trail sections at Yangmingshan</li>
              </ul>
            </div>
            <div>
              <div className={styles.subhead}>Tech</div>
              <ul className={styles.tipList}>
                <li>Sony A7C2 + 18–200mm lens</li>
                <li>iPhone + tripod</li>
                <li>2–3 spare Sony NP-FZ100 batteries (keep one warm in pocket)</li>
                <li>ND filter for A7C2 (essential for outdoor video)</li>
                <li>Laptop + charger</li>
                <li>Large power bank (vlogging drains phone fast)</li>
                <li>Universal travel adapter (Taiwan uses Type A, same as Philippines)</li>
                <li>Dry bag / camera rain cover for afternoon storms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer
          icon="🇹🇼"
          title="Taiwan — Work, Hike, Eat, Shoot"
          note="Planned July 25–30, 2026. Flights: Cebu Pacific 5J 312 / 5J 311. Photography: Sony A7C2 18–200mm, iPhone."
        />

      </div>
    </div>
  );
}
