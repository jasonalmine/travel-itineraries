import styles from "./GearCategory.module.css";

interface GearItem {
  text: string;
  note?: string;
}

interface GearCategoryProps {
  icon: string;
  title: string;
  items: GearItem[];
  accent?: string;
  fullWidth?: boolean;
}

export function GearCategory({ icon, title, items, accent, fullWidth }: GearCategoryProps) {
  return (
    <div className={`${styles.category} ${fullWidth ? styles.fullWidth : ""}`}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">{icon}</span>
        <h4 className={styles.title} style={accent ? { color: accent } : undefined}>
          {title}
        </h4>
      </div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.check} aria-hidden="true">&#9634;</span>
            <span>
              {item.text}
              {item.note && <span className={styles.note}> {item.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
