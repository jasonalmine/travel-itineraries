import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mt. Pulag Travel Itinerary",
  description:
    "Complete travel guide for Mt. Pulag via Akiki Trail. 7 days, Cebu to Clark to Baguio to Pulag to Manila and back.",
};

export default function PulagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div data-theme="pulag-alpine">{children}</div>;
}
