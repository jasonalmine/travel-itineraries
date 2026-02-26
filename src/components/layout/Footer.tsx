import styles from "./Footer.module.css";

interface FooterProps {
  icon: string;
  title: string;
  note?: string;
}

export function Footer({ icon, title, note }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
      {note && <span className={styles.note}>{note}</span>}
    </footer>
  );
}
