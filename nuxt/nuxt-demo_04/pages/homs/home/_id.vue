<template>
  <div class="player">
    <h1>#{{ number }}</h1>
    <h2>{{ name }}</h2>
    <!-- <h3>{{arr}}</h3> -->
    <div>
      <nuxt-link to="/">go</nuxt-link>
    <p v-for="(item, index) in list" :key="index"><a v-text="item.id" href="/"></a></p>
    <div></div>

   <infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading/src/components/InfiniteLoading.vue'
// import InfiniteLoading from 'vue-infinite-loading'
var obj = 3
var doc = 444444
export default {
  // validate ({ params }) {
  //   return !isNaN(+params.id)
  // },
  name: 'list',
  serverCacheKey () {
    // Will change every 10 secondes
    return Math.floor(Date.now() / 10000)
  },
  data () {
    return {
      number: 1111111111,
      name: 1,
      // list: [],
      page: 1
    }
  },
  asyncData (opt) {
    console.log(opt)
    return axios.get('http://103.28.215.253:181/Info/lists?' + 'channel_id=' + opt.query.id + '&' + 'developer=true&' + 'page=1')
    // return axios.get('http://103.28.215.253:181/Info/detail?' + 'article_id=3209710&' + 'developer=true&' + 'page=1')
      .then((data) => {
        console.log(data.data)
        let arr = data.data.data
        // for (var i = 0; i < 2; i++) {
        //   arr.push(...arr)
        // }
        // console.log(arr)
        // $state.loaded()
        return {
          list: arr,
          obj,
          doc
        }
      })
  },
  components: {
    InfiniteLoading
  },
  methods: {
    infiniteHandler ($state) {
      this.name++
      this.page++
      // console.log(this.page, 1111)
      // var api = 'http://103.28.215.253:181/Info/lists?' + 'channel_id=3492&' + 'developer=true&' + 'page=' + this.page
      var api = 'http://103.28.215.253:181/Info/detail?' + 'channel_id=3209710&' + 'developer=true&' + 'page=' + this.page
      axios.get(api).then(({ data: {data, code} }) => {
        // console.log(data, code, 222)
        $state.loaded()
        if (code) return $state.complete()
        console.log(data, 333)
        if (!data.length) return $state.complete()
        // console.log(11)
        this.list.push(...data)
        // if (data.data.length) {
        //   this.list = this.list.concat(data.data)
        //   $state.loaded()
        //   // if (this.list.length > 60) {
        //   //   $state.complete()
        //   // }
        // } else {
        //   $state.complete()
        // }
      })
    }
  },
  head () {
    return {
      title: this.obj,
      meta: [
        { content: this.doc }
      ]
    }
  }
}
</script>

<style scoped>
.player {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}

</style>
