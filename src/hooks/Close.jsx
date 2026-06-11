import React, { useState, useEffect, useRef } from 'react';

export default function ClickOutsideExample(setIsOpen,containerRef) {

  // 2. Tạo một Ref và gắn nó vào phần tử vùng chứa (container)

  useEffect(() => {
    // 3. Hàm kiểm tra xem vị trí click có nằm ngoài vùng chứa không
    const handleClickOutside = (event) => {
      // Nếu vùng chứa tồn tại VÀ vị trí click KHÔNG nằm trong vùng chứa
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false); // Thay đổi trạng thái state tại đây (ví dụ: đóng lại)
      }
    };

    // 4. Đăng ký sự kiện click chuột toàn hệ thống khi component được mount
    document.addEventListener('mousedown', handleClickOutside);

    // 5. Quan trọng: Hủy đăng ký sự kiện khi component bị unmount để tránh rò rỉ bộ nhớ
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}