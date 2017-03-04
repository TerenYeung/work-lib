<template>
  <div id="contactPanel" v-show="'CONTACT' === navInfo">
      <ul class="contact-list">
        <li><a><i class="iconfont icon-phone"></i>: 18202026126</a></li>
        <li><a><i class="iconfont icon-email"></i>: terenyeung@gmail.com</a></li>
        <li><a href="http://www.jianshu.com/u/df9b9eac098b"><i class="iconfont icon-zhuye"></i>: jianshu.com/terenyeung</a></li>
        <li><a href="https://github.com/TerenYeung"><i class="iconfont icon-github"></i>: github.com/TerenYeung</a></li>
        <li><a href="https://www.zhihu.com/people/ternenceyeung"><i class="iconfont icon-zhihu"></i>: zhihu.com/people/ternenceyeung</a></li>
      </ul>
      <div class="motto">
        <h3>快到我的碗里来...</h3>
        <img src="../assets/images/smile.gif" alt="">
      </div>
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
    // border: 1px solid;
  }
  .iconfont{
    font-size: 2rem;
    color: #333;
  }

  .contact-list{
    width: 32rem;
    margin: 4rem auto;
    text-align: left;
  }
  li{
    padding: 2rem 0;
     a{
        transition: color .3s;
        &:hover{
        color: #aaa;
       }
     }   
  }
  .motto{
    margin: 2rem 0;
  }

</style>
