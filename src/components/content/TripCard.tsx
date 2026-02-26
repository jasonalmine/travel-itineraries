import Link from "next/link";
import styles from "./TripCard.module.css";

interface TripCardProps {
  href: string;
  icon: string;
  title: string;
  meta: string;
  variant: "mountain" | "island";
}

export function TripCard({ href, icon, title, meta, variant }: TripCardProps) {
  return (
    <Link href={href} className={`${styles.card} ${styles[variant]}`}>
      <div className={`${styles.icon} ${styles[variant]}`}>{icon}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>{meta}</div>
      </div>
      <div className={styles.arrow} aria-hidden="true">&rsaquo;</div>
    </Link>
  );
}
