import styles from "./DayBlock.module.css";

interface DayBlockProps {
  day: number | string;
  title: string;
  subtitle?: string;
  accent?: string;
  children: React.ReactNode;
}

export function DayBlock({ day, title, subtitle, accent, children }: DayBlockProps) {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <span className={styles.day} style={accent ? { color: accent } : undefined}>
          Day {day}
        </span>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
