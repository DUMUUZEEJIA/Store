# JavaScript API

## JavaScript 简介 
> 三大核心 = 核心（ECMAScript）+ 文档对象模型（DOM）+ 浏览器对象模型（BOM）

> 语言组成部分 = 语法 + 类型 + 语句 + 关键字 + 保留字 + 操作符 + 对象

> pc = IE + Firefox + Chrome + Safari + Opera 等浏览器

> m = qq + baidu + chrome + uc + safari 等浏览器

> 执行顺序: 从上到下，从左到右

## 在 HTML 中使用 JavaScript 

`<script/>元素`
> 属性

> src = " " 引入代码脚本的路径，@ 此属性一写，禁止在script书写任何代码，任何代码均无效

> 类型 type = "text/javascrip"  text/javascript（默认） | text/ecmascript |  application/x–javascript | application/javascript ECMACScript5 最新语法规定此属性不写

> 异步 async = "true | async" 立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或等待加载其他脚本。只对外部脚本文件有效 @ 一般数据统计都需要这个属性

> 编码 charset = "true" 表示通过 src 属性指定的代码的字符集。由于大多数浏览器会忽略它的值， 因此这个属性很少有人用

> 延迟 defer = "true | defer" 表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有 效。IE7及更早版本支持
 
 > @ 以上属性默认值 false