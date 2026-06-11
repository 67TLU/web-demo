import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: '0.0.0.0', // Cho phép truy cập server qua mạng LAN (IP máy tính của bạn)
    port: 3000,      // Chỉnh server chạy ở cổng 3000 (mặc định là 5173)
    open: true,      // Tự động mở trình duyệt khi chạy server
    strictPort: true // Thoát nếu cổng được chỉ định đã bị sử dụng, thay vì tự động nhảy sang cổng khác
  }
})
