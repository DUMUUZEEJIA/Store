<template>
  <ul>
    <li 
      v-for="(item, index) in arr"
      :key="index"
    >{{ item }}</li>
  </ul>
</template>
<script>
export default {
  props: {
    arr: {
      type: Array,
      default() {
        return [ 1, 2, 3 ]
      }
    }
  }
}
</script>
