import Style from "./SideBar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import CONFIG from "../../../config/config";
import SideBarConfig from "./SideBarConfig.jsx";
import { FiChevronRight } from "react-icons/fi";
import { FaTimes } from 'react-icons/fa';
function SideBar() {
  let isImg = CONFIG.LOGO;
  return (
    <div className={Style["side-bar"]}>
        
      <nav className={Style["nav-bar"]}>
        <div>
          {isImg ? (
            <img src={isImg} alt="Logo" className={Style["logo-img"]} />
          ) : (
            <span className={Style["logo-text"]}>LOGO</span>
          )}
          <div className={Style["content"]}></div>
           <FaTimes size={10} />
        </div>
        <ul className={Style.menu}>
          {Object.entries(SideBarConfig).map(([key, arr]) => {
            return arr && arr.subItems.length > 0 ? (
              <>
                <li key={key}>
                  {arr.component}
                  <main className={Style["main-menu"]}>
                    <span>
                      {key}
                      <FiChevronRight />
                    </span>
                    <ul className={Style["drop-menu"]}></ul>
                  </main>{" "}
                </li>
                <div className={Style.child}>
                {arr.subItems.map((data) => (
                  <li>{data}</li>
                ))}
              </div>
              </>
            ) : (
              <li>
                {arr.component}
                <span>{key}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default SideBar;
