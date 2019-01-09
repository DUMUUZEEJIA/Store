<template>
  <div>
    <i v-for='(item, index) in slots' :key="index" @click="getTypeId(index)">{{item}}</i>   
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
  },
  methods: {
    getTypeId (index) {
      this.$emit('getTypeId', index)
    }
  }
}
</script>
<style>

</style>

