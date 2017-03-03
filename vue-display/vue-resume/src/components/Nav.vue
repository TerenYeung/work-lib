<template>
  <div id="nav">
      <ul class="nav-box">
        <li v-for="item in navName" @click="selected=item">
          <a href="#" >{{item}}</a>        
        </li>
      </ul>
      <div class="panel-wrapper">
          <BlogPanel v-bind:navInfo="selected"/>
          <WorkPanel v-bind:navInfo="selected"/>
          <AboutPanel v-bind:navInfo="selected"/>
          <ContactPanel v-bind:navInfo="selected"/>          
      </div>
  </div>
</template>

<script>

import BlogPanel from './BlogPanel'
import WorkPanel from './WorkPanel'
import AboutPanel from './AboutPanel'
import ContactPanel from './ContactPanel'
export default {
  name: 'Nav',
  components:{ BlogPanel , WorkPanel , AboutPanel , ContactPanel},
  data () {
    return {
      selected:'ABOUT',
      'navName':[
        'BLOG',
        'WORK',
        'ABOUT',
        'CONTACT'
      ]
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">

#nav{
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  // border: 1px solid;
}
.nav-box{
  // border: 1px solid red;
  
  display: flex;
  justify-content: space-around;
  width: 99.2rem;
  >li{
      border-bottom: .2rem solid transparent;
    &:hover{
      border-bottom: .2rem solid #333;
    }
  }
  a{
    font-size: 2rem;
  }
}
.panel-wrapper{
  margin-top: 2rem;
}
</style>
