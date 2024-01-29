---
title: 这只是一个测试！
pubDate: '2000 年 2 月 4 日'
date: 2000-02-04
description: 在这个测试页面你可以看到近乎所有的组件样式!
author: nin3
readingtime: 10
tags: 
  - 测试
cover: https://bu.dusays.com/2023/12/26/658a9399299da.png
categories: 测试
themecolor: "text-indigo-500"
views: 2024
---
这是一个用来浏览和测试页面，<br>
所有markdown文件在这里会被 typography 插件渲染成自定义的样式。（我是p标签）
# 这是 H1 大标题
可能用在标题，向下嵌套其他 <副标题>。
## 二级标题
很明显，它是用于被嵌套的那个。<br>
这里很适合插入一个无序列表 👇
- 吃饭
- 睡觉
- 打派派
### 三级标题
也许你也想看看有序列表👇 <kbd>OrderList</kbd> ？ 
1. 抽烟
2. 喝酒
3. 烫头
#### 四级标题 ~~小小的也很可爱~~
这是一个任务列表👇
- [x] 打开冰箱
- [ ] 把大象塞进冰箱里
- [ ] 关上冰箱

> 这是一个自定义的引用样式

<div class="flex flex-col mb-6">
    <blockquote class="not-prose before:content-['❝'] before:text-4xl after:content-['❞'] text-[#333] justify-center font-bold flex gap-1">
        <p class="mt-6 text-2xl">
            优化一下署名的引用
        </p>
    </blockquote>
    <div class="flex flex-row-reverse text-[#333] font-light">
        @这是署名的部分
    </div>
</div>

有时候一句话里也需要插入一些**强调的句子**

代码预览👇
```yaml
---
title: 这只是一个测试！
pubDate: '2000 年 2 月 4 日'
description: 在这个测试页面你可以看到近乎所有的组件样式!
author: nin3
readingtime: 10
tags: 
  - 测试
top_img: '#FF6161'
cover: https://bu.dusays.com/2023/12/26/658a9399299da.png
categories: 设计
views: 2024
---
```

较少用到的表格👇
| 表头   |  描述  |
| :----- | :----: |
| 表身#1 | 描述#1 |
| 表身#2 | 描述#2 |
| 表身#3 | 描述#3 |
| 表身#4 | 描述#4 |

折叠格式👇
<div class="bg-gray-200 mx-auto p-6 rounded-2xl">
    <details class=""> 
        <summary>
            点击展开
        </summary>
            展开内容
    </details>
</div>

分割线👇

---

分割线👆︎

这里有一个可爱的 *[Markdown 使用手册](https://www.markdownguide.org)* 无人问津。

嵌入一张封面👇
![这是一个图片](https://bu.dusays.com/2023/11/21/655c64bdb8321.png "新鲜出炉的封面")

再嵌入一段视频👇
<video src="https://cdn.dribbble.com/users/485324/screenshots/14983659/media/f3578a43968fc8eb6aef6f492a1e1244.mp4#t=0.01" controls data-aos="fade-up"></video>

别忘了iframe👇
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" class="w-full aspect-video rounded-2xl" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDEh0ys71li4JXyOTBV2DKt%2F%25E9%25A1%25B6%25E5%25B3%25B0%25E6%2596%25B0%25E9%2597%25BBApp%3Ftype%3Ddesign%26node-id%3D189%253A403%26mode%3Ddesign%26t%3DVGfSyTsNCNOncIgw-1" allowfullscreen data-aos="fade-up"></iframe>

五颜六色👇
<div class="flex items-center my-8 gap-4 bg-[#EEEEEE] rounded-2xl">
    <div class="pl-6">💁‍♀️</div>
    <p class="text-[#333] pr-6">一个呼出消息</p>
</div>

<div class="flex items-center my-8 gap-4 bg-[#FFE7E5] rounded-2xl">
    <div class="pl-6">⛔</div>
    <p class="text-[#FF1E10] pr-6">一个警告消息</p>
</div>

<div class="flex items-center my-8 gap-4 bg-[#F6ECD0] rounded-2xl">
    <div class="pl-6">🔔</div>
    <p class="text-[#FFB800] pr-6">一个提示消息</p>
</div>

<div class="flex items-center my-8 gap-4 bg-[#D0E7D0] rounded-2xl">
    <div class="pl-6">✅</div>
    <p class="text-[#039C00] pr-6">一个通过消息</p>
</div>

可能会面临的大段文字。