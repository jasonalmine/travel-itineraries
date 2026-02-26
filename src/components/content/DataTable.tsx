import styles from "./DataTable.module.css";

interface DataTableProps {
  children: React.ReactNode;
}

export function DataTable({ children }: DataTableProps) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
