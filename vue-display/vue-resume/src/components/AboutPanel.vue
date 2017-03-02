<template>
  <div id="aboutPanel" v-show="'ABOUT' === navInfo">
      {{navInfo}}
  </div>
</template>

<script>
export default {
  name: 'AboutPanel',
  props:['navInfo'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  #aboutPanel{
    width: 99.2rem;
    height: 10rem;
    border: 1px solid;
  }
</style>
