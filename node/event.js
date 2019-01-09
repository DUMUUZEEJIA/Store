var event = require('events')
console.log(event)
var eventEmiters = new event.EventEmitter()

// eventEmiters.on('eventName', eventHanler) // 绑定事件

// eventEmiters.emit('eventName') // 触发事件
var contentHandler = () => {
  console.log('链接成功')
  eventEmiters.emit('data_received')
}
eventEmiters.on('connection', contentHandler)

eventEmiters.on('data_received', function (params) {
  console.log(111111111)
})
eventEmiters.emit('connection')
console.log('执行完')

