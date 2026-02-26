import styles from "./HubHero.module.css";

interface HubHeroProps {
  icon: string;
  title: string;
  subtitle: string;
}

export function HubHero({ icon, title, subtitle }: HubHeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.icon}>{icon}</div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
