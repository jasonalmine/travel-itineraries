import styles from "./RiskCard.module.css";

type Severity = "high" | "medium" | "low";

interface RiskCardProps {
  title: string;
  severity: Severity;
  description: string;
  mitigation: string;
}

export function RiskCard({ title, severity, description, mitigation }: RiskCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${styles[severity]}`}>{severity}</span>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.desc}>{description}</p>
      <p className={styles.mitigation}>
        <strong>Mitigation:</strong> {mitigation}
      </p>
    </div>
  );
}
