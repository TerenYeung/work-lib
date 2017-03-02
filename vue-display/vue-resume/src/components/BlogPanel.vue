<template>
  <div id="blogPanel" v-show="'BLOG' === 'BLOG'">
      <!-- {{navInfo}} -->
      <div class="blog-book camera">
          <ol class="space dark-machine">
              <li class="entity" v-for="idx in 5"></li>
          </ol>        
      </div>


  </div>
</template>

<script>
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
    border: 1px solid;
  }
  .dark-machine{
    position: relative;
    width: 16rem;
    // overflow: hidden;
    margin: 0 auto;
    height: 15rem;
    // background: #eee;
    // border: 1px solid red;
  }
  .dark-machine>li{
    position: absolute;
    width: 4rem;
    height: 15rem;
    // float: left;
    // border: 1px solid red;
    .dark-machine-loop (@counter) when (@counter < 6){   
      &:nth-child(@{counter}){
        background: #333 url('../assets/images/dark_machine_0@{counter}.png') no-repeat;
        background-size: cover;
        // background-color: rgba(255,255,0,.2);       
      };
      .dark-machine-loop( @counter + 1 );
    }
    .dark-machine-loop(1);
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
    &:nth-child(2){
      // background: rgba(0,0,255,.2);
      transform-origin: left center; 
      transform: translateX(40px) rotateY(-22.5deg);    
    };
    &:nth-child(3){
      // background: rgba(0,255,0,.2);
      transform-origin: left center;
      transform: translateX(76.95px) translateZ(15.3px) rotateY(-50deg);
    }
    &:nth-child(4){
      // background: rgba(0,255,255,.2);
      transform-origin: left center;
      transform: translateX(102.66px) translateZ(45.94px) rotateY(-72.5deg);
    }    
    &:last-child{
      // background: rgba(255,0,0,.2);
      transform-origin: left center;
      transform: translateX(114.69px) translateZ(84.09px) rotateY(-90deg);
    }
  }
} 



// .rotate-blog-book(@count) when (@count > 0){
//   &:nth-child(@count){
//     transform-origin: left center;
//     transform: translateX((@{count}-1)*22 translateZ() rotateY((@{count}-1*22.5)px);
//   }
// }



/*

img-no     translateX      translateZ          rotateY    

  1            0               0                  0
  2            40              0               22.5deg
  3       40+40*cos(22.5deg)  40*sin(22.5deg)    50deg  
  4                                             72.5deg 
  5                                              90deg
 */

</style>
