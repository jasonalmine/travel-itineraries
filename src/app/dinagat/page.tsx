import { PageHero } from "@/components/hero/PageHero";
import { StickyNav } from "@/components/layout/StickyNav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/content/SectionHeader";
import { DayBlock } from "@/components/content/DayBlock";
import { Callout } from "@/components/content/Callout";
import { DataTable } from "@/components/content/DataTable";
import { Card } from "@/components/content/Card";

import {
  heroBadges,
  crewMembers,
  heroQuote,
  heroIntro,
  navItems,
  overviewRows,
  ferryRows,
  accommodationSections,
  spotTiers,
  days,
  photoSpots,
  cameraSettings,
  budgetRows,
  packingCategories,
  carrierRows,
  connectivityRows,
  tips,
  circuits,
  contactRows,
} from "@/data/dinagat";

import styles from "./page.module.css";

// =============================================
// BADGE HELPER
// =============================================
function BadgeVariant({ variant, text }: { variant: string; text: string }) {
  const cls =
    variant === "turquoise"
      ? styles.badgeTurquoise
      : variant === "palm"
      ? styles.badgePalm
      : variant === "lagoon"
      ? styles.badgeLagoon
      : variant === "sand"
      ? styles.badgeSand
      : variant === "coral"
      ? styles.badgeCoral
      : styles.badgeSunset;
  return <span className={`${styles.badge} ${cls}`}>{text}</span>;
}

// =============================================
// TIER LABEL HELPER
// =============================================
function TierLabel({ icon, label, tierClass }: { icon: string; label: string; tierClass: string }) {
  const cls =
    tierClass === "tier-1"
      ? styles.tier1
      : tierClass === "tier-2"
      ? styles.tier2
      : tierClass === "tier-islands"
      ? styles.tierIslands
      : tierClass === "tier-cultural"
      ? styles.tierCultural
      : styles.tierHidden;
  return (
    <div className={`${styles.tierLabel} ${cls}`}>
      {icon} {label}
    </div>
  );
}

// =============================================
// PAGE COMPONENT
// =============================================
export default function DinagatPage() {
  return (
    <div className={styles.page}>
      {/* =========================================
          HERO
          ========================================= */}
      <PageHero
        icon="🏝️"
        title="Dinagat Islands"
        subtitle="The Mystical Last Frontier"
        badges={heroBadges}
      />

      {/* Crew + Quote + Intro inside hero-styled wrapper */}
      <div style={{ background: "var(--bg-deep)", padding: "0 1.25rem 2rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Travel Crew */}
          <div className={styles.crewGrid}>
            {crewMembers.map((member) => (
              <div key={member.initials} className={styles.crewMember}>
                <div
                  className={styles.crewAvatar}
                  style={{ background: member.accentDim, color: member.accent }}
                >
                  {member.initials}
                </div>
                <span className={styles.crewName}>{member.name}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className={styles.heroQuote}>{heroQuote}</blockquote>

          {/* Intro */}
          <p className={styles.heroIntro}>{heroIntro}</p>
        </div>
      </div>

      {/* =========================================
          STICKY NAV
          ========================================= */}
      <StickyNav items={navItems} />

      {/* =========================================
          MAIN CONTENT
          ========================================= */}
      <div className={styles.content}>

        {/* =========================================
            TRIP OVERVIEW
            ========================================= */}
        <section id="overview">
          <SectionHeader icon="📋" label="At a Glance" title="Trip Overview" />
          <DataTable>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.detail}</td>
                    <td>
                      {row.badge && (
                        <BadgeVariant variant={row.badge.variant} text={row.badge.text} />
                      )}{" "}
                      {row.highlight === "palm" ? (
                        <span className={styles.textPalm}>{row.info}</span>
                      ) : row.highlight === "coral" ? (
                        <strong className={styles.textCoral}>{row.info}</strong>
                      ) : (
                        row.info
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </section>

        {/* =========================================
            HOW TO GET THERE
            ========================================= */}
        <section id="getting-there">
          <SectionHeader icon="🗺️" label="Transit Guide" title="How to Get There" />

          <div className={`${styles.twoCol} ${styles.mb2}`}>
            <Card>
              <h4 className={styles.textTurquoise} style={{ marginBottom: "0.5rem" }}>
                🛫 Cebu → Surigao Airport
              </h4>
              <p className="text-secondary" style={{ fontSize: "0.88rem" }}>
                Flight <strong>DG 6901</strong> departs CEB at 2:15 PM and lands at Surigao Airport at approximately{" "}
                <strong>3:15 PM</strong>.
              </p>
            </Card>
            <Card>
              <h4 className={styles.textTurquoise} style={{ marginBottom: "0.5rem" }}>
                🚐 Surigao Airport → Surigao Port
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <strong>Tricycle/Multicab:</strong> ₱30–50, approximately 15–20 minutes to Pantalan Dos.
              </p>
              <Callout variant="tip" icon="💡">
                <span style={{ fontSize: "0.8rem" }}>
                  Avoid tricycle drivers right outside the airport who overcharge. Walk 1–2 streets away to flag a
                  regular tricycle.
                </span>
              </Callout>
            </Card>
          </div>

          <h3 className={`${styles.subsectionTitle} ${styles.mb2}`}>
            🚢 Surigao Port → San Jose, Dinagat Islands (by Ferry)
          </h3>
          <DataTable>
            <table className={`${styles.table} ${styles.mb2}`}>
              <thead>
                <tr>
                  <th>Operator</th>
                  <th>Travel Time</th>
                  <th>Fare</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {ferryRows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <strong>{row.operator}</strong>
                      {row.operatorNote && (
                        <span style={{ fontSize: "0.78rem", fontWeight: 400, color: "var(--text-muted)", marginLeft: "0.35rem" }}>
                          ({row.operatorNote})
                        </span>
                      )}
                    </td>
                    <td>{row.travelTime}</td>
                    <td><span className={styles.monoCell}>{row.fare}</span></td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <div className={styles.twoCol}>
            <Callout variant="warning" icon="🚨" title="Important">
              Terminal fee: ₱10. Aim for morning departures. Afternoon sailings are fewer. Last trip back to Surigao is
              typically around 2:00–3:00 PM.
            </Callout>
            <Callout variant="tip" icon="🌐" title="Book Online">
              <a href="https://booking.barkota.com" target="_blank" rel="noopener noreferrer">
                Barkota
              </a>{" "}
              for Evaristo &amp; Sons reservations.
            </Callout>
          </div>

          <Card className={styles.orchidCard}>
            <h4 className={styles.textOrchid} style={{ marginBottom: "0.5rem" }}>
              🚢 From Siargao (Alternative Route)
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              Nier Shipping Lines operates <strong>Del Carmen Port (Siargao) → Cagdianao Port (Dinagat)</strong> at
              1:00 PM, Monday–Saturday. Travel time: 1 hour 20 minutes.
            </p>
          </Card>
        </section>

        {/* =========================================
            WHERE TO STAY
            ========================================= */}
        <section id="stay">
          <SectionHeader icon="🏨" label="Accommodation" title="Where to Stay" />

          {accommodationSections.map((section) => (
            <div key={section.location}>
              <span className={styles.accomLocation}>{section.location}</span>
              <DataTable>
                <table className={`${styles.table} ${styles.mb3}`}>
                  <thead>
                    <tr>
                      <th>Accommodation</th>
                      <th>Rate (est.)</th>
                      <th>Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i}>
                        <td>
                          {row.name}
                          {row.badges?.map((b, j) => (
                            <BadgeVariant key={j} variant={b.variant} text={b.text} />
                          ))}
                        </td>
                        <td><span className={styles.monoCell}>{row.rate}</span></td>
                        <td>{row.highlights}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DataTable>
            </div>
          ))}

          <Callout variant="tip" icon="💡" title="Pro Tip">
            Book accommodations in advance — options are limited. A 2D1N package tour (₱3,000–3,500/person) from
            operators like <strong>Azonta Travel &amp; Tours</strong> or <strong>Jmalls</strong> includes accommodation,
            meals, boat tours, guide, and entrance fees.
          </Callout>

          <Callout variant="success" icon="🏆" title="Recommended for Our Group of 6">
            <strong>Island View Suites</strong> in San Jose is the best fit. It has confirmed working WiFi
            (guest-verified), air-conditioned rooms, sea views, and only 8 rooms across 4 floors, so the group can book
            most of the property. Central waterfront location, breakfast included. Some crew members can work remotely at
            night using the WiFi. Book directly or via Booking.com/Airbnb.
          </Callout>
        </section>

        {/* =========================================
            TOURIST SPOTS
            ========================================= */}
        <section id="spots">
          <SectionHeader icon="🌟" label="Complete Directory" title="Tourist Spots" />

          {spotTiers.map((tier) => (
            <div key={tier.tierClass}>
              <TierLabel icon={tier.icon} label={tier.label} tierClass={tier.tierClass} />
              <div
                className={`${styles.spotsGrid} ${
                  tier.spots.length > 5 ? styles.spotsGrid3 : ""
                } ${styles.mb3}`}
              >
                {tier.spots.map((spot) => (
                  <div key={spot.num} className={styles.spotCard}>
                    <div className={styles.spotNum}>{spot.num}</div>
                    <div className={styles.spotName}>{spot.name}</div>
                    <div className={styles.spotLocation}>{spot.location}</div>
                    <p className={styles.spotDesc}>{spot.description}</p>
                    {spot.tip && <p className={styles.spotTip}>{spot.tip}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* =========================================
            DAILY SCHEDULE
            ========================================= */}
        <section id="day1">
          <SectionHeader icon="📅" label="Hour-by-Hour Itinerary" title="Daily Schedule" />

          {days.map((day) => (
            <div key={day.id} id={day.id === "day1" ? undefined : day.id}>
              <DayBlock
                day={day.dayNum}
                title={day.title}
                subtitle={`${day.dateLabel} — ${day.theme}`}
                accent={day.accent}
              >
                <DataTable>
                  <table className={`${styles.table} ${styles.itineraryTable}`} style={{ marginTop: "0.5rem" }}>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Activity</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.rows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.time}</td>
                          <td>{row.activity}</td>
                          <td>{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </DataTable>

                {day.callout && (
                  <Callout
                    variant={day.callout.variant}
                    icon={day.callout.icon}
                    title={day.callout.title}
                  >
                    {day.callout.body}
                  </Callout>
                )}
              </DayBlock>
            </div>
          ))}
        </section>

        {/* =========================================
            PHOTOGRAPHY GUIDE
            ========================================= */}
        <section id="photography">
          <SectionHeader icon="📸" label="Sony a7C2 + 28-200mm" title="Photography Guide" />

          <h3 className={`${styles.subsectionTitle} ${styles.mb2}`}>Best Photography Spots Ranked</h3>
          <DataTable>
            <table className={`${styles.table} ${styles.mb3}`}>
              <thead>
                <tr>
                  <th className={styles.centerHeader}>Rank</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Best Time</th>
                  <th>Lens Range</th>
                </tr>
              </thead>
              <tbody>
                {photoSpots.map((spot, i) => (
                  <tr key={i}>
                    <td className={styles.photoRank}>{spot.rank}</td>
                    <td>{spot.location}</td>
                    <td>{spot.type}</td>
                    <td>{spot.bestTime}</td>
                    <td><span className={styles.monoCell}>{spot.lensRange}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <h3 className={`${styles.subsectionTitle} ${styles.mb2}`}>Camera Settings Tips</h3>
          <div className={styles.settingsGrid}>
            {cameraSettings.map((item, i) => (
              <div key={i} className={styles.settingItem}>
                <span className={styles.settingLabel}>{item.label}</span>
                <p className={styles.settingValue}>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            BUDGET
            ========================================= */}
        <section id="budget">
          <SectionHeader icon="💰" label="Estimated Costs" title="Budget Breakdown" />
          <DataTable>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (₱)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, i) => (
                  <tr key={i} className={row.isTotal ? styles.budgetTotal : undefined}>
                    <td>{row.item}</td>
                    <td>
                      {row.cost === "Already booked" ? (
                        <span className={styles.budgetBooked}>{row.cost}</span>
                      ) : (
                        <span className={styles.monoCell}>{row.cost}</span>
                      )}
                    </td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </section>

        {/* =========================================
            PACKING LIST
            ========================================= */}
        <section id="packing">
          <SectionHeader icon="🎒" label="What to Bring" title="Packing List" />
          <div className={styles.packingGrid}>
            {packingCategories.map((cat) => (
              <div key={cat.category} className={styles.packingCard}>
                <div className={styles.packingCategory}>{cat.category}</div>
                <ul className={styles.packingList}>
                  {cat.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            CONNECTIVITY & REMOTE WORK
            ========================================= */}
        <section id="connectivity">
          <SectionHeader icon="📶" label="WiFi, Signal & Power" title="Connectivity & Remote Work" />

          <Callout variant="warning" icon="🚨" title="Set Expectations">
            Dinagat Islands is remote. Internet is limited, power is not 24/7, and video calls may not be reliable.
            Plan your work around these constraints. Inform clients/teams about limited connectivity April 9–13.
          </Callout>

          <h3 className={`${styles.subsectionTitle} ${styles.mt3}`}>Mobile Carrier Signal</h3>
          <DataTable>
            <table className={`${styles.table} ${styles.mb3}`}>
              <thead>
                <tr>
                  <th>Carrier</th>
                  <th>Signal on Dinagat</th>
                  <th>Verdict</th>
                </tr>
              </thead>
              <tbody>
                {carrierRows.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.carrier}</strong></td>
                    <td>{row.signal}</td>
                    <td><BadgeVariant variant={row.badgeVariant} text={row.badgeText} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>

          <h3 className={styles.subsectionTitle}>What&apos;s Realistic</h3>
          <DataTable>
            <table className={`${styles.table} ${styles.mb3}`}>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Feasibility</th>
                </tr>
              </thead>
              <tbody>
                {connectivityRows.map((row, i) => {
                  const colorClass =
                    row.color === "palm"
                      ? styles.textPalm
                      : row.color === "sand"
                      ? styles.textSand
                      : row.color === "sunset"
                      ? styles.textSunset
                      : styles.textCoral;
                  return (
                    <tr key={i}>
                      <td>{row.task}</td>
                      <td>
                        <strong className={colorClass}>{row.feasibility}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </DataTable>

          <h3 className={styles.subsectionTitle}>Power Situation</h3>
          <Callout variant="warning" icon="🔌" title="Electricity is Not 24/7">
            Dinagat Islands Electric Cooperative (DIELCO) runs on diesel generators and power barges. Brownouts and
            unscheduled power interruptions happen regularly. Always keep devices charged and bring power banks.
          </Callout>

          <h3 className={`${styles.subsectionTitle} ${styles.mt3}`}>What to Bring for Remote Work</h3>
          <div className={`${styles.twoCol} ${styles.mb3}`}>
            <Callout variant="info" icon="📱" title="Before the Ferry">
              Buy a <strong>Smart/TNT prepaid SIM</strong> with a large data package in Surigao City. Get a{" "}
              <strong>DITO SIM</strong> as backup. Do NOT rely on Globe. Download offline maps (Google Maps, Maps.me)
              and all documents you need.
            </Callout>
            <Callout variant="info" icon="🔋" title="Essential Gear">
              <strong>Power banks</strong> (20,000mAh+, ideally two per person). <strong>Extension cord</strong> to
              charge multiple devices when power is available. <strong>Pocket WiFi</strong> loaded with Smart data as
              group hotspot. Laptop with long battery life.
            </Callout>
          </div>

          <Callout variant="tip" icon="💡" title="Piso-WiFi Backup">
            Coin-operated Piso-WiFi machines are scattered around San Jose town center. They cost as little as ₱1 for
            10–15 minutes. Not ideal for sustained work, but useful in a pinch.
          </Callout>
        </section>

        {/* =========================================
            IMPORTANT TIPS
            ========================================= */}
        <section id="tips">
          <SectionHeader icon="🚨" label="Read Before You Go" title="Important Tips & Reminders" />
          <ol className={styles.tipsList}>
            {tips.map((tip, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: tip }} />
            ))}
          </ol>
        </section>

        {/* =========================================
            TOUR CIRCUITS
            ========================================= */}
        <section id="circuits">
          <SectionHeader icon="🗺️" label="Route Overview" title="Tour Circuits at a Glance" />

          {circuits.map((circuit) => {
            const dayColorClass =
              circuit.dayColorClass === "circuit-day2"
                ? styles.circuitDay2
                : circuit.dayColorClass === "circuit-day3"
                ? styles.circuitDay3
                : styles.circuitDay4;
            return (
              <div key={circuit.title} className={styles.circuitCard}>
                <div className={`${styles.circuitDay} ${dayColorClass}`}>{circuit.dayLabel}</div>
                <h3 className={styles.circuitTitle}>{circuit.title}</h3>
                <div className={styles.circuitRoute}>
                  {circuit.stops.map((stop, i) => (
                    <span key={i}>
                      <span className={styles.routeStop}>{stop}</span>
                      {i < circuit.stops.length - 1 && (
                        <span className={styles.routeArrow}> → </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* =========================================
            USEFUL CONTACTS
            ========================================= */}
        <section id="contacts">
          <SectionHeader icon="📞" label="On the Ground" title="Useful Contacts" />
          <DataTable>
            <table className={`${styles.table} ${styles.contactsTable}`}>
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {contactRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.contact}</td>
                    <td>
                      {row.isLink ? (
                        <a href={row.href} target="_blank" rel="noopener noreferrer">
                          {row.details}
                        </a>
                      ) : row.isMono ? (
                        <span className={`${styles.monoCell} ${styles.textTurquoise}`}>
                          {row.details}
                        </span>
                      ) : (
                        row.details
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTable>
        </section>

      </div>

      {/* =========================================
          FOOTER
          ========================================= */}
      <Footer
        icon="🏝️"
        title="Dinagat Islands — The Mystical Last Frontier"
        note="Rates, schedules, and availability are based on 2025 data and may change. Always verify before travel."
      />
    </div>
  );
}
