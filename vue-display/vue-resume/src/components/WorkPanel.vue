<template>
  <div id="workPanel" v-show="'WORK' === navInfo">
      <h2>WORK PRESENTATION</h2>
      <div class="work-book-wrapper">
          <div class="work-book camera">
              <ol class="space dark-round">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="demo"><a href="http://teren.coding.me/work-lib/FMPlayer/fmPlayer.html"><i class="iconfont icon-demo"></i>demo</a></span>
                  <span class="code"><a href="https://github.com/TerenYeung/work-lib/tree/master/FMPlayer"><i class="iconfont icon-code"></i>code</a></span>
                  <span class="arrow"><a href="http://teren.coding.me/work-lib/FMPlayer/fmPlayer.html"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>FM音乐播放器</p>        
          </div>

          <div class="work-book camera">
              <ol class="space victory">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="demo"><a href="https://terenyeung.github.io/work-lib/animation/loading/loading.html"><i class="iconfont icon-demo"></i>demo</a></span>
                  <span class="code"><a href="https://github.com/TerenYeung/work-lib/tree/master/animation/loading"><i class="iconfont icon-code"></i>code</a></span>
                  <span class="arrow"><a href="https://terenyeung.github.io/work-lib/animation/loading/loading.html"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>CSS3加载动画集合</p>
          </div>

          <div class="work-book camera">
              <ol class="space green-pattern">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="demo"><a href="https://terenyeung.github.io/work-lib/elegant-gallery/index.html"><i class="iconfont icon-demo"></i>demo</a></span>
                  <span class="code"><a href="https://github.com/TerenYeung/work-lib/tree/master/elegant-gallery"><i class="iconfont icon-code"></i>code</a></span>
                  <span class="arrow"><a href="https://terenyeung.github.io/work-lib/elegant-gallery/index.html"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>基于Require.js的轮播组件</p>
          </div>        
      </div>

      <div class="work-book-wrapper">
          <div class="work-book camera">
              <ol class="space wood">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="demo"><a href="https://p1.bpimg.com/567571/3a9696afbd29e0ca.gif"><i class="iconfont icon-demo"></i>demo</a></span>
                  <span class="code"><a href="https://github.com/TerenYeung/work-lib/tree/master/translator"><i class="iconfont icon-code"></i>code</a></span>
                  <span class="arrow"><a href="https://p1.bpimg.com/567571/3a9696afbd29e0ca.gif"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>基于Node的命令行翻译小工具</p>   
          </div>
          <div class="work-book camera">
              <ol class="space pattern">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="demo"><a href="https://terenyeung.github.io/mywork/jquery-plugins/calendar-plugin/calendar.html"><i class="iconfont icon-demo"></i>demo</a></span>
                  <span class="code"><a href="https://github.com/TerenYeung/work-lib/tree/master/jquery-plugins"><i class="iconfont icon-code"></i>code</a></span>
                  <span class="arrow"><a href="https://terenyeung.github.io/mywork/jquery-plugins/calendar-plugin/calendar.html"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>jquery插件集合</p>   
          </div> 
          <div class="work-book camera">
              <ol class="space cute">
                  <li class="entity" v-for="idx in 5"></li>
                  <span class="demo"><a href="https://terenyeung.github.io/work-lib/mock-website/index.html"><i class="iconfont icon-demo"></i>demo</a></span>
                  <span class="code"><a href="https://github.com/TerenYeung/work-lib/tree/master/mock-website"><i class="iconfont icon-code"></i>code</a></span>
                  <span class="arrow"><a href="https://terenyeung.github.io/work-lib/mock-website/index.html"><i class="iconfont icon-go"></i></a></span>
              </ol>
              <p>Mock Website</p>    
          </div>   
      </div>
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
    // border: 1px solid;
    display: flex;
    flex-direction: column;
  }
  h2{
    font-family: monospace;
    font-size: 1.8rem;
  }
  .work-book-wrapper{
    flex-basis: 100%;

    display: flex;
    margin: 3rem;
    justify-content: space-around;
  }
  .work-book{
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


    &>a{
      transition : color .3s;
      color: #fff;
    }
    &:hover{
      &>a{
        color: #ccc;
      }   
    }
    &.demo{
      top: 2rem;
    }
    &.code{
      top: 5rem;
    }
    &.arrow{
      right: 1.8rem;
      bottom: 1rem;
    }
    i{
      padding-right: .4rem;
      font-size: 1.4rem;
      &.icon-go{
        font-size: 2rem;
        transition: color .3s;
        &:hover{
          color: #ccc;
        }
      }
    }
  }

  .dark-round>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/dark_round_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .cute>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/cute_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .green-pattern>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/green_pattern_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .victory>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/victory_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }

  .wood>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/wood_0@{counter}.png') no-repeat;
        background-size: cover;     
      };
      .loop( @counter + 1 );
    }
    .loop(1);
  }
  .pattern>li{
    position: absolute;
    z-index: 99;
    width: 4rem;
    height: 15rem;
    .loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/pattern_0@{counter}.png') no-repeat;
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
  }
  .entity{
    // transition: all 1s;
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
.space{
  // transform: rotateX(45deg)!important;
}
.space:hover{
  .entity{
    &:first-child{
      transform-origin: left center;
      // transform: rotateY(-60deg);
    }
    &:nth-child(2){
      // background: rgba(0,0,255,.2);
      transform-origin: left center; 
      transform: translateX(4rem) rotateY(-60deg);    
    };
    &:nth-child(3){
      // background: rgba(0,255,0,.2);
      transform-origin:center center;
      transform:  translateZ(1.73rem)  translateX(5rem) rotateY(60deg);
    }
    &:nth-child(4){
      // background: rgba(0,255,255,.2);
      transform-origin: center center;
      transform: translateZ(1.73rem)  translateX(7rem) rotateY(-60deg);
    }    
    &:nth-child(5){
      // background: rgba(255,0,0,.2);
      transform-origin: center center;
      transform: translateZ(1.73rem)  translateX(9rem) rotateY(60deg);
    }    
  }
}
</style>
