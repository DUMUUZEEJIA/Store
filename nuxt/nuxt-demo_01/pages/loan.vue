<template>
  <div>
    <Logo />
    <List @getTypeId="getTypeId"/>
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
export default {
  components: {
    Logo,
    List,
    neirong
  },
  async asyncData () {
    let data = (await axios.get('http://103.28.215.253:181//Info/lists?channel_id=' + 3506 + '&page=1&developer=true')).data.data
    return {
      aa: data
    }
  },
  data () {
    return {
      arr: [],
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
    }
  }
}
</script>
<style>

</style>

