import React from 'react';
import Button from '../../common/Button/Button'; 
import { FiAlertOctagon } from "react-icons/fi";
const headerConfig = {
  "Trang Chủ": {
    component: <FiAlertOctagon />, // Chèn component hiển thị TRƯỚC chữ
    subItems: ["Home 1", "Home 2"]
  },
  "Sản Phẩm": {
    component: <FiAlertOctagon />, // Menu nào không cần chèn component thì để null
    subItems: []
  },
  "Nạp Tiền": {
    component: <FiAlertOctagon />,
    subItems: []
  },
  "Community": {
    component: <FiAlertOctagon />,
    subItems: []
  },
  "Docs": {
    component: <FiAlertOctagon />,
    subItems: []
  },
  "Login": {
    component: <FiAlertOctagon />,
    subItems: []
  }
};

export default headerConfig;
