import Link from "next/link";
import styles from "./TripCard.module.css";

interface TripCardProps {
  href: string;
  icon: string;
  title: string;
  meta: string;
  variant: "mountain" | "island";
  status?: "upcoming" | "past";
}

export function TripCard({ href, icon, title, meta, variant, status }: TripCardProps) {
  const isPast = status === "past";
  return (
    <Link
      href={href}
      className={`${styles.card} ${styles[variant]} ${isPast ? styles.past : ""}`}
    >
      <div className={`${styles.icon} ${styles[variant]} ${isPast ? styles.pastIcon : ""}`}>
        {icon}
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div className={styles.title}>{title}</div>
          {isPast && <span className={styles.pastBadge}>Past</span>}
        </div>
        <div className={styles.meta}>{meta}</div>
      </div>
      <div className={styles.arrow} aria-hidden="true">&rsaquo;</div>
    </Link>
  );
}
