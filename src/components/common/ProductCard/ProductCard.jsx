import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src="https://placehold.co/600x350"
          alt="Product"
          className={styles.image}
        />

        <div className={styles.badge}>
          2.000đ
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.tag}>
          PHP
        </span>

        <h3 className={styles.title}>
          Website bán tài khoản game tự động
        </h3>

        <div className={styles.footer}>
          <span className={styles.author}>
            Bởi Trumdev80
          </span>

          <span className={styles.price}>
            2.000.000đ
          </span>
        </div>
      </div>
    </div>
  );
}