<template>
  <div class="hello">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App123'
    }
  },
  mounted () {
    document.addEventListener('pause', function () {
      console.log('应用从前台切换到后台')
    }, false)
    document.addEventListener('resume', function () {
      console.log('应用从后台切换到前台')
    }, false)
    var b = getTime()
    function getTime () { return Date.now() }
    document.addEventListener('webkitvisibilitychange', function () {
      console.log(1)
      if (document.webkitVisibilityState === 'hidden') {
        b = getTime()
      } else {
        console.log(2)
        document.body.appendChild(document.createTextNode('间隔:' + (getTime() - b)))
      }
    })
    document.addEventListener('mozvisibilitychange', function () {
      console.log(3)
      if (document.mozVisibilityState === 'hidden') {
        b = getTime()
      } else {
        console.log(4)
        document.body.appendChild(document.createTextNode('间隔:' + (getTime() - b)))
      }
    })
    document.addEventListener('visibilitychange', function () {
      console.log(11111)
    })
    var hidden, state, visibilityChange
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden'
      visibilityChange = 'visibilitychange'
      state = 'visibilityState'
      console.log(22222)
    } else if (typeof document.mozHidden !== 'undefined') {
      hidden = 'mozHidden'
      visibilityChange = 'mozvisibilitychange'
      state = 'mozVisibilityState'
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden'
      visibilityChange = 'msvisibilitychange'
      state = 'msVisibilityState'
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden'
      visibilityChange = 'webkitvisibilitychange'
      state = 'webkitVisibilityState'
    }
    console.log(hidden, visibilityChange, state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
