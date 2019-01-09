<template>
  <div>
    <i v-for="(item, index) in abc" :key="index"  @click="change(index)">{{item}}
    <br/>
    <a v-for="(item, index) in abc" :key="item" :aaa="arr+1" :href="`#${item}`" v-show="nowIndex == index">{{item}}</a>
    </i>
    <div v-if="1">{{arry}}1111111111111111</div>
  </div>
</template>
<script>
  export default {
    props: ['abc'],
    beforeMount () {
      console.log(this.abc, 111111)
      this.arry++
      setTimeout(function () {
        console.log(1)
      }, 0)
    },
    data () {
      return {
        arr: '1',
        nowIndex: 0,
        obj: {
          0: 11111111,
          1: 222222222222,
          2: 33333333333333
        },
        nowObj: '',
        arry: 1
      }
    },
    methods: {
      change (index) {
        this.nowIndex = index
        this.nowObj = this.obj[index]
      }
    },
    mounted () {
      console.log(2)
    }
  }
</script>