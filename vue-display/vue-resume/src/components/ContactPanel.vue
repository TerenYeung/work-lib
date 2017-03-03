<template>
  <div id="contactPanel" v-show="'CONTACT' === navInfo">
      {{navInfo}}
  </div>
</template>

<script>
export default {
  name: 'ContactPanel',
  props:['navInfo'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  #contactPanel{
    width: 99.2rem;
    height: 10rem;
    border: 1px solid;
  }
</style>
