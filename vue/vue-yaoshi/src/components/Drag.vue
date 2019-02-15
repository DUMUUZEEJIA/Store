<template>
  <section>
    <div class="box1">1</div>
    <div class="box2">2</div>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.box1 {
  height: 200px;
  width: 200px;
  background: green;
}
.box2 {
  .box1;
  height: 400px;
  width: 600px;
}
</style>
