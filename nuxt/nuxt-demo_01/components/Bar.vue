<template>
  <div>
    <i v-for='(item, index) in slots' :key="index">{{item}}</i>   
  </div>
</template>
<script>
export default {
  props: {
    slots: {
      type: Array,
      default () {
        return ['贷款', '理财']
      }
    }
  }
}
</script>
<style>

</style>

