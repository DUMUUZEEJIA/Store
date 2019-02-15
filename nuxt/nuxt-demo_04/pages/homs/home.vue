<template>
  <div class="container" @scroll="onScroll">
     <my-title :solts="id"></my-title>
    <div class="left">
      <h2><nuxt-link to="/">Players{{id}}</nuxt-link></h2>
      <ul class="players">
        <li v-for="user in users" :key="user.id">
          <nuxt-link :to="'/homs/home/'+user.id + '?id='+ user.id" >{{ user.name }}</nuxt-link>
        </li>
      </ul>

      <my-nav :users="users" @go="go"></my-nav>
      <hr>
    </div>
    <div class="right">
      <nuxt-child :key="$route.params.id"/>
    </div>
    <hr>
  </div>
</template>
<script>
import MyNav from '~/components/MyNav.vue'
import MyTitle from '~/components/MyTitle.vue'
var arr = [
  { id: 3488, name: 'Kobe Bryant', number: 24 },
  { id: 3489, name: 'Michael Jordan', number: 23 },
  { id: 3490, name: 'Stephen Curry', number: 30 },
  { id: 3491, name: 'Lebron James', number: 23 },
  { id: 3492, name: 'Kevin Durant', number: 35 },
  { id: 3493, name: 'Kyrie Irving', number: 2 }
]
export default {
  // asyncData ({ env }) {
  //   return { users: env.users }
  // },
  data () {
    return {
      users: arr,
      id: 0,
      currentScroll: []
    }
  },
  components: {
    MyNav,
    MyTitle
  },
  methods: {
    go (id) {
      this.id = id
      console.log(1)
    },
    onScroll () {
      console.log(1)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.currentScroll.shift()
      this.currentScroll.unshift(scrollTop)
    }
  },
  ready () {
  },
  mounted () {
    window.onscroll = this.handleScroll
    // window.addEventListener('scroll', this.handleScroll)
    document.documentElement.scrollTop = 200
  }
}
</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
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
