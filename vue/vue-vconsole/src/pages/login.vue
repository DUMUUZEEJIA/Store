<template>
  <div class="mask">
    <loginBox/>
  </div>
</template>
<script>
import loginBox from '@/pages/loginBox'
export default {
  components: {
    loginBox
  }
}
</script>
<style>
.mask {
  position: fixed;
  top: 0;
/*   bottom: 0; */
  left: 0;
/*   right: 0; */
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7)
}
</style>

