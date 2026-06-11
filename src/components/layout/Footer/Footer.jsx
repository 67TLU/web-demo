import styles from "./Footer.module.css";
import { footerData } from "./footerConfig";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Cột đầu */}
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              className={styles.logo}
            />

            <p className={styles.description}>
              {footerData.description}
            </p>
          </div>

          {/* Các cột còn lại */}
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h3 className={styles.heading}>
                {section.title}
              </h3>

              <ul className={styles.list}>
                {section.links.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.link}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>{footerData.copyright}</p>

          <div className={styles.bottomLinks}>
            {footerData.bottomLinks.map((item) => (
              <a key={item} href="#" className={styles.link}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}