# CSS 常见问题

## CSS width 由内容撑开
```
内容撑开width

width: 20px;
min-width: 50px;  // 管用

width: 100%;
width: 20px;
min-width: 50px; // 不管用

width: 100%;
width: auto;
min-width: 50px; // 管用

width: auto;  // 由内容撑开 这个一个属性就管用了，不一定要min-width

涉及到单位的转化 100% ——> auto 
100% 不能转化 px

```
## display：inline-block 和 float 的区别

1. inline-block 会造成大约3px的空白间隙
2. 各个元素的对其方式基于vertical：baseline（如果元素内有内联块和内联）
3. 而浮动不会
4. 所以使用display：inline-block；必须加上 vertical：top属性

