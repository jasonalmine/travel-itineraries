import styles from "./PageHero.module.css";

interface Badge {
  icon: string;
  text: string;
}

interface PageHeroProps {
  icon: string;
  title: string;
  subtitle?: string;
  badges?: Badge[];
}

export function PageHero({ icon, title, subtitle, badges }: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.icon}>{icon}</div>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {badges && badges.length > 0 && (
        <div className={styles.badges}>
          {badges.map((badge, i) => (
            <span key={i} className={styles.badge}>
              <span aria-hidden="true">{badge.icon}</span> {badge.text}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
