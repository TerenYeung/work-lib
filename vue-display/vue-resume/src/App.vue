<template>
  <div id="app">
    <Nav/>
  </div>
</template>



<script>
import './assets/reset.css'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components:{ Nav }
}
</script>

<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-image: url('./assets/bg.jpg');
  background-repeat: repeat;
  border: 1px solid transparent;
}


</style>
