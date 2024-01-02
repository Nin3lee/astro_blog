---
title: Figma技巧研习#1 自适应表格
date: 2023-11-14 09:57:50
tags:
  - UI设计
  - 表格组件
  - Figma
  - 实用技巧
categories: 视觉设计
cover: https://bu.dusays.com/2023/11/20/655ad354bb7f8.png
ai: 本文介绍了如何利用figma搭建一个可自适应宽高的表格，内容中提到了关于表格组件的基本框架、自动布局和约束两种方式的区别和取舍、表格的填充、外框样式、圆角等设计要素。通过图文并行的方式展现了搭建过程并给出了非常具体的小贴士。
aside: false
---
### 搭建前的知识了解
#### 设计工具选用
本文使用的设计工具是由Moonvy月维开发的[FigmaEX桌面端](https://moonvy.com/figmaEX/)，对原有Figma界面进行了非常全面的汉化，对中文使用者非常友好，安装后可体验与作者同样的UI界面，有效降低沟通成本。
#### 表格组件的结构
表格组件的结构在我们常见的应用场景下，多由（表头+N行构成的表身）搭建而成，但是在使用Figma时我们不得不考虑工具实现的效果，因此我们其实有两个不同的实现方案：
- **以行为单位**重复的表格组件
- **以列为单位**重复的表格组件

{% note success flat %}本文提供以行为单位的表格组件搭建流程，在跟随文章搭建完成后，相信你也可以举一反三完成以列为单位的表格组件。{% endnote %}
#### 现有表格的局限性
Figma平台提供了两种原生的表格组件：
- FigJam中的表格功能{% kbd Shift + T %}
- Widget（小组件）中的Table（表格）

二者都提供了简易的内容自适应表格，一定程度上满足了不同环境下的工作需求，在定位上都更加契合“开箱即用”的原则，而在设计上都缺少了更高的自定义可能。你可以用它们来完成简单的头脑风暴或总结，但是诸如表格样式，内容文本的字族、颜色、对齐策略等，都受限于“开箱即用”特点的轻快简易，因而表格的搭建变得有了必要。
#### 约束&自动布局
在Figma功能发展的历史上，约束（Constraint）出现的更早，满足简易的布局要求，例如固定距上/下/左/右的距离、等比例拉伸、居中等；而自动布局（Auto Layout）在后续的版本更新中，展现出更好的表现，对更多细致的需求和更高精度的布局策略给出了解决方案，**几乎可以取缔约束**。
{% note info flat %}本文采用约束和自动布局并行的方式而没有全部选择自动布局，旨在给大家提供约束工具运用的经验，了解约束的功能。{% endnote %}
### 搭建表格
#### （1）创建表头和表身
![第一步](https://bu.dusays.com/2023/11/20/655ad6165a07d.png "创建表头和表身")
创建一个画框{% kbd F %}，输入内容{% kbd T %}“Head” 意为 "表头"；
调整文本内容的约束属性横向纵向都为居中；
如法炮制，创建框架并输入内容 “Row” 意为 "行/表身"，同样调整文本内容的约束属性同上。
#### （2）绘制表格的基本样式
![第二步](https://bu.dusays.com/2023/11/20/655ad354487c3.png "绘制表格的基本样式")
选中任意一个表格，添加描边-调整填充颜色 `#E6E6E6`;
**描边属性最好选择居中**，选择内部会导致相邻边框宽度不一，选择外部会导致重叠区域视觉不和谐。
复制属性{% kbd Ctrl + Alt + C %}并粘贴{% kbd Ctrl + Alt + V %}应用于其他表格。
#### （3）复制并完成搭建
![第三步](https://bu.dusays.com/2023/11/20/655ad3545044c.png "复制并完成搭建")
复制多个Head和Row{% kbd Alt + 拖拽 %} / {% kbd Ctrl + D %}；
以行为单位将每行表格选中并分别为每行添加自动布局{% kbd Shift + A %}，调整横向间距为0；
接着将每行表格全部选中，并再次添加自动布局{% kbd Shift + A %}，调整纵向间距为0；
至此基本框架已经搭建完毕，大家可以手动选中任意表格或者任意行进行复制以快速拓展，这得益于自动布局带来的优势。
#### （4）为表头添加视觉强调，为表格创建外部圆角
![第四步](https://bu.dusays.com/2023/11/20/655ad35452538.png "为表头添加视觉强调，为表格创建外部圆角")
虽然我们通过两次的自动布局创建了基本的布局，但表格的样式调整**仍依赖单个表格样式属性**，
这意味着我们为表头添加灰色背景时，需要**批量选中需要填充的表格，而不是表头整体的框架**。

在这里介绍选择子项的功能{% kbd Enter %}，这将精简我们的操作，减少多选负担。
如何操作：选中表头框架，按下回车{% kbd Enter %}就会直接选择所选内容的子项，接着调整填充颜色为 `#F9F9FB`
表格外框的圆角设置也需要分别选择四个角的表格并单独调整圆角项。
#### （5）实现自适应
![第五步](https://bu.dusays.com/2023/11/20/655ad35460ea7.png "实现自适应")
{% note info flat %}此处的自适应是指在调整表格外框时，每个表格都会均等的调整。{% endnote %}
选中表格框架，按下回车{% kbd Enter %}选中所有子项即每行表格，在画框属性中调整横向纵向都为“填充内容”;
再次按下回车{% kbd Enter %}选中所有子项即所有单个表格，如法炮制，调整画框属性同上;
这时调整表格外框时，已经可以比较完美的呈现出自适应效果了。

{% note warning flat %}表格组件的不完美体现在最小宽度没有被限制的前提下，会导致过窄的表格会导致文本内容显示不完全。
而对应的解决方案是选中所有单元格并设置最小宽度以避免被过度压缩导致的内容丢失。{% endnote %}