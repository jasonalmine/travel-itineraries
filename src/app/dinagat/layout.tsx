import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dinagat Islands",
  description:
    "A comprehensive travel guide and hour-by-hour itinerary for Dinagat Islands, April 9–13, 2026.",
};

export default function DinagatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div data-theme="dinagat-tropical">{children}</div>;
}
