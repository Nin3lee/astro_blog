import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    // 示例：允许来自单个域名的远程图像优化。
    domains: ['https://7bu.top/user/images']
  },
  integrations: [tailwind()],
  favicon: 'favicon.ico'
});