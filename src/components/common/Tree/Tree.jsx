import React, { useState } from "react";
import { treeConfig } from "./treeConfig.js"; // Import file cấu hình ở trên

function ProjectStructure() {
  // Quản lý trạng thái đóng/mở của các folder bằng ID
  const [openFolders, setOpenFolders] = useState({
    root: true,
    src: true,
    app: true,
  });

  const toggleFolder = (id) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Hàm đệ quy quét dữ liệu cấu hình để vẽ cây thư mục
  const renderTree = (nodes, currentPrefix = "", parentIsOpen = true) => {
    if (!parentIsOpen) return null;

    return nodes.map((node, index) => {
      const isLast = index === nodes.length - 1;
      // Xác định ký tự nhánh dựa vào vị trí cuối cùng hay ở giữa
      const branch = isLast ? "└── " : "├── ";
      // Ký tự truyền xuống các cấp con tiếp theo
      const nextPrefix = currentPrefix + (isLast ? "    " : "│   ");

      if (node.type === "folder") {
        const isOpen = !!openFolders[node.id];
        
        return (
          <div key={node.id || node.name}>
            {/* Dòng hiển thị Thư mục */}
            <div
              onClick={() => node.id && toggleFolder(node.id)}
              className={`flex items-center hover:bg-white/5 py-0.5 px-2 rounded transition-colors ${
                node.id ? "cursor-pointer text-amber-400/90" : "cursor-not-allowed opacity-50"
              }`}
            >
              <span className="text-gray-600 font-sans">{currentPrefix}{branch}</span>
              <span className="mr-1.5">{isOpen ? "📂" : "📁"}</span>
              <span className={node.id === "root" ? "text-white font-semibold" : ""}>{node.name}</span>
            </div>
            {/* Đệ quy gọi lại chính nó để vẽ các thư mục con bên trong */}
            {node.children && renderTree(node.children, nextPrefix, isOpen)}
          </div>
        );
      }

      // Dòng hiển thị File
      return (
        <div key={node.name} className="flex items-center hover:bg-white/5 py-0.5 px-2 rounded">
          <span className="text-gray-600 font-sans">{currentPrefix}{branch}</span>
          <span className="mr-1.5">{node.icon || "📄"}</span>
          <span className={node.color || "text-sky-400"}>{node.name}</span>
        </div>
      );
    });
  };

  return (
    <div className="p-6 bg-gray-950 rounded-2xl border border-white/10 w-full max-w-md font-mono text-sm text-gray-300 shadow-2xl select-none" style={{padding:'10px 15px'}}>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 pb-2 border-b border-white/5 flex justify-between items-center">
        <span>Dynamic Workspace</span>
        <span className="text-[10px] text-teal-400 lowercase bg-teal-500/10 px-2 py-0.5 rounded"></span>
      </div>

      <div className="space-y-0.5">
        {/* Chỉ cần gọi hàm và truyền mảng config vào */}
        {renderTree(treeConfig)}
      </div>
    </div>
  );
}

export default ProjectStructure;
