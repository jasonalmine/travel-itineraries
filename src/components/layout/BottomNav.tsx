"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BottomNav.module.css";

const tabs = [
  { href: "/", icon: "🌏", label: "Home" },
  { href: "/pulag", icon: "🏔️", label: "Pulag" },
  { href: "/pulag/hike", icon: "🥾", label: "Hike" },
  { href: "/dinagat", icon: "🏝️", label: "Dinagat" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {tabs.map((tab) => {
        const isActive =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href) &&
              (tab.href === "/pulag/hike"
                ? pathname === "/pulag/hike"
                : tab.href === "/pulag"
                  ? pathname === "/pulag"
                  : true);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={styles.icon} aria-hidden="true">
              {tab.icon}
            </span>
            <span className={styles.label}>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
