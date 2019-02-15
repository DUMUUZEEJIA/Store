var Koa = require('koa')
var app = new Koa()
var json = require('koa-json')
var open = require('open')
var Router = require('koa-router')
var str = require('./data.js')
var router = new Router()
var flag = true
app.use(json())
// app.use(async ctx => ctx.body ='hello word' )
console.log(str)
router.get('/test', ctx => ctx.body = str)
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000, () => {
  // if (flag) {
  //   open('http://localhost:3000')
  //   flag = false
  // }
console.log(3000)
})