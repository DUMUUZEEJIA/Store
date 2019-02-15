<template>
  <div>
    <Logo />
    <List @getTypeId="getTypeId" />
    <ul>
      <router-link v-for="(item, index) in arr" :to="'/loan?id='+item.id" :key="index" >{{item.name}}</router-link>
      <li v-for="(item, index) in arr"  :key="index" @click="nextPage(item.id)">{{item.name}}</li>
    </ul>
    <neirong :data="currentData" />
    ----------------------------------
    <neirong :data="aa" />
  </div>
</template>
<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import List from '~/components/list.vue'
import neirong from '~/components/neirong.vue'
var arr = [
  {name: '贷款', id: '3488'},
  {name: '理财', id: '3490'},
  {name: '信用卡', id: '3491'}
]
export default {
  components: {
    Logo,
    List,
    neirong
  },
  async asyncData (context) {
    let { query: { id }, route } = context
    console.log(id, route, route.hash)
    let data = (await axios.get('http://103.28.215.253:181//Info/lists?channel_id=' + id + '&page=1&developer=true')).data.data
    // console.log(data)
    return {
      aa: data
    }
  },
  data () {
    return {
      arr: arr,
      active: 0,
      currentData: []
    }
  },
  methods: {
    async getTypeId (index) {
      this.active = index
      index = index === 0 ? '3506' : '3507'
      let data = (await axios.get('http://103.28.215.253:181//Info/lists?channel_id=' + index + '&page=1&developer=true')).data.data
      // let data = [
      //   {
      //     title: 13
      //   }
      // ]
      console.log(data instanceof Array, data)
      this.arr[index] = data
      this.currentData = this.arr[index]
    },
    nextPage (id) {
      this.$router.push('/loan?id=' + id)
    }
  }
}
</script>
<style>

</style>

