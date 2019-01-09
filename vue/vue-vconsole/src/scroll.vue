<template>
  <div></div>
</template>
<script>
(function(){
  var overscroll = function (els) {
    for (var i = 0; i < els.length; ++i) {
      var el = els[i]
      el.addEventListener('touchstart', function () {
        var top = this.scrollTop
        var totalScroll = this.scrollHeight
        var currentScroll = top + this.offsetHeight
        if (top === 0) {
          this.scrollTop = 1
        } else if (currentScroll === totalScroll) {
          this.scrollTop = top - 1
        }
      })
      el.addEventListener('touchmove', function (evt) {
        if (this.offsetHeight < this.scrollHeight)
          evt._isScroller = true
      })
    }
  }
  //禁止body的滚动事件
  document.body.addEventListener('touchmove', function (evt) {
    if (!evt._isScroller) {
      evt.preventDefault()
    }
  })
  // overscroll(document.querySelectorAll('.scroll'))
}) ()
</script> 
