<template>
  <div>
    <i v-for='(item, index) in data' :key="index" >{{item.title}}11</i>   
  </div>
</template>
<script>
export default {
  props: [
    'data'
  ],
  methods: {
  }
}
</script>
<style>

</style>

