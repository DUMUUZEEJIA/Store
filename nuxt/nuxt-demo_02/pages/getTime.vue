<template>
  <div></div>
</template>
<script>
// 复制代码
export default {
  mounted () {
    function getServerDate () {
      var xhr = null
      if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest()
      } else { // ie
        // try {
        //   xhr = new ActiveObject('Microsoft')
        // } catch (error) {
        //   console.log(error)
        // }
      }
      xhr.open('GET', '/', false) // false 不可变
      xhr.send(null)
      var date = xhr.getResponseHeader('Date')
      return new Date(date).getTime()
    }
    getServerDate()
    console.log(getServerDate(), new Date().getTime())
  }
}
</script>
