import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>⏮</button>
      <button className={styles.button}>‹</button>

      <button className={`${styles.button} ${styles.active}`}>
        1
      </button>

      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>

      <button className={styles.button}>›</button>
      <button className={styles.button}>⏭</button>
    </div>
  );
}