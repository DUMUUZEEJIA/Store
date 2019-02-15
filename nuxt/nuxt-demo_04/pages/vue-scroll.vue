<template>
<div>
  <mt-spinner :type="3"></mt-spinner>
  <mt-spinner type="snake"></mt-spinner>
  <mt-spinner color="#2b0b54"></mt-spinner>
  <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0" >
    <li v-for="(item, index) in list" :key="index">{{ item.id }}</li>
  </ul>
</div>  
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import { InfiniteScroll, Spinner } from 'mint-ui'
// import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner)
export default {
  comments: {
    InfiniteScroll
  },
  data () {
    return {
      list: [{id: 11}]
    }
  },
  methods: {
    loadMore () {
      console.log(111, this)
      // this.loading = true
      setTimeout(() => {
        axios.get('http://103.28.215.253:181/Info/lists?' + 'channel_id=3506&' + 'developer=true&' + 'page=1')
          .then((data) => {
            console.log(data.data)
            let arr = data.data.data
            arr.push(...arr)
            arr.push(...arr)
            arr.push(...arr)
            // arr.push(...arr)
            this.list.push(...arr)
            // this.loading = false
          })
      }, 3000)
    }
  }
}
</script>
