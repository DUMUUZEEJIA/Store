<template>
  <div>
    <div @click="back">返回</div>
    <ul>
      <nuxt-link v-for="(item, index) in arr" :key="item.id" :to="item.id+'?index=1'" tag="li" replace
       :class="active == item.id ? 'red':''">{{item.name}}</nuxt-link>
    </ul>
    <section>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item.id}}</li>
    </ul>
    </section>
    <nuxt-link :to="`${path}`">baidu</nuxt-link>
  </div>
</template>
<script>
import axios from 'axios'
var xinyongka = [
  {name: '贷款1', id: '3498'},
  {name: '贷款2', id: '3492'},
  {name: '贷款3', id: '3493'}
]
var loan = [
  {name: '理财1', id: '3488'},
  {name: '理财2', id: '3489'},
  {name: '理财3', id: '3497'}
]
var licai = [
  {name: '信用卡', id: '3494'},
  {name: '信用卡理财', id: '3495'},
  {name: '信用卡', id: '3496'}
]
export default {
  props: {
    path: {
      default () {
        return '1111'
      }
    }
  },
  data () {
    return {
    }
  },
  asyncData (opt) {
    let id = opt.params.id
    let arr = null
    switch (true) {
      case /3488|3489|3497/g.test(+id):
        arr = loan
        break
      case /3498|3492|3493/g.test(+id):
        arr = xinyongka
        break
      case /3494|3495|3496/g.test(+id):
        arr = licai
        break
      default:
        break
    }
    console.log(opt)
    return axios.get('http://103.28.215.253:181/Info/lists?' + 'channel_id=' + opt.params.id + '&' + 'developer=true&' + 'page=1')
      .then((data) => {
        // console.log(data.data)
        let cc = data.data.data
        return {
          list: cc,
          arr,
          active: opt.params.id
        }
      })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    nextPage (id, index) {
      this.$router.replace({params: {id}})
      // this.$router.replace('/xinyongka/' + id)
    }
  }
}
</script>
<style>
.red {
  color:red;
}
</style>

