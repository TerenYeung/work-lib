<template>
  <div id="app">
    <Header/>
    <Nav/>
  </div>
</template>

<script>
import './assets/reset.css'
import Nav from './components/Nav'
import Header from './components/Header'
export default {
  name: 'app',
  components:{ Nav , Header}
}
</script>

<style lang="less">
#app {
  font-family: Monospace,Helvetica, '微软雅黑',Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url('./assets/images/bg.jpg');
  background-repeat: repeat;
  border: 1px solid transparent;
}


</style>
