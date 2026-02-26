import { HubHero } from "@/components/hero/HubHero";
import { TripCard } from "@/components/content/TripCard";
import { Footer } from "@/components/layout/Footer";
import { trips } from "@/data/trips";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: 600, width: "100%" }}>
        <HubHero
          icon={"🌏"}
          title="Travel Itineraries"
          subtitle="Jason's Adventure Plans"
        />

        <div style={{ display: "grid", gap: "1rem" }}>
          {trips.map((trip) => (
            <TripCard key={trip.href} {...trip} />
          ))}
        </div>

        <Footer icon={"🌏"} title="Travel Hub" />
      </div>
    </main>
  );
}
