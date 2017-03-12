<template>
  <div class="page">
    <header>
        <Topbar/>
    </header>
    <main>
        <ResumeEditor/>
        <ResumePreview/>
    </main> 
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icon'
import store from './store/index'
import getAVUser from './lib/getAVUser.js'

export default {
  name: 'app',
  store,
  components:{Topbar,ResumeEditor,ResumePreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
    //vm实例创建后，从localStorage获取数据
    let state = localStorage.getItem('state')
    if(state){state = JSON.parse(state)}
        console.log(state)
    this.$store.commit('initData',{})
    this.$store.commit('setUser',getAVUser())
  }
}
</script>

<style lang="stylus">
.page
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eaebec;

.page
    >main
      flex-grow: 1;

.page
    >main
        min-width: 1024px;
        max-width: 1440px;
        margin: 16px 0;
        width: 100%;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-self: center;

#resumeEditor
    min-width: 35%;
    background: #444;

#resumePreview
    flex-grow: 1;
    margin-left: 16px;
    background: #777;

svg.icon
    height: 20px;
    width: 20px;
    fill: currentColor;
    vertical-align -0.1em;
    font-size: 16px;

</style>
