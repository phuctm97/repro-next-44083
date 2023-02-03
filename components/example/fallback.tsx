import styles from "@/styles/Home.module.css";

export function Fallback() {
  return (
    <div className={`${styles.center} ${styles.description}`}>
      <p>Loading…</p>
    </div>
  );
}
