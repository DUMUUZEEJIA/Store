<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="0"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,body {
  width: 100%;
  height: 100%;
  padding: constant(safe-area-inset-top)
   constant(safe-area-inset-right)
   constant(safe-area-inset-bottom) 66px 
   constant(safe-area-inset-left);
}
#app {
  display: block;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  background: goldenrod;
  padding-bottom: calc(30px + constant(safe-area-inset-bottom));
  padding-bottom: calc(30px + 20px);
}
@supports(bottom:constant(safe-area-inset-bottom)) {
    #app {
        background: white;
        padding-bottom: constant(safe-area-inset-bottom); 
        padding-bottom: calc(30px + constant(safe-area-inset-bottom));
    }
}
/* @media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
    #app {
        padding-bottom:34px; 
    }
} */
</style>
