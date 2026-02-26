import styles from "./RouteFlow.module.css";

interface RouteNode {
  icon: string;
  label: string;
  time?: string;
}

interface RouteFlowProps {
  nodes: RouteNode[];
}

export function RouteFlow({ nodes }: RouteFlowProps) {
  return (
    <div className={styles.flow}>
      {nodes.map((node, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.node}>
            <span className={styles.icon} aria-hidden="true">{node.icon}</span>
            <span className={styles.label}>{node.label}</span>
            {node.time && <span className={styles.time}>{node.time}</span>}
          </div>
          {i < nodes.length - 1 && (
            <div className={styles.connector} aria-hidden="true">
              <span className={styles.arrow}>&rarr;</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
