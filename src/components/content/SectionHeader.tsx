import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  icon: string;
  label: string;
  title: string;
}

export function SectionHeader({ icon, label, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.label}>
        <span aria-hidden="true">{icon}</span> {label}
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
