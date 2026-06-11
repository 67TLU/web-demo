import React, { useState, useEffect, useRef } from 'react';
import { menuConfig } from './SideBarConfig';
import styles from './SideBar.module.css';
import logoImg from '../../../assets/hero.png'; // Đường dẫn ảnh logo của bạn

import ClickOutsideExample from '../../../hooks/Close'
const SideBar = ({setIsSidebarOpen}) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // State lưu các menu cha đang được mở submenu (Ví dụ: { products: true, settings: false })
  const [openMenus, setOpenMenus] = useState({});
  // State lưu item đang active (có thể là menu cha hoặc menu con)
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const sideRef=useRef();
  const searchInputRef = useRef(null);
  ClickOutsideExample(setIsSidebarOpen,sideRef);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  // Hàm xử lý khi click vào menu cha
  const handleMenuClick = (item, e) => {
    // Nếu menu này có submenu
    if (item.subMenu) {
      e.preventDefault(); // Ngăn chuyển trang
      
      // Nếu Sidebar đang thu gọn, click vào menu cha sẽ tự động mở rộng Sidebar ra trước
      if (isCollapsed) {
        setIsCollapsed(false);
        setOpenMenus(prev => ({ ...prev, [item.id]: true }));
        return;
      }

      // Toggle đóng/mở submenu tương ứng
      setOpenMenus(prev => ({
        ...prev,
        [item.id]: !prev[item.id]
      }));
    } else {
      // Nếu không có submenu, set active bình thường
      setActiveMenu(item.id);
    }
  };

  // Tự động đóng tất cả các submenu khi thu gọn Sidebar để giao diện gọn gàng
  useEffect(() => {
    if (isCollapsed) {
      setOpenMenus({});
    }
  }, [isCollapsed]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <>

      {!isCollapsed && window.innerWidth <= 768 && (
        <div className={styles['sidebar-overlay']} onClick={toggleSidebar} />
      )}

      <aside ref={sideRef} className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles['sidebar-header']}>
          <img src={logoImg} alt="Logo" className={styles['header-logo']} />
          <button className={styles['sidebar-toggle']} onClick={toggleSidebar}>
            <span className="material-symbols-rounded">chevron_left</span>
          </button>
        </div>

        <div className={styles['sidebar-content']}>
          <form action="#" className={styles['search-form']} onClick={() => isCollapsed && setIsCollapsed(false)}>
            <span className="material-symbols-rounded">search</span>
            <input ref={searchInputRef} type="search" placeholder="Search..." required />
          </form>

          <ul className={styles['menu-list']}>
            {menuConfig.map((item) => {
              const hasSubMenu = !!item.subMenu;
              const isMenuOpen = !!openMenus[item.id];
              
              // Kiểm tra xem có menu con nào của mục này đang được active không
              const isSubMenuActive = hasSubMenu && item.subMenu.some(sub => sub.id === activeMenu);

              return (
                <li key={item.id} className={`${styles['menu-item']} ${isMenuOpen ? styles.expanded : ''}`}>
                  {/* Menu Cha */}
                  <a 
                    href={item.path} 
                    className={`
                      ${styles['menu-link']} 
                      ${activeMenu === item.id || isSubMenuActive ? styles.active : ''}
                    `}
                    onClick={(e) => handleMenuClick(item, e)}
                  >
                    <span className="material-symbols-rounded">{item.icon}</span>
                    <span className={styles['menu-label']}>{item.label}</span>
                    
                    {/* Hiển thị mũi tên nếu có menu con và sidebar không bị thu gọn */}
                    {hasSubMenu && !isCollapsed && (
                      <span className={`${styles['arrow-icon']} material-symbols-rounded`}>
                        {isMenuOpen ? 'expand_less' : 'chevron_right'}
                      </span>
                    )}
                  </a>

                  {/* Khối Menu Con (Submenu) */}
                  {hasSubMenu && (
                    <ul className={`
                      ${styles['submenu-list']} 
                      ${isMenuOpen ? styles['submenu-open'] : ''}
                    `}>
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.id} className={styles['submenu-item']}>
                          <a 
                            href={subItem.path}
                            className={`
                              ${styles['submenu-link']} 
                              ${activeMenu === subItem.id ? styles['sub-active'] : ''}
                            `}
                            onClick={() => setActiveMenu(subItem.id)}
                          >
                            {/* Chấm tròn nhỏ đại diện đầu dòng menu con */}
                            <span className={styles['submenu-dot']}></span>
                            <span className={styles['submenu-label']}>{subItem.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles['sidebar-footer']}>
          <button className={styles['theme-toggle']} onClick={toggleTheme}>
            <div className={styles['theme-label']}>
              <span className="material-symbols-rounded">
                {isCollapsed ? (isDarkTheme ? 'light_mode' : 'dark_mode') : 'dark_mode'}
              </span>
              <span className={styles['theme-text']}>Dark Mode</span>
            </div>
            <div className={styles['theme-toggle-track']}>
              <div className={styles['theme-toggle-indicator']}></div>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;