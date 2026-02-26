import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { StickyNav } from "@/components/layout/StickyNav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/content/SectionHeader";
import { DataTable } from "@/components/content/DataTable";
import { Callout } from "@/components/content/Callout";
import {
  hikeHero,
  navItems,
  trailSegments,
  elevStops,
  // Day 1
  day1PreTrekRows,
  day1TravelRows,
  seg1Info,
  seg1ClothingCard,
  seg1CameraCard,
  seg1TrekRows,
  eddetRiverRestRows,
  seg2Info,
  seg2ClothingCard,
  seg2CameraCard,
  seg2TrekRows,
  camp1ClothingCard,
  camp1CameraCard,
  camp1EveningRows,
  // Day 2
  seg3Info,
  seg3ClothingCard,
  seg3CameraCard,
  seg3TrekRows,
  seg4Info,
  seg4ClothingCard,
  seg4CameraCard,
  seg4TrekRows,
  seg5Info,
  seg5ClothingCard,
  seg5CameraCard,
  seg5TrekRows,
  seg6Info,
  seg6ClothingCard,
  seg6CameraCard,
  seg6SummitRows,
  camp2ClothingCard,
  camp2CameraCard,
  camp2EveningRows,
  preDawnClothingCard,
  preDawnCameraCard,
  preDawnSummitRows,
  // Day 3
  seg7Info,
  seg7ClothingCard,
  seg7CameraCard,
  seg7DescentRows,
  returnToBaguioRows,
  // Summary & Reminders
  summaryRows,
  keyReminders,
  type TimeRow,
  type InfoCard,
  type SegmentInfo,
  type ElevStop,
} from "@/data/pulag-hike";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mt. Pulag Hike Itinerary",
};

// ============================================================
// Sub-components (defined locally for this page)
// ============================================================

// Segment Header
function SegmentHeader({ info }: { info: SegmentInfo }) {
  const accentColor = `var(${info.accentVar})`;
  const accentDimColor = `var(${info.accentVar}-dim)`;
  return (
    <div className={styles.segmentHeader}>
      <div
        className={styles.segmentNum}
        style={{ background: accentDimColor, color: accentColor }}
      >
        {info.num}
      </div>
      <div>
        <p className={styles.segTitle}>{info.title}</p>
        <p className={styles.segStats}>{info.stats}</p>
      </div>
    </div>
  );
}

// Info Card (Clothing or Camera)
function InfoCardBlock({ card, type }: { card: InfoCard; type: "clothing" | "camera" }) {
  return (
    <div className={`${styles.infoCard} ${styles[type]}`}>
      <div className={styles.cardLabel}>{card.label}</div>
      {card.intro && <p className={styles.cardIntro}>{card.intro}</p>}

      {/* Flat items list */}
      {card.items.length > 0 && (
        <ul className={styles.cardList}>
          {card.items.map((item, i) => (
            <li key={i}>
              {item.label && <strong>{item.label}:</strong>} {item.text}
            </li>
          ))}
        </ul>
      )}

      {/* Sublabeled groups */}
      {card.sublabels?.map((group, gi) => (
        <div key={gi}>
          <div className={styles.cardSublabel}>{group.label}</div>
          <ul className={styles.cardList}>
            {group.items.map((item, ii) => (
              <li key={ii}>
                {item.label && <strong>{item.label}:</strong>} {item.text}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {card.tip && <div className={styles.cardTip}>{card.tip}</div>}
    </div>
  );
}

// Hike Table (4-column time / activity / terrain / notes, or 3-column)
function HikeTable({
  rows,
  hasTerrain = false,
  className,
}: {
  rows: TimeRow[];
  hasTerrain?: boolean;
  className?: string;
}) {
  return (
    <DataTable>
      <table className={`${styles.hikeTable} ${className ?? ""}`}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            {hasTerrain && <th>Terrain</th>}
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const rowClass = row.rowStyle ? styles[`row${capitalize(row.rowStyle)}`] : "";
            return (
              <tr key={i} className={rowClass}>
                <td>{row.time}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: row.activity.replace(
                      /\*\*(.+?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
                {hasTerrain && <td>{row.terrain ?? ""}</td>}
                <td>{row.notes ?? ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </DataTable>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Callout strip (styled like old HTML callout, different from shared Callout component)
function CalloutStrip({
  color,
  children,
}: {
  color: "gold" | "emerald" | "sky" | "rose";
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.calloutStrip} ${styles[color]}`}>{children}</div>
  );
}

// Elevation stop row
function ElevStopRow({ stop }: { stop: ElevStop }) {
  const color = `var(${stop.accentVar})`;
  const dimColor = `var(${stop.accentVar}-dim)`;
  return (
    <div className={`${styles.elevStop} ${stop.isKillerNote ? styles.killerNote : ""}`}>
      <div className={styles.stopElev} style={{ color }}>
        {stop.elev}
      </div>
      <div className={styles.stopIcon} style={{ background: dimColor }}>
        {stop.icon}
      </div>
      <div className={styles.stopInfo}>
        <div className={styles.stopName}>{stop.name}</div>
        <div className={styles.stopDetail}>{stop.detail}</div>
        {stop.barWidth !== undefined && (
          <div className={styles.elevBar}>
            <div
              className={styles.elevBarFill}
              style={{ width: `${stop.barWidth}%`, background: color }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// PAGE
// ============================================================

export default function PulagHikePage() {
  return (
    <div data-theme="pulag-hike">
      <div className={styles.wrap}>

        {/* HERO */}
        <PageHero
          icon={hikeHero.icon}
          title={hikeHero.title}
          subtitle={hikeHero.subtitle}
          badges={hikeHero.badges}
        />

        {/* STICKY NAV */}
        <StickyNav items={navItems} />

        {/* ============================================================ */}
        {/* TRAIL OVERVIEW                                                */}
        {/* ============================================================ */}
        <section className={styles.section} id="overview">
          <SectionHeader
            icon="🗺️"
            label="Trail Overview"
            title="What You'll Pass Through"
          />

          <DataTable>
            <table className={`${styles.hikeTable} ${styles.overviewTable}`}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>From → To</th>
                  <th>Time</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Net</th>
                  <th>↑ Gain</th>
                  <th>↓ Loss</th>
                  <th>Character</th>
                </tr>
              </thead>
              <tbody>
                {trailSegments.map((seg) => (
                  <tr key={seg.num}>
                    <td>
                      <strong>{seg.num}</strong>
                    </td>
                    <td className={seg.isKiller ? styles.killerCell : undefined}>
                      {seg.from} → {seg.to}
                    </td>
                    <td>{seg.time}</td>
                    <td>{seg.startElev}</td>
                    <td>{seg.endElev}</td>
                    <td>{seg.net}</td>
                    <td>{seg.gain}</td>
                    <td>{seg.loss}</td>
                    <td className={seg.isKiller ? styles.killerCell : undefined}>
                      {seg.character}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <CalloutStrip color="gold">
            <strong>Total Trek: ↑ 1,956m gain / ↓ 955m loss</strong> (from GPX data){" "}
            &nbsp;|&nbsp; <strong>17 km total</strong>
          </CalloutStrip>
        </section>

        {/* ============================================================ */}
        {/* ELEVATION PROFILE                                             */}
        {/* ============================================================ */}
        <section className={styles.section} id="elevation">
          <div className={styles.elevProfile}>
            <h2 className={styles.elevProfileTitle}>
              Quick Reference: Elevation Profile
            </h2>
            <div className={styles.elevStops}>
              {elevStops.map((stop, i) => (
                <div key={i}>
                  <ElevStopRow stop={stop} />
                  {i < elevStops.length - 1 && (
                    <div className={styles.elevConnector} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* DAY 1                                                         */}
        {/* ============================================================ */}
        <div className={`${styles.dayHeader} ${styles.day1}`} id="day1">
          <div className={styles.dayLabel}>Day 1 — March 4 (Wednesday)</div>
          <h2 className={styles.dayTitle}>Travel + Trek to Camp</h2>
          <div className={styles.dayDesc}>
            Baguio → DENR → Akiki Ranger Station → Eddet River → Marlboro Country
          </div>
        </div>

        {/* Pre-Trek */}
        <div className={styles.sectionTitle}>Pre-Trek: Baguio → Mt. Pulag</div>
        <HikeTable rows={day1PreTrekRows} />

        <div className={styles.subsectionTitle}>
          Travel: Baguio → DENR → Akiki Ranger Station
        </div>
        <HikeTable rows={day1TravelRows} />

        <div className={styles.divider} />

        {/* Segment 1 */}
        <SegmentHeader info={seg1Info} />
        <InfoCardBlock card={seg1ClothingCard} type="clothing" />
        <InfoCardBlock card={seg1CameraCard} type="camera" />
        <HikeTable rows={seg1TrekRows} hasTerrain />

        {/* Eddet River rest */}
        <div className={styles.subsectionTitle}>Eddet River Rest Stop (30–60 min)</div>
        <HikeTable rows={eddetRiverRestRows} />
        <Callout variant="warning" title="Warning">
          <strong>Don&apos;t stay too long</strong> — the hard part is next. The killer climb
          starts after here.
        </Callout>

        <div className={styles.divider} />

        {/* Segment 2 */}
        <SegmentHeader info={seg2Info} />
        <InfoCardBlock card={seg2ClothingCard} type="clothing" />
        <InfoCardBlock card={seg2CameraCard} type="camera" />
        <HikeTable rows={seg2TrekRows} hasTerrain />

        <div className={styles.divider} />

        {/* Camp 1: Marlboro Country */}
        <div className={styles.sectionTitle}>Camp 1: Marlboro Country — Overnight</div>
        <InfoCardBlock card={camp1ClothingCard} type="clothing" />
        <InfoCardBlock card={camp1CameraCard} type="camera" />
        <HikeTable rows={camp1EveningRows} />

        {/* ============================================================ */}
        {/* DAY 2                                                         */}
        {/* ============================================================ */}
        <div className={`${styles.dayHeader} ${styles.day2}`} id="day2">
          <div className={styles.dayLabel}>Day 2 — March 5 (Thursday)</div>
          <h2 className={styles.dayTitle}>Summit Day</h2>
          <div className={styles.dayDesc}>
            Marlboro Country → Mossy Forest → Grassland → Saddle Camp → Summit → Pre-Dawn Return
          </div>
        </div>

        {/* Segment 3 */}
        <SegmentHeader info={seg3Info} />
        <InfoCardBlock card={seg3ClothingCard} type="clothing" />
        <InfoCardBlock card={seg3CameraCard} type="camera" />
        <HikeTable rows={seg3TrekRows} hasTerrain />

        <div className={styles.divider} />

        {/* Segment 4 */}
        <SegmentHeader info={seg4Info} />
        <InfoCardBlock card={seg4ClothingCard} type="clothing" />
        <InfoCardBlock card={seg4CameraCard} type="camera" />
        <HikeTable rows={seg4TrekRows} hasTerrain />

        <div className={styles.divider} />

        {/* Segment 5 */}
        <SegmentHeader info={seg5Info} />
        <InfoCardBlock card={seg5ClothingCard} type="clothing" />
        <InfoCardBlock card={seg5CameraCard} type="camera" />
        <HikeTable rows={seg5TrekRows} hasTerrain />

        <div className={styles.divider} />

        {/* Segment 6 — Summit */}
        <SegmentHeader info={seg6Info} />
        <InfoCardBlock card={seg6ClothingCard} type="clothing" />
        <InfoCardBlock card={seg6CameraCard} type="camera" />
        <HikeTable rows={seg6SummitRows} />

        <div className={styles.divider} />

        {/* Saddle Camp Evening */}
        <div className={styles.sectionTitle}>Saddle Camp — Evening (Camp 2)</div>
        <InfoCardBlock card={camp2ClothingCard} type="clothing" />
        <InfoCardBlock card={camp2CameraCard} type="camera" />
        <HikeTable rows={camp2EveningRows} />

        <div className={styles.divider} />

        {/* Pre-Dawn Summit Return */}
        <div className={styles.sectionTitle}>
          Pre-Dawn Summit Return — HIGHLY Recommended
        </div>
        <InfoCardBlock card={preDawnClothingCard} type="clothing" />
        <InfoCardBlock card={preDawnCameraCard} type="camera" />
        <HikeTable rows={preDawnSummitRows} />

        {/* ============================================================ */}
        {/* DAY 3                                                         */}
        {/* ============================================================ */}
        <div className={`${styles.dayHeader} ${styles.day3}`} id="day3">
          <div className={styles.dayLabel}>Day 3 — March 6 (Friday)</div>
          <h2 className={styles.dayTitle}>Descend &amp; Return to Baguio</h2>
          <div className={styles.dayDesc}>
            Saddle Camp → Ambangeg Descent → Babadak Ranger Station → Baguio
          </div>
        </div>

        {/* Segment 7 */}
        <SegmentHeader info={seg7Info} />
        <InfoCardBlock card={seg7ClothingCard} type="clothing" />
        <InfoCardBlock card={seg7CameraCard} type="camera" />
        <HikeTable rows={seg7DescentRows} hasTerrain />

        <div className={styles.divider} />

        {/* Return to Baguio */}
        <div className={styles.sectionTitle}>Ranger Station → Baguio</div>
        <HikeTable rows={returnToBaguioRows} />

        {/* ============================================================ */}
        {/* SUMMARY                                                       */}
        {/* ============================================================ */}
        <section className={styles.section} id="summary">
          <SectionHeader
            icon="🕐"
            label="Trek Summary"
            title="Time &amp; Elevation Summary"
          />

          <DataTable>
            <table className={`${styles.hikeTable} ${styles.summaryTable}`}>
              <thead>
                <tr>
                  <th>Segment</th>
                  <th>Day</th>
                  <th>Est. Time</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Net</th>
                  <th>↑ Gain</th>
                  <th>↓ Loss</th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((row, i) => (
                  <tr key={i} className={row.isTotals ? styles.totalsRow : undefined}>
                    <td>
                      {row.isTotals ? <strong>{row.segment}</strong> : row.segment}
                    </td>
                    <td>{row.day}</td>
                    <td>
                      {row.isTotals ? <strong>{row.time}</strong> : row.time}
                    </td>
                    <td>{row.start}</td>
                    <td>{row.end}</td>
                    <td>{row.net}</td>
                    <td>
                      {row.isTotals ? <strong>{row.gain}</strong> : row.gain}
                    </td>
                    <td>
                      {row.isTotals ? <strong>{row.loss}</strong> : row.loss}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <CalloutStrip color="emerald">
            <em>Elevation data from your Strava GPX file (17 km route).</em>
          </CalloutStrip>
        </section>

        {/* ============================================================ */}
        {/* KEY REMINDERS                                                 */}
        {/* ============================================================ */}
        <section className={styles.section} id="reminders">
          <SectionHeader
            icon="🧠"
            label="Key Reminders"
            title="What to Remember on the Trail"
          />

          <div className={styles.reminders}>
            {keyReminders.map((reminder, i) => (
              <div key={i} className={styles.reminderItem}>
                <div className={styles.reminderIcon}>{reminder.icon}</div>
                <div>
                  <div className={styles.reminderTitle}>{reminder.title}</div>
                  <div className={styles.reminderBody}>{reminder.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <Footer
          icon="🏔️"
          title="Mt. Pulag Hike Itinerary"
          note="Elevation data sourced from Strava GPX (17 km). All clothing and camera notes tailored to March conditions at Mt. Pulag with Sony a7C2 + 28-200mm. Last updated: February 23, 2026"
        />
      </div>
    </div>
  );
}
