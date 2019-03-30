# CSS 常见问题

## CSS 单位
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
```
```