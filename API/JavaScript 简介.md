# JavaScript 简介

## JavaScript 历史

* 历史略过，推荐【JavaScript高级教程】[俗称：红皮书]

## 三大组成部分

* 核心（ECMAScript）
* 文档对象模型（DOM：Document Object Model）
* 浏览器对象模型（BOM：Browser Object Mode）

### 核心（ECMAScript）

#### 组成部分（7类）

* 语句，语法，类型，关键字，保留字，操作符，对象

* 关键字: js自身语法使用的词语

> break，case，catch，continue，default，delete，do，else，finally，for，function，if，in，instanceof，new，return，switch，this，throw，try，typeof，var，void，while，with

* 保留字：js占用的词语，但现在又没有使用，将来某一天可能会使用

> abstract, boolean, byte, char, class, const, debugger, double, enum, export, extends, final, float, goto, implements, import, int, interface, long, native, package, private, protected, public, short, static, super, synchronized, throws, transient, volatile

* 其余不做解释，随着js深入，都会得到理解

### 文档对象（DOM）

#### 节点集合

* DOM tree （DOM 树）：所有页面标签组成的对象
* 提供访问和操作网页内容的方法和接口

```
console.log(document) // 获取DOM tree 根节点
```
### 浏览器对象（BOM）
* 集中表现在window对象
* 提供与浏览器交互的方法和接口

```
console.log(window)
```

