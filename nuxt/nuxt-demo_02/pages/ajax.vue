<template>
  <div>
    <button @click="getData">按钮</button>
    <div>{{data}}</div>
  </div>
</template>
<script>
// 载入axios
import Qs from 'qs'
import axios from 'axios'
// import VueAxios from 'vue-axios'
axios.create({
  baseURL: 'http://localhost',
  transformRequest: [function (data) {
    data = Qs.stringify(data)
    return data
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
// console.log(axios_instance)
// Vue.use(VueAxios, axios_instance)
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
  data () {
    return {
      data: '',
      id: 4963314
    }
  },
  methods: {
    getData () {
      var url = 'http://103.28.215.253:181/Info/lists?'
      url = 'http://103.28.215.253:181/Info/detail?'
      url = 'http://103.28.215.253:181/ILoan/action'
      // url = 'http://103.28.215.253:181/ILoan/action?product=1&device_type=m
      // &device_id=aad50b4de23eb3c85f856044e42fa1b6&rand=6821
      // &timestamp=1523176626690&token=d61deda519e272012e9f333339f88459&user_id='
      url = 'http://103.28.215.253:181/ILoan/action?product=1&device_type=m&device_id=aad50b4de23eb3c85f856044e42fa1b6&rand=6821&timestamp=1523176626690&token=d61deda519e272012e9f333339f88459&user_id='
      // var opt = 'channel_id=' + 3493 + '&' + 'developer=true&' + 'page=1'
      // var opt = 'article_id=' + this.id + '&' + 'developer=true&'
      axios.get(url).then(res => {
        console.log(res)
      })
      // axios({
      //   method: 'post',
      //   url: url,
      //   data: {
      //     product: 1,
      //     device_type: 'm',
      //     device_id: 'aad50b4de23eb3c85f856044e42fa1b6&rand=6821',
      //     timestamp: '1523176626690',
      //     token: 'd61deda519e272012e9f333339f88459',
      //     user_id: '111'
      //   }
      // }).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>
