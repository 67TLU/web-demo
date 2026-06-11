import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Cpu, Cloud, Code2 } from "lucide-react";
import styles from "./Home.module.css"; // Import lớp CSS Module
import Button from  '../../components/common/Button/Button'
import { TbBackground } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
const service = [{
    icon:<Cpu></Cpu>,
    title:"Hạ tầng Cloud"
},{
    icon:<Cpu></Cpu>,
    title:"Website và mã nguồn"
},
{
    icon:<Cpu></Cpu>,
    title:"Tool"
}
];
const card=[{
    icon:"Free"
,
    title:<ul>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
    </ul>
},{
    icon:"Free"
,
    title:<ul>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
    </ul>
},
{
    icon:"Free"
,
    title:<ul>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
      <li><FaCheckCircle />
<span>10 lượt truy cập</span></li>
    </ul>
}]
const features = [
  {
    icon: Cpu,
    title: "Hiệu năng cao",
    desc: "Tối ưu cho tốc độ, trải nghiệm mượt mà và khả năng mở rộng lâu dài.",
  },
  {
    icon: Cloud,
    title: "Cloud-ready",
    desc: "Sẵn sàng cho hạ tầng hiện đại, triển khai nhanh và đồng bộ dữ liệu.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật mạnh",
    desc: "Thiết kế tập trung vào an toàn, kiểm soát truy cập và bảo vệ dữ liệu.",
  },
  {
    icon: Code2,
    title: "Dành cho dev",
    desc: "Cấu trúc rõ ràng, trực quan, phù hợp cho sản phẩm công nghệ hiện đại.",
  },
];

const stats = [
  { value: "120K+", label: "Người dùng" },
  { value: "98%", label: "Hài lòng" },
  { value: "24/7", label: "Hỗ trợ" },
];

export default function Home() {
  return (
<div className={styles.container}>
        {/* Main Content Area */}
        <main className={styles.mainContent}>
          <section className={styles.heroGrid}>
            
            {/* Cột Trái: Chữ và CTA */}
            <div className={styles.leftCol}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Nền tảng công nghệ thế hệ mới
              </div>

              <h1 className={styles.mainTitle}>
                Mọi tác vụ{" "}
                <span className={styles.gradientText}>
                  đều tự động hóa
                </span>
              </h1>

              <p className={styles.description}>
                Biến các quy trình lặp đi lặp lại thành tự động hóa.
              </p>

              <div className={styles.actionGroup} >
                <Button style={{backgroundColor:"var(--color-text-primary)",color:"var(--color-bg-primary)"}} className={styles.btnHeroPrimary} >
                  <span>Khám phá ngay</span>
                  <ArrowRight style={{ height: "1rem", width: "1rem" }} />
                </Button>
                                  <Button style={{backgroundColor:"var(--color-text-primary)",color:"var(--color-bg-primary)"}} className={styles.btnHeroPrimary} >
                    <span>Tư Vấn và Hỗ Trợ</span>
                    <ArrowRight style={{ height: "1rem", width: "1rem" }} />
                  </Button>
              </div>

              <div className={styles.statsGrid}>
                {stats.map((item) => (
                  <div key={item.label} className={styles.statsCard}>
                    <div className={styles.statsValue}>{item.value}</div>
                    <div className={styles.statsLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột Phải: Panel Thống kê */}
            <div className={styles.rightCol}>
              <div className={styles.blurGlow1} />
              <div className={styles.blurGlow2} />

              <div className={styles.dashboardPanel}>
                <div className={styles.panelHeader}>
                  <div>
                    <p className={styles.panelHeaderSub}>System status</p>
                    <p className={styles.panelHeaderTitle}>Online & Stable</p>
                  </div>
                  <div className={styles.liveBadge}>Live</div>
                </div>

                <div className={styles.featuresInnerGrid}>
                  {features.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className={styles.featureInnerCard}>
                        <div className={styles.featureIconBox}>
                          <Icon className={styles.featureIcon} />
                        </div>
                        <h3 className={styles.featureTitle}>{item.title}</h3>
                        <p className={styles.featureDesc}>{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.panelFooterBanner}>
                  
                </div>
              </div>
            </div>
          </section>

          {/* Section Các Thẻ Tính Năng Đáy */}

          <section id="features" className={styles.bottomFeaturesSection}>
          <h1>Hệ Sinh Thái Dịch Vụ</h1>
            {service.map(({icon,title}) => (
              <div key={title} className={styles.bottomFeatureCard}>
                <h3 className={styles.bottomFeatureTitle}>{icon}</h3>
                <p className={styles.bottomFeatureDesc}>{title}</p>
              </div>
            ))}
          </section>
                    <section id="features" className={styles.bottomFeaturesSection}>
          <h1>Giá Cả và Gói Đăng kí</h1>
            {card.map(({icon,title}) => (
              <div key={title} className={styles.bottomFeatureCard}>
                <h3 className={styles.bottomFeatureTitle}>{icon}</h3>
                <p className={styles.bottomFeatureDesc}>{title}</p>
              </div>
            ))}
          </section>
        </main>
        </div>

  );
}