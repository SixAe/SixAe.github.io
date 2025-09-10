/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.js` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "ant-design:home-twotone" },
  { text: "博客", link: "/blog/", icon: "ant-design:snippets-outlined" },
  { text: "标签", link: "/blog/tags/", icon: "ant-design:tag-twotone" },
  { text: "归档", link: "/blog/archives/", icon: "ant-design:folder-twotone" },
  {
    text: "笔记",
    icon: "ant-design:edit-twotone",
    items: [{ text: "示例", link: "/notes/demo/README.md" }],
  },
]);
