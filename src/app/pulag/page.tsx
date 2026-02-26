import { PageHero } from "@/components/hero/PageHero";
import { StickyNav } from "@/components/layout/StickyNav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/content/SectionHeader";
import { DayBlock } from "@/components/content/DayBlock";
import { Callout } from "@/components/content/Callout";
import { DataTable } from "@/components/content/DataTable";
import { RiskCard } from "@/components/content/RiskCard";
import { GearCategory } from "@/components/content/GearCategory";
import {
  navItems,
  heroBadges,
  routeNodes,
  overviewRows,
  flightCards,
  clarkToBaguioSchedule,
  clarkArrivalTimeline,
  baguioArrivalTimeline,
  eveningPrepRows,
  manilaTeamTimeline,
  day2EarlyMorningTimeline,
  meetingPoints,
  day3Timeline,
  day4Timeline,
  baguioToManilaSchedule,
  day5Timeline,
  makatAccomDetails,
  returnFlightDetails,
  day7Timeline,
  budgetRows,
  risks,
  checklistItems,
  gearDays,
  packingDays,
  contacts,
  baguioAccomOptions,
  type GearDayData,
  type BaguioAccomOption,
} from "@/data/pulag-travel";
import styles from "./page.module.css";

// ============================================================
// Sub-components
// ============================================================

function RouteFlow() {
  return (
    <div className={styles.routeFlow}>
      {routeNodes.map((node, i) => (
        <span key={i}>
          <span
            className={
              node.highlight
                ? `${styles.routeNode} ${styles.routeNodeHighlight}`
                : styles.routeNode
            }
          >
            {node.label}
          </span>
          {i < routeNodes.length - 1 && (
            <span className={styles.routeConnector}> &rarr; </span>
          )}
        </span>
      ))}
    </div>
  );
}

function ElevationBar({
  value,
  label,
  desc,
}: {
  value: string;
  label: string;
  desc: string;
}) {
  return (
    <div className={styles.elevationBar}>
      <div>
        <div className={styles.elevationValue}>{value}</div>
        <div className={styles.elevationLabel}>{label}</div>
      </div>
      <div className={styles.elevationDesc}>{desc}</div>
    </div>
  );
}

function PhaseLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.phaseLabel}>{children}</p>;
}

interface TimeRow {
  time: string;
  activity: string;
}

function ItineraryTable({ rows }: { rows: TimeRow[] }) {
  return (
    <DataTable>
      <table className={`${styles.table} ${styles.itinerary}`}>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.time}</td>
              <td>{row.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
  );
}

function GearDaySection({ day }: { day: GearDayData }) {
  return (
    <>
      {day.dividerBefore && <hr className={styles.gearDivider} />}
      <div className={styles.gearDayBlock}>
        <div className={styles.gearDayTitle}>{day.title}</div>
        <div className={styles.gearDaySubtitle}>{day.subtitle}</div>
        <div className={styles.gearGrid}>
          {day.categories.map((cat, i) => (
            <GearCategory
              key={i}
              icon={cat.icon}
              title={cat.title}
              items={cat.items}
              fullWidth={cat.fullWidth}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function BaguioAccomCard({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: BaguioAccomOption[];
}) {
  return (
    <div className={styles.accomCard}>
      <span className={styles.accomLocation}>{label}</span>
      <div className={styles.accomName}>{name}</div>
      <DataTable>
        <table className={styles.table} style={{ fontSize: "0.85rem" }}>
          <thead>
            <tr>
              <th>Option</th>
              <th>Area</th>
              <th>Approx. Rate</th>
            </tr>
          </thead>
          <tbody>
            {options.map((opt, i) => (
              <tr key={i} className={opt.recommended ? styles.busRecommended : ""}>
                <td>
                  <strong>{opt.name}</strong>
                  {opt.recommended && " 🌟"}
                </td>
                <td>{opt.area}</td>
                <td>{opt.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  );
}

// ============================================================
// Page
// ============================================================

export default function PulagTravelPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        icon="🏔️"
        title="Mt. Pulag"
        subtitle="Akiki Trail · Complete Travel Guide"
        badges={heroBadges}
      />

      {/* Hero extras: quote, intro, route */}
      <div style={{ background: "var(--bg-deep)", paddingBottom: "0.5rem" }}>
        <div className={styles.wrap} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <RouteFlow />
          <blockquote className={styles.heroQuote}>
            &ldquo;Above the sea of clouds, at 2,922 meters, the sun rises over
            the Philippines&rsquo; third highest peak.&rdquo;
          </blockquote>
          <p className={styles.heroIntro}>
            Fly from Cebu to Clark, bus to Baguio, rest overnight. Meet the
            Manila team early March 4, then trek Mt. Pulag via the infamous
            Akiki &ldquo;Killer Trail&rdquo; at 2,922 meters above sea level.
            Descend, tour Baguio, night bus to Manila, explore the city, and
            fly home. Seven days, one unforgettable adventure.
          </p>
        </div>
      </div>

      {/* STICKY NAV */}
      <StickyNav items={navItems} />

      <main className={styles.wrap}>

        {/* ============================================
            OVERVIEW
            ============================================ */}
        <section id="overview" className={styles.section}>
          <SectionHeader
            icon="🗺️"
            label="Trip Overview"
            title="Full Itinerary at a Glance"
          />

          <ElevationBar
            value="2,922 m"
            label="Summit Elevation"
            desc="Philippines' 3rd highest peak. Akiki Trail, Difficulty 7/9 (“The Killer Trail”). 10–11 hours of steep climbing through mossy forest."
          />

          <DataTable>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Plan</th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <strong>{row.day}</strong>
                    </td>
                    <td>{row.date}</td>
                    <td>{row.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <div className={styles.tempCompare}>
            <div className={`${styles.tempCard} ${styles.tempHot}`}>
              <div className={styles.tempValue}>30&deg;C+</div>
              <div className={styles.tempLocation}>Cebu (Departure)</div>
            </div>
            <div className={`${styles.tempCard} ${styles.tempCold}`}>
              <div className={styles.tempValue}>2&ndash;5&deg;C</div>
              <div className={styles.tempLocation}>Pulag Summit</div>
            </div>
          </div>

          <Callout variant="warning" icon="🚨" title="Temperature Shock">
            From Cebu&rsquo;s tropical heat to near-freezing summit temperatures.
            Recorded lows of -8&deg;C with wind chill. NO COTTON. Layer up with
            moisture-wicking base, fleece mid-layer, and windproof shell.
          </Callout>
        </section>

        {/* ============================================
            FLIGHTS
            ============================================ */}
        <section id="flights" className={styles.section}>
          <SectionHeader
            icon="🛫"
            label="Air Travel"
            title="Flight Details"
          />

          <div className={styles.flightGrid}>
            {flightCards.map((fc, i) => (
              <div key={i} className={styles.flightCard}>
                <span className={styles.flightLabel}>{fc.label}</span>
                <div className={styles.flightRoute}>{fc.route}</div>
                <div className={styles.flightDetail}>
                  Depart <strong>{fc.depart}</strong> &middot; Arrive{" "}
                  <strong>{fc.arrive}</strong>
                  <br />
                  {fc.duration} &middot; {fc.terminal}
                </div>
              </div>
            ))}
          </div>

          <Callout variant="tip" icon="💡" title="NAIA Terminal Guide">
            <strong>Cebu Pacific</strong> &rarr; Terminal 3 &middot;{" "}
            <strong>AirAsia</strong> &rarr; Terminal 2 &middot;{" "}
            <strong>Philippine Airlines</strong> &rarr; Terminal 2. Confirm the
            airline terminal before heading to the airport on March 9.
          </Callout>
        </section>

        {/* ============================================
            DAY 1
            ============================================ */}
        <section id="day1" className={styles.section}>
          <DayBlock
            day="01"
            title="Cebu → Clark → Baguio"
            subtitle="March 3, Tuesday"
            accent="var(--accent-frost)"
          >
            <PhaseLabel>Phase 1: Flight</PhaseLabel>
            <DataTable>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Detail</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Route</td>
                    <td>CEB (Mactan-Cebu) &rarr; CRK (Clark International)</td>
                  </tr>
                  <tr>
                    <td>Departure</td>
                    <td>6:20 AM</td>
                  </tr>
                  <tr>
                    <td>Arrival</td>
                    <td>7:45 AM</td>
                  </tr>
                  <tr>
                    <td>Flight Time</td>
                    <td>~1 hour 25 minutes</td>
                  </tr>
                  <tr>
                    <td>Terminal</td>
                    <td>Clark Terminal 2</td>
                  </tr>
                </tbody>
              </table>
            </DataTable>

            <Callout variant="tip" icon="💡" title="Before the Flight">
              Be at Mactan-Cebu Airport by <strong>4:30 AM</strong> (2 hours
              early). Leave Mandaue/Cebu by{" "}
              <strong>3:45&ndash;4:00 AM</strong>. Bring a{" "}
              <strong>jacket/hoodie</strong> in carry-on. Eat breakfast at the
              airport or bring snacks.
            </Callout>

            <PhaseLabel>Phase 2: Clark Airport &rarr; Bus to Baguio</PhaseLabel>
            <p className={`${styles.textSecondary} ${styles.textSm}`}>
              <strong>Genesis Transport (JoyBus)</strong> operates direct buses
              from Clark Airport Terminal 2, Arrival Area Bus Station. No
              transfers needed.
            </p>

            <div className={styles.mt1}>
              <ItineraryTable rows={clarkArrivalTimeline} />
            </div>

            <h4 className={`${styles.mt2} ${styles.mb1}`}>
              Clark Airport &rarr; Baguio Bus Schedule
            </h4>
            <DataTable>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Departure</th>
                    <th>Bus Type</th>
                    <th>Fare (each)</th>
                  </tr>
                </thead>
                <tbody>
                  {clarkToBaguioSchedule.map((row, i) => (
                    <tr
                      key={i}
                      className={row.recommended ? styles.busRecommended : ""}
                    >
                      <td>{row.time}</td>
                      <td>{row.type}</td>
                      <td>{row.fare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DataTable>
            <p className={`${styles.textXs} ${styles.textMuted} ${styles.mt1}`}>
              Source: Genesis Transport Service Inc., updated Sept 2025. Verify
              on their Facebook page before travel.
            </p>

            <Callout
              variant="success"
              icon="🏆"
              title="Best Option: 9:30 AM JoyBus Executive (₱620 × 2 = ₱1,240)"
            >
              ~1h 45min buffer after landing. 28 seats (2&times;1 config),
              onboard restroom, WiFi, wider legroom, water, snacks. Arrives
              Baguio ~12:30&ndash;1:30 PM. <strong>Book seats in advance</strong>,
              only 28 per bus.
            </Callout>

            <Callout variant="info" icon="📄" title="How to Buy Tickets">
              <strong>Online (recommended):</strong> iwantseats.com or
              pinoytravel.com.ph. Book days before to guarantee seats.{" "}
              <strong>Walk-in:</strong> Clark Airport bus station (backup).
            </Callout>

            <Callout
              variant="warning"
              icon="🚨"
              title="Emergency Backup"
            >
              If buses are full: Grab/taxi from Clark Airport to{" "}
              <strong>Dau Terminal</strong> (~15&ndash;20 min,
              ~&#8369;150&ndash;200). Victory Liner and Philippine Rabbit buses
              head to Baguio roughly every hour. Not P2P (stops along the way),
              ~4&ndash;5 hours travel time.
            </Callout>

            <PhaseLabel>Phase 3: Arrival &amp; Afternoon in Baguio</PhaseLabel>
            <p className={`${styles.textSecondary} ${styles.textSm}`}>
              Bus drops off at{" "}
              <strong>36 Governor Pack Road</strong>, right along Session Road
              and just below SM City Baguio.
            </p>

            <div className={styles.mt1}>
              <ItineraryTable rows={baguioArrivalTimeline} />
            </div>

            <Callout
              variant="success"
              icon="💤"
              title="Timing Note"
            >
              The Manila team doesn&rsquo;t leave until{" "}
              <strong>midnight tonight</strong> and won&rsquo;t arrive until
              ~5:00 AM March 4. Plenty of time to explore in the afternoon and
              get a full night of sleep.
            </Callout>

            <h4 className={`${styles.mt2} ${styles.mb1}`}>
              Where to Stay in Baguio
            </h4>
            <BaguioAccomCard
              label="Accommodation Needed · March 3 (1 night)"
              name="Night Before the Hike"
              options={baguioAccomOptions}
            />
            <Callout variant="warning" icon="⏰" title="Early Checkout — 4:00 AM">
              You&rsquo;ll be up by <strong>4:00 AM</strong> to meet the Manila
              team. Choose a hotel with <strong>24-hour reception</strong> and
              confirm early departure is fine. Keep bags fully packed the night
              before.
            </Callout>

            <PhaseLabel>Phase 4: Evening Preparation</PhaseLabel>
            <DataTable>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {eveningPrepRows.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{row.time}</strong>
                      </td>
                      <td>{row.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DataTable>
          </DayBlock>
        </section>

        {/* ============================================
            DAY 2
            ============================================ */}
        <section id="day2" className={styles.section}>
          <DayBlock
            day="02"
            title="Meet Team &amp; Head to Mt. Pulag"
            subtitle="March 4, Wednesday"
            accent="var(--accent-pine)"
          >
            <PhaseLabel>Manila Team&rsquo;s Timeline</PhaseLabel>
            <ItineraryTable rows={manilaTeamTimeline} />

            <PhaseLabel>Early Morning</PhaseLabel>
            <ItineraryTable rows={day2EarlyMorningTimeline} />

            <h4 className={`${styles.mt2} ${styles.mb1}`}>
              Meeting Points by Bus Company
            </h4>
            <DataTable>
              <table className={`${styles.table} ${styles.meetingTable}`}>
                <thead>
                  <tr>
                    <th>If They&rsquo;re On&hellip;</th>
                    <th>They Arrive At&hellip;</th>
                  </tr>
                </thead>
                <tbody>
                  {meetingPoints.map((mp, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{mp.bus}</strong>
                      </td>
                      <td>{mp.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DataTable>

            <Callout variant="tip" icon="💡" title="Coordinate Pickup">
              If the tour group has a designated pickup spot (e.g., Old
              Slaughterhouse Compound for the monster jeep), use that instead of
              waiting at the bus terminal.
            </Callout>
          </DayBlock>
        </section>

        {/* ============================================
            DAY 3
            ============================================ */}
        <section id="day3" className={styles.section}>
          <DayBlock
            day="03"
            title="Summit Day"
            subtitle="March 5, Thursday"
            accent="var(--accent-summit)"
          >
            <ElevationBar
              value="2,922 m"
              label="Above Sea Level"
              desc="The highest point of the journey. Sunrise above the sea of clouds at the Philippines' third highest peak."
            />

            <div className={styles.mt2}>
              <ItineraryTable rows={day3Timeline} />
            </div>

            <Callout
              variant="warning"
              icon="🚨"
              title="Summit Conditions"
            >
              Temperature at the summit: <strong>2&ndash;5&deg;C</strong>,
              recorded lows of <strong>-8&deg;C</strong>. Wind chill makes it
              feel even colder. Keep camera and drone batteries warm inside
              jacket pockets. NO COTTON.
            </Callout>

            <Callout variant="tip" icon="📷" title="Photography Tip">
              The sea of clouds is best at dawn. Have the camera ready before
              sunrise. Cold batteries drain fast: keep spares in an inner pocket
              close to body heat.
            </Callout>
          </DayBlock>
        </section>

        {/* ============================================
            DAY 4
            ============================================ */}
        <section id="day4" className={styles.section}>
          <DayBlock
            day="04"
            title="Descend &amp; Return to Baguio"
            subtitle="March 6, Friday"
            accent="var(--accent-campfire)"
          >
            <ItineraryTable rows={day4Timeline} />

            <Callout
              variant="warning"
              icon="🍲"
              title="Post-Trek Recovery"
            >
              After 2 days on the trail, a hot shower and a real meal are well
              deserved. Baguio&rsquo;s restaurants along Session Road are
              waiting. Rest well tonight for tomorrow&rsquo;s city tour.
            </Callout>

            <h4 className={`${styles.mt2} ${styles.mb1}`}>
              Where to Stay — Return Night
            </h4>
            <BaguioAccomCard
              label="Accommodation Needed · March 6 (1 night)"
              name="Recovery Night After Pulag"
              options={baguioAccomOptions}
            />
            <Callout variant="tip" icon="💡" title="Book the Same Hotel for Both Baguio Nights">
              The simplest option is to use the same hotel for March 3 and
              March 6. Leave your city clothes bag there while on the hike
              &mdash; pick it up when you return on Day 4. Confirm the hotel
              allows <strong>luggage storage</strong> during your absence.
            </Callout>
          </DayBlock>
        </section>

        {/* ============================================
            DAY 5
            ============================================ */}
        <section id="day5" className={styles.section}>
          <DayBlock
            day="05"
            title="Baguio City Tour &amp; Bus to Manila"
            subtitle="March 7, Saturday"
            accent="var(--accent-trail)"
          >
            <PhaseLabel>Daytime: Baguio Exploration</PhaseLabel>
            <p className={`${styles.textSecondary} ${styles.textSm}`}>
              Full day to enjoy Baguio before the evening bus. Burnham Park,
              Mines View Park, The Mansion, BenCab Museum, Tam-awan Village,
              Camp John Hay, Baguio Market, ukay-ukay shopping.
            </p>

            <PhaseLabel>Evening: Bus to Manila (Cubao)</PhaseLabel>
            <p className={`${styles.textSecondary} ${styles.textSm}`}>
              Departs from{" "}
              <strong>36 Governor Pack Road</strong> (same terminal as arrival).
            </p>

            <div className={styles.mt1}>
              <DataTable>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Departure</th>
                      <th>Class</th>
                      <th>Fare (each)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {baguioToManilaSchedule.map((row, i) => (
                      <tr
                        key={i}
                        className={row.recommended ? styles.busRecommended : ""}
                      >
                        <td>{row.time}</td>
                        <td>{row.type}</td>
                        <td>{row.fare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DataTable>
            </div>

            <Callout
              variant="success"
              icon="🏆"
              title="Recommended: 7:00 PM Deluxe (₱720 × 2 = ₱1,440)"
            >
              Full day for sightseeing. Night travel = less traffic. Arrives
              Cubao ~12:00 midnight.{" "}
              <strong>Book seats in advance</strong> &mdash; Saturday evening
              buses sell out fast.
            </Callout>

            <p className={`${styles.textSecondary} ${styles.textSm} ${styles.mt1}`}>
              <strong>Drop-off:</strong> Genesis/JoyBus Cubao Terminal, EDSA
              corner New York Avenue
            </p>

            <PhaseLabel>Day 5 Timeline</PhaseLabel>
            <ItineraryTable rows={day5Timeline} />
          </DayBlock>
        </section>

        {/* ============================================
            DAY 6
            ============================================ */}
        <section id="day6" className={styles.section}>
          <DayBlock
            day="06"
            title="Manila Day"
            subtitle="March 8, Sunday"
            accent="var(--accent-ridge)"
          >
            <p className={styles.textSecondary}>
              Full day to explore Manila. No rush: the flight isn&rsquo;t until
              the next afternoon.
            </p>

            <div className={styles.accomCard}>
              <span className={styles.accomLocation}>
                Confirmed Accommodation &middot; March 7&ndash;9 &middot; 2 Nights
              </span>
              <div className={styles.accomName}>Makati Diamond Residences</div>
              <DataTable>
                <table className={styles.table} style={{ fontSize: "0.85rem" }}>
                  <tbody>
                    {makatAccomDetails.map((row, i) => (
                      <tr key={i}>
                        <td>
                          <strong>{row.time}</strong>
                        </td>
                        <td>{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DataTable>
            </div>

            <Callout variant="success" icon="📍" title="Great Location">
              Legazpi Village, Makati. Walkable to restaurants, malls
              (Greenbelt, Glorietta), and nightlife along Poblacion. Easy Grab
              access to NAIA the next day.
            </Callout>
          </DayBlock>
        </section>

        {/* ============================================
            DAY 7
            ============================================ */}
        <section id="day7" className={styles.section}>
          <DayBlock
            day="07"
            title="Fly Home to Cebu"
            subtitle="March 9, Monday"
            accent="var(--accent-stone)"
          >
            <DataTable>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Detail</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  {returnFlightDetails.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{row.time}</strong>
                      </td>
                      <td>{row.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DataTable>

            <PhaseLabel>Day 7 Timeline</PhaseLabel>
            <ItineraryTable rows={day7Timeline} />

            <Callout variant="tip" icon="💡" title="NAIA Terminal Note">
              <strong>Cebu Pacific</strong> &rarr; Terminal 3 &middot;{" "}
              <strong>AirAsia</strong> &rarr; Terminal 2 &middot;{" "}
              <strong>Philippine Airlines</strong> &rarr; Terminal 2
            </Callout>
          </DayBlock>
        </section>

        {/* ============================================
            BUDGET
            ============================================ */}
        <section id="budget" className={styles.section}>
          <SectionHeader
            icon="💰"
            label="Expenses"
            title="Budget Estimate"
          />

          <p className={`${styles.textSecondary} ${styles.textSm} ${styles.mb2}`}>
            2 passengers. Travel and accommodation only (excludes flights and
            Mt. Pulag tour fees).
          </p>

          <DataTable>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (2 pax)</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, i) => (
                  <tr
                    key={i}
                    className={row.isTotal ? styles.budgetTotal : ""}
                  >
                    <td>
                      {row.isTotal ? (
                        <strong>{row.item}</strong>
                      ) : (
                        row.item
                      )}
                    </td>
                    <td>
                      {row.isTotal ? (
                        <strong>{row.cost}</strong>
                      ) : (
                        row.cost
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <p className={`${styles.textXs} ${styles.textMuted} ${styles.mt1}`}>
            Not included: CEB&rarr;CRK flights, MNL&rarr;CEB flights, Mt. Pulag
            tour package/fees, trek meals/supplies.
          </p>
        </section>

        {/* ============================================
            RISKS
            ============================================ */}
        <section id="risks" className={styles.section}>
          <SectionHeader
            icon="🚨"
            label="Risk Assessment"
            title="What Could Go Wrong"
          />

          <div className={styles.riskGrid}>
            {risks.map((risk, i) => (
              <RiskCard
                key={i}
                title={risk.title}
                severity={risk.severity}
                description={risk.description}
                mitigation={risk.mitigation}
              />
            ))}
          </div>
        </section>

        {/* ============================================
            PRE-TRIP CHECKLIST
            ============================================ */}
        <section id="checklist" className={styles.section}>
          <SectionHeader
            icon="✅"
            label="Before the Trip"
            title="Pre-Trip Actions Checklist"
          />

          <ul className={styles.checklist}>
            {checklistItems.map((item, i) => (
              <li key={i}>
                <span className={styles.checkMark} aria-hidden="true">
                  &#10003;
                </span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </section>

        {/* ============================================
            GEAR CHECKLIST
            ============================================ */}
        <section id="gear" className={styles.section}>
          <SectionHeader
            icon="🧳"
            label="What to Pack"
            title="Gear Checklist"
          />

          {gearDays.map((day, i) => (
            <GearDaySection key={i} day={day} />
          ))}
        </section>

        {/* ============================================
            PACKING GUIDE (Non-hike days)
            ============================================ */}
        <section id="packing" className={styles.section}>
          <SectionHeader
            icon="🧳"
            label="Travel Days"
            title="Packing Guide"
          />

          <p
            className={`${styles.textSecondary} ${styles.textSm}`}
            style={{ marginBottom: "1.5rem" }}
          >
            Clothing and essentials for the 4 non-hiking days. Pack these in a
            separate compartment or packing cube so they stay clean during the
            trek.
          </p>

          {packingDays.map((day, i) => (
            <GearDaySection key={i} day={day} />
          ))}
        </section>

        {/* ============================================
            CONTACTS
            ============================================ */}
        <section id="contacts" className={styles.section}>
          <SectionHeader
            icon="📞"
            label="Directory"
            title="Important Contacts &amp; Links"
          />

          <DataTable>
            <table className={`${styles.table} ${styles.contactsTable}`}>
              <thead>
                <tr>
                  <th>What</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr key={i}>
                    <td>
                      <strong>{c.what}</strong>
                    </td>
                    <td>{c.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </section>
      </main>

      <Footer
        icon="🏔️"
        title="Safe travels and enjoy Mt. Pulag!"
        note="2,922 meters above sea level."
      />
    </>
  );
}
