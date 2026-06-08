export const treeConfig = [
  {
    name: "my-app/",
    type: "folder",
    id: "root",
    children: [
      { name: "node_modules/", type: "folder", id: "node_modules", children: [] },
      {
        name: "public/",
        type: "folder",
        id: "public",
        children: [
          { name: "favicon.ico", type: "file" },
          { name: "images/", type: "folder", id: "images", children: [] }
        ]
      },
      {
        name: "src/",
        type: "folder",
        id: "src",
        children: [
          {
            name: "app/",
            type: "folder",
            id: "app",
            children: [
              { name: "favicon.ico", type: "file" },
              { name: "layout.js", type: "file" },
              { name: "page.js", type: "file" },
              {
                name: "about/",
                type: "folder",
                id: "about",
                children: [{ name: "page.js", type: "file" }]
              },
              {
                name: "contact/",
                type: "folder",
                id: "contact",
                children: [{ name: "page.js", type: "file" }]
              }
            ]
          }
        ]
      },
      { name: ".gitignore", type: "file", icon: "⚙️", color: "text-gray-400" },
      { name: "package.json", type: "file", icon: "📦", color: "text-teal-400" },
      { name: "README.md", type: "file", icon: "📖", color: "text-emerald-400" }
    ]
  }
];
