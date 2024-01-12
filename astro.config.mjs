import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    // 示例：允许来自单个域名的远程图像优化。
    domains: ['https://7bu.top/user/images']
  },
  integrations: [tailwind()],
  favicon: 'favicon.ico',
  markdown: {
    smartypants: false,
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      // 另外，也提供了多种主题
      // https://shikiji.netlify.app/guide/dual-themes#light-dark-dual-themes
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // 添加自定义语言
      // 注意：Shiki 内置了无数语言，包括 .astro！
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // 启用自动换行，以防止水平滚动
      wrap: true,
    },
  },
});