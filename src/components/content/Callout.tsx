import styles from "./Callout.module.css";

type CalloutVariant = "tip" | "warning" | "info" | "success";

interface CalloutProps {
  variant?: CalloutVariant;
  icon?: string;
  title?: string;
  children: React.ReactNode;
}

const defaultIcons: Record<CalloutVariant, string> = {
  tip: "💡",
  warning: "🚨",
  info: "💡",
  success: "✅",
};

export function Callout({ variant = "tip", icon, title, children }: CalloutProps) {
  return (
    <div className={`${styles.callout} ${styles[variant]}`}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">
          {icon ?? defaultIcons[variant]}
        </span>
        {title && <strong className={styles.title}>{title}</strong>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
