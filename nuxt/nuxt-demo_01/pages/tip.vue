<template>
  <section>
<List/>
<List :tip="tip"/>
  </section>
</template>
<script>
  import List from '~/components/Content'
  export default {
    components: {
      List
    },
    data () {
      return {
        tip: 'adsa'
      }
    }
  }
</script>
