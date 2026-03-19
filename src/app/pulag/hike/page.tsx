import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { Footer } from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mt. Pulag via Akiki Trail — Trip Report",
};

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
}: {
  day: "1" | "2" | "3";
  date: string;
  title: string;
  sub: string;
}) {
  return (
    <div className={`${styles.dayHeader} ${styles[`day${day}`]}`}>
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
}: {
  time: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div className={`${styles.timelineItem} ${highlight ? styles.timelineHighlight : ""}`}>
      <div className={styles.timelineTime}>{time}</div>
      <div className={styles.timelineDot} />
      <div className={styles.timelineContent}>
        <p className={styles.timelineTitle}>{title}</p>
        <p className={styles.timelineBody}>{body}</p>
      </div>
    </div>
  );
}

function CalloutCard({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className={styles.calloutCard}>
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

// ──────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────

export default function PulagHikePage() {
  return (
    <div data-theme="pulag-hike">
      <div className={styles.wrap}>

        {/* HERO */}
        <PageHero
          icon="🏔️"
          title="Mt. Pulag via Akiki Trail"
          subtitle="The hardest trail. The highest reward."
          badges={[
            { icon: "📅", text: "March 4–6, 2026" },
            { icon: "🥾", text: "Akiki Trail" },
            { icon: "⛰️", text: "Summit: 2,926 m" },
            { icon: "🏕️", text: "3D2N" },
          ]}
        />

        {/* STATS BAR */}
        <div className={styles.statsBar}>
          <Stat icon="⛰️" label="Summit" value="2,926 m" />
          <Stat icon="📍" label="Trail Start" value="1,241 m" />
          <Stat icon="📈" label="Total Gain" value="~1,700 m" />
          <Stat icon="🕑" label="Summit Reached" value="9:20 AM" />
          <Stat icon="🌡️" label="Night Temp" value="5–10 °C" />
          <Stat icon="📸" label="Cameras" value="A7C · Drone · iPhone" />
        </div>

        {/* ─────────────────────────── */}
        {/* DAY 1                       */}
        {/* ─────────────────────────── */}
        <DayHeader
          day="1"
          date="March 4, Wednesday"
          title="The Unrelenting Climb"
          sub="Ambangeg Ranger Station → Akiki → Eddet River → Marlboro Country"
        />

        <div className={styles.dayContent}>
          <p className={styles.prose}>
            The journey to the roof of Luzon doesn&apos;t start with a dramatic trailhead
            moment — it starts with waiting. We gathered at Ambangeg Ranger Station at
            8 AM for the mandatory DENR orientation, but with hikers trickling in from
            different van schedules, the briefing didn&apos;t get going until nearly 9.
            It&apos;s a good reminder that mountain time operates on its own terms, and
            building slack into Day 1 is non-negotiable.
          </p>

          <div className={styles.timeline}>
            <TimelineItem
              time="8:00 AM"
              title="Ambangeg Ranger Station — Assembly"
              body="DENR registration and the mandatory orientation briefing, shared with Ambangeg Trail groups. The wait is standard — climbers arrive on staggered schedules from Baguio. Use the time to repack, eat, and hydrate."
            />
            <TimelineItem
              time="11:00 AM"
              title="Akiki Ranger Station — Bag Weigh-In"
              body="Drove to the Akiki trailhead. DENR enforces pack weight limits here. Most of the group carried their own bags; porters handled the overflow. If you&apos;re bringing a full camera kit, hiring a porter for the extra gear is money well spent — you&apos;ll understand why by 3 PM."
            />
            <TimelineItem
              time="12:00 PM"
              title="Hike Begins"
              body="Officially on the trail. The first segment out of Akiki Ranger Station is deceptively gentle — shaded forest trail, stream crossings, pine and wet earth. The trail is politely introducing itself before it shows you what it&apos;s really about."
              highlight
            />
            <TimelineItem
              time="3:00 PM"
              title="Eddet River — Rest Stop"
              body="Reached the Eddet River crossing after three hours of steady hiking. Cold, clean water straight off the mountain — a popular refill point. The group rested, filled up, and stretched. Don&apos;t linger too long. What comes next is the reason Akiki has its reputation."
            />
            <TimelineItem
              time="3:30 PM"
              title="The Killer Climb Begins"
              body="Eddet River to Marlboro Country is the section that earns Akiki its name. Open, exposed switchbacks with no shade and no mercy — over 600 m of elevation gain in roughly 90 minutes. Heart rate sits at 160+ and doesn&apos;t come down. The trail turns from friendly forest to relentless vertical. It&apos;s beautiful and brutal in equal measure."
              highlight
            />
            <TimelineItem
              time="5:00 PM"
              title="Marlboro Country — Camp 1"
              body="We broke through the treeline into Marlboro Country&apos;s wide open grassland just as the light was fading and the cold hit hard. Layers on immediately. Set up camp, boiled water at the stream, ate dinner, and got into sleeping bags early. The alarm was set for 2 AM."
              highlight
            />
          </div>

          <CalloutCard icon="⚠️">
            <strong>Akiki is not beginner-friendly.</strong> The Eddet River to Marlboro
            section is a serious, sustained climb with no shade and a heavy pack. Train
            for it specifically — long uphills with weight. There is no easy version of
            this section.
          </CalloutCard>
        </div>

        {/* ─────────────────────────── */}
        {/* DAY 2                       */}
        {/* ─────────────────────────── */}
        <DayHeader
          day="2"
          date="March 5, Thursday"
          title="Summit Day"
          sub="2 AM push · Mossy Forest · Grassland at Sunrise · 2,926 m"
        />

        <div className={styles.dayContent}>
          <p className={styles.prose}>
            Three hours of sleep and a 2 AM alarm. You pull yourself out of a warm
            sleeping bag into the cold dark, headlamp on, and somehow — you start
            moving. This is what you came for.
          </p>

          <div className={styles.timeline}>
            <TimelineItem
              time="2:00 AM"
              title="Summit Push — Into the Dark"
              body="All layers on: thermals, fleece, windbreaker, gloves. The trail in the dark is a completely different experience. Your headlamp cuts a small circle of light, stars overhead, breath visible in the cold. The mossy forest section is eerie and beautiful at night — ancient trees completely wrapped in moss, fog drifting through in patches."
              highlight
            />
            <TimelineItem
              time="~3:30 AM"
              title="Hanselma Viewpoint"
              body="A strategic rest stop partway up with a wide view over the valley. The lights of towns far below still visible, contrasting with the mountain dark above. This is where the A7C came out for the first time on the climb — high ISO, long exposure, low light. A good spot to catch your breath and take it all in."
            />
            <TimelineItem
              time="~4:30 AM"
              title="Mossy Forest — Time Slows Down"
              body="The trail threads through dense mossy forest before the final open push. Short, gnarled trees wrapped in thick bright-green moss, fog rolling through in waves. Completely otherworldly at this hour. We took our time here — lots of stops, lots of photos. This section alone justifies the early start."
            />
            <TimelineItem
              time="5:30–6:00 AM"
              title="Grassland — Moon Setting, Sun Rising"
              body="Breaking out of the treeline into open grassland as dawn broke was the moment the entire climb justified itself. The moon was still visible, setting over the western ridge. Wildflowers dotting the grass. The sea of clouds already forming in the valleys below. The sunrise came in fast — gold then orange then full light. Everything was visible at once: moon, clouds, flowers, sunrise."
              highlight
            />
            <TimelineItem
              time="7:50 AM"
              title="Saddle Camp — Breakfast"
              body="The saddle junction between the Akiki and Ambangeg trails. Set up the stove and had a proper hot breakfast. Instant noodles and instant coffee at 2,700 m taste better than anything you&apos;ll eat in the city. Refueled and rested before the final push to the summit."
            />
            <TimelineItem
              time="9:20 AM"
              title="SUMMIT — 2,926 m"
              body="The top of Luzon. Wide open views of Benguet province, the surrounding peaks (Mt. Timbak, Mt. Tabayoc), and the sea of clouds far below. Shot everything: A7C on a tripod, drone up for passes over the summit ridge and down into the cloud layer, iPhone for the casual moments with the group. Stayed long enough to let it sink in."
              highlight
            />
            <TimelineItem
              time="11:30 AM"
              title="Back at Saddle Camp"
              body="Descended from the summit and set up for the rest day. At 2,700 m in March, midday tops out around 10°C. By late afternoon with wind: closer to 5°C. Rest, eat, hydrate, warm up. This is a full rest day — nowhere to be."
            />
            <TimelineItem
              time="4:00 AM (next morning)"
              title="Night Photography Session"
              body="Set a separate alarm for astrophotography. At this altitude with minimal light pollution, the Milky Way is clearly visible. The A7C absolutely earns its place in the pack here — high ISO performance at 2,700 m in sub-zero wind chill. Cold enough to be painful. Worth every second."
              highlight
            />
          </div>

          <CalloutCard icon="📸">
            <strong>Battery management at altitude:</strong> Cold drains camera and phone
            batteries significantly faster. Keep spare batteries in an inner pocket close
            to your body. Charge everything fully at basecamp the night before. The A7C
            handled the conditions well but burned through batteries quickly below 5°C.
          </CalloutCard>
        </div>

        {/* ─────────────────────────── */}
        {/* DAY 3                       */}
        {/* ─────────────────────────── */}
        <DayHeader
          day="3"
          date="March 6, Friday"
          title="Sea of Clouds"
          sub="Tower at Dawn · Sunrise Photography · Descent"
        />

        <div className={styles.dayContent}>
          <p className={styles.prose}>
            The last morning on the mountain. Cold, windy, and one of the best sunrises
            you will ever see.
          </p>

          <div className={styles.timeline}>
            <TimelineItem
              time="4:00 AM"
              title="Up for Night Shots"
              body="Second consecutive pre-dawn alarm. Layers back on — everything. Grabbed the A7C and headed out into the dark for wide-angle night sky shots before the blue hour started to fade."
            />
            <TimelineItem
              time="5:30 AM"
              title="PAGASA Tower — Sea of Clouds"
              body="Arrived at the weather observation tower just as the horizon started lightening. Below us: a complete, unbroken sea of clouds filling every valley across Benguet. Above: deep blue sky bleeding into orange. This is the view that sells Mt. Pulag. Shot everything — wide-angle, telephoto compression into the cloud layer, drone low over the edge of the sea of clouds, iPhone for the candid moments. Absolutely worth the second consecutive 4 AM wake-up."
              highlight
            />
            <TimelineItem
              time="7:00 AM"
              title="Pack Up and Descend"
              body="Broke camp, packed out all waste (DENR enforces leave-no-trace), and started the descent. The hike down reveals the scale of what you climbed — the valley floor takes a long time to reach. Knees feel every meter."
            />
          </div>

          <CalloutCard icon="🌤️">
            <strong>March is prime sea-of-clouds season.</strong> The dry season
            (January to April) gives the best chance of cloud inversion — clouds fill
            the valleys while the summit stays clear above. If the photography is the
            point, plan around this window.
          </CalloutCard>
        </div>

        <div className={styles.divider} />

        {/* ─────────────────────────── */}
        {/* GEAR                        */}
        {/* ─────────────────────────── */}
        <section className={styles.section} id="gear">
          <SectionHead icon="📷" label="Gear" title="What I Brought" />

          <div className={styles.gearGrid}>
            <div className={styles.gearCard}>
              <div className={styles.gearIcon}>📷</div>
              <div className={styles.gearName}>Sony A7C</div>
              <p className={styles.gearNote}>
                Full-frame mirrorless — the right choice for a hike like this. Compact
                enough to manage on the trail, exceptional in low light for pre-dawn and
                night shots. Pair it with a fast prime (35mm f/1.8 or 50mm f/1.4) for
                the night sky work. Cold degrades battery life fast — carry two spares in
                an inner pocket.
              </p>
            </div>
            <div className={styles.gearCard}>
              <div className={styles.gearIcon}>🚁</div>
              <div className={styles.gearName}>Drone</div>
              <p className={styles.gearNote}>
                The aerial shots of the summit ridge and sea of clouds are worth every
                gram in the pack. Register before the trip and confirm DENR and CAAP
                requirements for Mt. Pulag specifically. Wind at the summit is strong —
                fly carefully and keep the drone in visual range.
              </p>
            </div>
            <div className={styles.gearCard}>
              <div className={styles.gearIcon}>📱</div>
              <div className={styles.gearName}>iPhone</div>
              <p className={styles.gearNote}>
                Casual documentation throughout the hike — group shots, candid moments,
                quick video. Computational photography handles low-light situations
                decently and adds zero weight. Keep it in a waterproof case; the morning
                dew at Marlboro soaks everything.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────── */}
        {/* PHOTOS                      */}
        {/* ─────────────────────────── */}
        <section className={styles.section} id="photos">
          <SectionHead icon="🖼️" label="Photos" title="Trip Gallery" />
          <div className={styles.photoPlaceholder}>
            <span>📷 Photos coming soon</span>
          </div>
        </section>

        {/* ─────────────────────────── */}
        {/* LESSONS                     */}
        {/* ─────────────────────────── */}
        <section className={styles.section} id="lessons">
          <SectionHead icon="🧠" label="Lessons Learned" title="What the Trail Taught Me" />

          <div className={styles.lessons}>
            {([
              {
                icon: "⏱️",
                title: "Build slack into Day 1",
                body: "The DENR orientation will run late — it almost always does. If you start the actual hike at 12 PM instead of 10 AM, that two-hour difference means arriving at Marlboro in the cold and the dark. Budget for it.",
              },
              {
                icon: "🥾",
                title: "Train specifically for Eddet to Marlboro",
                body: "600 m of gain in 90 minutes with a full pack and no shade is its own category of hard. Stair climbs and loaded uphills in training are the closest approximation. If you show up undertrained, this section will be the defining memory of the trip.",
              },
              {
                icon: "🔋",
                title: "Cold kills batteries",
                body: "Camera and phone batteries discharge significantly faster below 10°C. Two spare camera batteries minimum, one kept warm in an inner pocket. Charge everything at basecamp the night before the summit push.",
              },
              {
                icon: "🌤️",
                title: "March for sea of clouds",
                body: "The cloud inversion that produces the iconic view from the tower is most reliable during dry season (January to April). If the photography is the reason you&apos;re going, plan the trip around this window.",
              },
              {
                icon: "🎒",
                title: "Use a porter for camera gear",
                body: "Carrying a full camera kit on top of a hiking pack through the killer climb is a different kind of suffering. Porters are affordable and local. Let them handle the extra load so you can actually enjoy the trail — and shoot more.",
              },
              {
                icon: "🌙",
                title: "The pre-dawn alarm is always worth it",
                body: "Every. Single. Time. Set the alarm, put on all your layers, walk out into the cold. The sea of clouds, the moon setting, the Milky Way — none of it is visible from inside your sleeping bag.",
              },
            ] as { icon: string; title: string; body: string }[]).map((lesson, i) => (
              <div key={i} className={styles.lessonItem}>
                <div className={styles.lessonIcon}>{lesson.icon}</div>
                <div>
                  <div className={styles.lessonTitle}>{lesson.title}</div>
                  <p className={styles.lessonBody}>{lesson.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <Footer
          icon="🏔️"
          title="Mt. Pulag via Akiki Trail"
          note="Trip completed March 4–6, 2026. GPX data from Strava. Photography: Sony A7C, DJI drone, iPhone. Summit elevation: 2,926 m."
        />

      </div>
    </div>
  );
}
