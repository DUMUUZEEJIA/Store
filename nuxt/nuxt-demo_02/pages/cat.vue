<template>
<div>
  <ul>
    <li v-for="(item, index) in arr" :key="index"><input type="text" v-model="item.name"></li>
    <li>{{total}}</li>
  </ul>
 <!--  <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch> -->
</div>
</template>
<script>
  export default {
    data () {
      return {
        list: 1,
        arr: [
          { name: 1, num: 2 },
          { name: 1, num: 2 },
          { name: 1, num: 2 },
          { name: 1, num: 2 },
          { name: 1, num: 2 }
        ]
      }
    },
    methods: {
      onSwipeLeft () {
        console.log(11)
      }
    },
    computed: {
      total () {
        var total = 0
        this.arr.map((item, index) => {
          total += item.num
          return item
        })
        return total
      }
    },
    mounted () {
      document.addEventListener('pause', function () {
        alert('应用从前台切换到后台')
      }, false)
      document.addEventListener('resume', function () {
        alert('应用从后台切换到前台')
      }, false)
    }
  }
</script>

