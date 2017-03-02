<template>
  <div id="workPanel" v-show="'WORK' === navInfo">
      {{navInfo}}
  </div>
</template>

<script>
export default {
  name: 'WorkPanel',
  props:['navInfo'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  #workPanel{
    width: 99.2rem;
    border: 1px solid;
  }
</style>
