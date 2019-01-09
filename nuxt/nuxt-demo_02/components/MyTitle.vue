<template>
  <h1 class="my-title">{{solts}}</h1>
</template>
<script>
  export default {
    props: {
      solts: {
        default () {
          return 100
        }
      }
    }
  }
</script>
<style scoped>
.my-title {
  height: 20px;
}
</style>

