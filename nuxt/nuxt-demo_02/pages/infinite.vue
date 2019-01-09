<template>
<div>{{list}}</div>
    <!-- <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }"> -->
    <!-- <wv-group title="无限滚动加载" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <wv-cell title="条目" v-for="item in list" :key="item" :value="item"></wv-cell>
    </wv-group>
    <p v-show="loading" class="loading-tips">
      <wv-spinner type="snake" color="#444" :size="24"></wv-spinner>
  </p> -->
</div>
</template>
<script>
// import Vue from 'vue'
// import { InfiniteScroll, Group, Cell } from 'we-vue'
// Vue.component(Group.name, Group)
// Vue.component(Cell.name, Cell)
export default {
  comments: {
    // InfiniteScroll
  },
  data () {
    return {
      list: ''
    }
  },
  methods: {
    // loadMore () {
    //   this.loading = true
    //   setTimeout(() => {
    //     let last = this.list[this.list.length - 1]
    //     for (let i = 1; i <= 10; i++) {
    //       this.list.push(last + i)
    //     }
    //     this.loading = false
    //   }, 2500)
    // }
  }
}
</script>