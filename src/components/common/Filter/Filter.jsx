import { useRef, useState } from "react";
import Style from "./Filter.module.css";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import close from "../../../hooks/Close"
export default function Filter({style}) {
    let [isOpen,setOpen]=useState(false);
    const Container = useRef(null);
    close(setOpen,Container);

  return (
    isOpen ?  
    <div ref = {Container} className={Style.filterContainer} style ={style}>
      <div className={Style.header}>
        <h2>Bộ lọc</h2>
        <button className={Style["button-close"]}><IoMdClose onClick={()=>setOpen(false)}/></button>
      </div>

      {/* Tìm kiếm */}
      <div className={Style.group}>
        <label>Tìm kiếm</label>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          className={Style.input}
        />
      </div>

      {/* Danh mục */}
      <div className={Style.group}>
        <label>Danh mục</label>
        <select className={Style.select}>
          <option>Tất cả</option>
          <option>React</option>
          <option>Node.js</option>
          <option>PHP</option>
          <option>Mobile</option>
        </select>
      </div>

      {/* Mức giá */}
      <div className={Style.group}>
        <label>Mức giá</label>

        <div className={Style.priceGroup}>
          <input
            type="number"
            placeholder="Từ"
            className={Style.input}
          />

          <span>-</span>

          <input
            type="number"
            placeholder="Đến"
            className={Style.input}
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className={Style.group}>
        <label>Công nghệ</label>

        <div className={Style.checkbox}>
          <input type="checkbox" id="react" />
          <label htmlFor="react">React</label>
        </div>

        <div className={Style.checkbox}>
          <input type="checkbox" id="vue" />
          <label htmlFor="vue">Vue</label>
        </div>

        <div className={Style.checkbox}>
          <input type="checkbox" id="next" />
          <label htmlFor="next">Next.js</label>
        </div>
      </div>

      {/* Button */}
<div className={Style["button-filter"]}>
                    <button className={Style.submitBtn}>
          Đặt lại
        </button><button className={Style.submitBtn}>
        Áp dụng bộ lọc
      </button>

        </div>
    </div>
    :<FaFilter className={Style.iconFilter} onClick={()=>setOpen(prev=>!prev)}/>
  );
}