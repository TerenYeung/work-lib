<template>

  <div id="blogPanel" v-show="'BLOG' === navInfo">
      <!-- {{navInfo}} -->
      <h2>BLOG PITHY</h2>
      <div class="blog-book-wrapper">
          <div class="blog-book camera">
              <ol class="space dark-machine">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="view"><i class="iconfont icon-view"></i>2k+</span>
                  <span class="heart"><i class="iconfont icon-heart"></i>60+</span>
                  <span class="arrow"><a href="http://www.jianshu.com/p/3e874fef936d"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>Vue.js起手式+Vue小作品实战</p>        
          </div>

          <div class="blog-book camera">
              <ol class="space ease-bus">
                  <li class="entity" v-for="idx in 5"></li>
                   <span class="view"><i class="iconfont icon-view"></i>490+</span>
                  <span class="heart"><i class="iconfont icon-heart"></i>11+</span>
                  <span class="arrow"><a href="http://www.jianshu.com/p/e70c9cfbdb38"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>Canvas动画原理解析</p>
          </div>

          <div class="blog-book camera">
              <ol class="space gray-train">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="view"><i class="iconfont icon-view"></i>370+</span>
                  <span class="heart"><i class="iconfont icon-heart"></i>13+</span>
                  <span class="arrow"><a href="http://www.jianshu.com/p/0ea4c31d5503"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>JavaScript的创世神话</p>
          </div>        
      </div>

      <div class="blog-book-wrapper">
          <div class="blog-book camera">
              <ol class="space music-girl">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="view"><i class="iconfont icon-view"></i>290+</span>
                  <span class="heart"><i class="iconfont icon-heart"></i>4+</span>
                  <span class="arrow"><a href="http://www.jianshu.com/p/b23ada34ef46"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>同源策略与跨域资源共享的纠缠</p>   
          </div>
          <div class="blog-book camera">
              <ol class="space landscape">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="view"><i class="iconfont icon-view"></i>100+</span>
                  <span class="heart"><i class="iconfont icon-heart"></i>3+</span>
                  <span class="arrow"><a href="http://www.jianshu.com/p/dada47fd504f"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>左手Cookie“小甜饼”，右手Web Storage</p>   
          </div> 
          <div class="blog-book camera">
              <ol class="space organic-garden">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="view"><i class="iconfont icon-view"></i>180+</span>
                  <span class="heart"><i class="iconfont icon-heart"></i>11+</span>
                  <span class="arrow"><a href="http://www.jianshu.com/p/76130f4d7cf9"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>移动端开发系列——像素与viewport</p>    
          </div>   
      </div>
  </div>
</template>

<script>
import '../assets/iconfont.css'
export default {
  name: 'BlogPanel',
  props:['navInfo'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  #blogPanel{
    width: 99.2rem;
    // border: 1px solid;
    display: flex;
    flex-direction: column;
  }
  h2{
    font-family: monospace;
    font-size: 1.8rem;
  }
  .blog-book-wrapper{
    flex-basis: 100%;

    display: flex;
    margin: 3rem;
    justify-content: space-around;
  }
  .blog-book{
     flex-basis: 20rem;
     padding: 5px;
     background-color: #fff;
     border-radius: 3px;     
  }

  .space{
    position: relative;
    width: 20rem;
    margin: 0 auto;
    height: 15rem;
    background: #434343;
  }

  .space>span{
    font-size: 1.4rem;
    color: white;
    position: absolute;
    right: 1rem;
    &.view{
      top: 2rem;
    }
    &.heart{
      top: 5rem;
    }
    &.arrow{
      right: 1.8rem;
      bottom: 1rem;
    }
    i{
      padding-right: .4rem;
      &.icon-go{
        font-size: 2rem;
        transition: color .3s;
        &:hover{
          color: #ccc;
        }
      }
    }
  }

  .dark-machine>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/dark_machine_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .ease-bus>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/ease_bus_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .gray-train>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/gray_train_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .music-girl>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/music_girl_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }

  .organic-garden>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/organic_garden_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .landscape>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/landscape_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }

    /*3d旋转特效*/
.camera{
  perspective: 500px;
  // border: 1px solid green;
  transform-style: preserve-3d;
  &>.space{
    transform-style: preserve-3d;
    // height: 300px;
    // border: 1px solid red;
    transform: rotateX(0deg);
  }
  .entity{
    transition: all .3s;
    &:nth-child(2){
      // background: rgba(0,0,255,.2);
      transform-origin: left center; 
      transform: translateX(4rem);   
    };
    &:nth-child(3){
      // background: rgba(0,255,0,.2);
      transform-origin: left center;
      transform: translateX(8rem);
    };
    &:nth-child(4){
      // background: rgba(0,255,255,.2);
      transform-origin: left center;
      transform: translateX(12rem);
    }    
    &:nth-child(5){
      // background: rgba(255,0,0,.2);
      transform-origin: left center;
      transform: translateX(16rem);
    }
  }
} 

.space:hover{
  .entity{
    &:nth-child(2){
      // background: rgba(0,0,255,.2);
      transform-origin: left center; 
      transform: translateX(40px) rotateY(-22.5deg);    
    };
    &:nth-child(3){
      // background: rgba(0,255,0,.2);
      transform-origin: left center;
      transform: translateX(76.05px) translateZ(15.3px) rotateY(-50deg);
    }
    &:nth-child(4){
      // background: rgba(0,255,255,.2);
      transform-origin: left center;
      transform: translateX(101.36px) translateZ(45.94px) rotateY(-72.5deg);
    }    
    &:nth-child(5){
      // background: rgba(255,0,0,.2);
      transform-origin: left center;
      transform: translateX(113.29px) translateZ(84.09px) rotateY(-90deg);
    }    
  }
}






</style>
