<template>
  <div>
    <keep-alive>
      <Lis :arr="arr"/>
    </keep-alive>
    <button @click="add">add</button>
    <div @click="back">back</div>
  </div>
</template>
<script>
import Lis from '../components/Lis'
export default {
  components: {
    Lis
  },
  data() {
    return {
      arr: [ 1, 2, 4, 5 ]
    }
  },
  mounted() {
    var arr = []
    arr.length = 3
    arr.fill(true)
    this.arr = arr
  },
  methods: {
    back() {
      this.$router.back()
    },
    add() {
      var last = this.arr[this.length-1]
      
      this.arr.push(++last)
    },
    isShow(id) {
      return this.arr[id]
    },
    changes(id) {
      var arr = this.arr.map((item, index) => {
        if (index === id) {
          item = false
        }
          return item
      })
      console.log(arr)
      this.arr = arr
    }
  }
}
</script>
