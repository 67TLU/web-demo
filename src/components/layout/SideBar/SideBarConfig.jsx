export const menuConfig = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', path: '#' },
  { id: 'analytics', label: 'Analytics', icon: 'insert_chart', path: '#' },
  {
    id: 'products',
    label: 'Products',
    icon: 'storefront',
    // Thêm submenu tại đây
    subMenu: [
      { id: 'prod-list', label: 'Product List', path: '#' },
      { id: 'prod-add', label: 'Add Product', path: '#' },
      { id: 'prod-categories', label: 'Categories', path: '#' }
    ]
  },
  { id: 'customers', label: 'Customers', icon: 'group', path: '#' },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    subMenu: [
      { id: 'set-profile', label: 'Profile', path: '#' },
      { id: 'set-security', label: 'Security', path: '#' }
    ]
  },
];