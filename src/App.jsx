import React, { useState } from 'react';
import Header from './components/layout/Header/Header'; // Đường dẫn tới file Header của bạn
import SideBar from './components/layout/SideBar/SideBar'; // Cập nhật đường dẫn thực tế
import MainL from '../src/components/layout/MainL/MainL'
function App() {
  // 1. Khởi tạo State quản lý đóng/mở sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 2. Hàm lật trạng thái (Bấm nút task ở header thì chạy hàm này)
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // 3. Hàm đóng hẳn sidebar (Bấm overlay hoặc nút X ở sidebar thì chạy hàm này)
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {/* Truyền hàm toggle vào Header qua prop onTaskButtonClick */}
      <Header onTaskButtonClick={toggleSidebar} />

      {/* Chỉ render SideBar khi state isSidebarOpen là true */}
      {isSidebarOpen && (
        <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} setIsSidebarOpen={setIsSidebarOpen}/>
      )}
      <MainL></MainL>
    </div>
  );
}

export default App;