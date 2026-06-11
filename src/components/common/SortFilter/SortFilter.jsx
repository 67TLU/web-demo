import styles from "./SortFilter.module.css";
import Filter from '../Filter/Filter'
export default function SortBar() {
  return (
    <div className={styles.sortBar}>
      <div className={styles.left}>
        <span className={styles.result}>
          Hiển thị <strong>128</strong> sản phẩm
        </span>
      </div>

      <div className={styles.right}>
                <Filter style={{position:"absolute",top:"100%"}}></Filter>
        <span className={styles.label}>Sắp xếp:</span>

        <select className={styles.select}>
          <option>Mặc định</option>
          <option>Mới nhất</option>
          <option>Bán chạy</option>
          <option>Đánh giá cao</option>
          <option>Giá tăng dần</option>
          <option>Giá giảm dần</option>
          <option>Tên A → Z</option>
          <option>Tên Z → A</option>
        </select>
      </div>
    </div>
  );
}