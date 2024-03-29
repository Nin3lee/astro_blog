// 从 `astro:content` 导入辅助工具
import { z, defineCollection } from "astro:content";
// 为每一个集合定义一个 `type` 和 `schema`
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        date: z.date(),
        description: z.string(),
        author: z.string(),
        readingtime: z.number(),
        tags: z.array(z.string()),
        cover: z.string(),
        views: z.number(),
        themecolor: z.string(),
        cate: z.object({
            name: z.string(),
            title: z.string(),
            subtitle: z.string(),
            style: z.string(),
            gradient: z.string(),
        })
    })
});

// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
    posts: postsCollection
};