<template>
  <div class="box">
    <button>开始</button>
    <section>
       <ul>
         <li class="circle"></li>
       </ul>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      circle: []
    }
  },
  methods: {
    drawCircle () {
      var top = this.random(0, 100)
      var left = this.random(0, 100)
      var circle = {
        top: top + '%',
        left: left + 'px'
      }
      this.circle.push(circle)
    },
    random (start, end) {
      return Math.floor(Math.random() * (start - end) + start)
    }
  }
}
</script>
<style>
.box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
}
.circle {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  background: red;
}
</style>
