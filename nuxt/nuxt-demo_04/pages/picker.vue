<template>
<section>
  <div>我是picker</div>
    <mt-datetime-picker
      ref="picker5"
      type="time"
      v-model="value5"
      @confirm="handleChange">
    </mt-datetime-picker>
</section>
</template>
<script>
import { DatetimePicker } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
Vue.component(DatetimePicker.name, DatetimePicker)
export default {
  components: {
    DatetimePicker
  },
  data () {
    return {
      value5: '04:32'
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleChange (value) {
      // Toast({
      //   message: '已选择 ' + value.toString(),
      //   position: 'bottom'
      // })
    }
  }
}
</script>
<style>
.mint-datetime {
  display: block !important;
}
</style>
