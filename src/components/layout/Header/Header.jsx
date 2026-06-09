import CONFIG from '../../../config/config'
import headerConfig from './headerConfig'
import Style from './Header.module.css'
import Search from "../../common/Search/Search"

// THÊM PROPS: Nhận hàm xử lý kích hoạt từ App.jsx truyền xuống
function Header({ onTaskButtonClick }) {
    let isImg = CONFIG.LOGO;
    
    return (
        <nav className={Style['nav-bar']}>
            {isImg ? <img src={isImg} alt="Logo" className={Style['logo-img']}/> : <span className={Style['logo-text']}>LOGO</span>}
            
            <div className={Style['content']}>
                <Search placeholder="Search..."></Search>
                
                <ul className={Style['menu']}>
                    {Object.entries(headerConfig).map(([mainKey, subItems]) => (
                      <div className={Style.boxkey}>
                        <li className={Style['main-key']} key={mainKey}>
                            {subItems && subItems.length > 0 ? (
                                <>
                                    {mainKey}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform duration-200"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </>
                            ) : (
                                mainKey
                            )}
                            
                            {subItems && subItems.length > 0 && (
                                <ul className={Style['drop-menu']}>
                                    {subItems.map(Items => <li key={Items}>{Items}</li>)}
                                </ul>
                            )}
                        </li>
                        </div>
                    ))}
                </ul>

                <button className={Style["light"]}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                    </svg>
                </button>

                {/* THÊM onClick VÀO ĐÂY: Gắn sự kiện click gọi hàm onTaskButtonClick */}
                <button className={Style['task']} onClick={onTaskButtonClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu h-6 w-6"
                        aria-hidden="true"
                    >
                        <path d="M4 5h16M4 12h16M4 19h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Header;