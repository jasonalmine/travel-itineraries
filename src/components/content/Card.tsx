import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  icon?: string;
  accent?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, icon, accent, children, className }: CardProps) {
  return (
    <div
      className={`${styles.card} ${className ?? ""}`}
      style={accent ? { borderTopColor: accent } : undefined}
    >
      {(icon || title) && (
        <div className={styles.header}>
          {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
          {title && <h4 className={styles.title}>{title}</h4>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
