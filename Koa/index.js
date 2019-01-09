const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  // console.log(ctx)
  ctx.body = '圣诞快乐'
})
app.listen(9999, () => {
  console.log(9999)
})