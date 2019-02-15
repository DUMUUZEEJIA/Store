<template>
  <!-- <ul class="players">
    <li v-for="user in users" :key="user.id">
    <nuxt-link :to="'/homs/home/'+user.id" >{{ user.name }}</nuxt-link>
    </li>
  </ul> -->
    <ul class="players">
    <li v-for="user in users" :key="user.id">
    <a @click="go(user.id)">{{ user.name }}</a>
    </li>
  </ul>
</template>
<script>
  export default {
    props: [ 'users' ],
    data () {
      return {

      }
    },
    methods: {
      go (id) {
        this.$router.push('/homs/home/' + id)
        this.$emit('go', id)
      }
    }
  }
</script>
<style>
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.players li a:hover {
  color: orange;
}
</style>
