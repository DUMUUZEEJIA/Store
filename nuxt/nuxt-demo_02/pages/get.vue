<template>
  <button @click="getData">点我下</button>
</template>
<script>
  import axios from 'axios'
  export default {
    methods: {
      getData () {
        var url = 'https://test-fin.pingan.com.cn:10262/api/loan/loanAssistant?'
        var opt = 'name=大大&mobile=18911788643&loan=3万以下&house=1&car=1&insurance=1&city=深圳&ip=10001&device_id=2'
        axios.get(url + opt).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>
