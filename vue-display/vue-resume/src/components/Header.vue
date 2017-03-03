<template>
  <div id="header">
   <div class="flex-box">
     <div class="flex-innerBox">
        <div class="flex-item octa-camera">
              <div class="octa-space">
                <div class="octa-space-wrap octa-space-wrap-common">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="octa-space-wrap octa-space-wrap-common">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>       
        </div>
     </div>
   </div>
  </div>
</template>



<script>
export default {
  name: 'Header'
}
</script>

<style lang="less">
.flex-box{
  display: flex;
/*  border: 1px solid; */
  width: 992px;
  margin: 0 auto;
  padding: 20px;
  justify-content: space-around;
  flex-direction: column;
}
.flex-innerBox{
  display: flex;
  height: 80px;
/*  border: 1px solid green; */
  margin: 10px;
  justify-content: space-around;
}
.flex-item{
  flex-basis: 100px;
  height: 100px;
/*  border:1px solid red; */
  margin: 10px;
}

@octa-camera-item-size: 50px;

.octa-camera{
  perspective: 300px;
  &>.octa-space{
    transform-style: preserve-3d;
    position: relative;
    transform-origin: center center -30px;
    animation: octa-camera 3s linear infinite ;
  }
  
  .octa-space-wrap-common{
    transform-style:preserve-3d;
    &>div{
      position: absolute;
      width: 0;
      height: 0;
      border-width: 0 30px 52px ;//60*sin60
      border-style:solid;
      border-color: transparent;
      
      &:first-child{
        border-color: transparent transparent rgba(255,0,0,.2); 
        transform-origin: center bottom;
        transform: translateX(20px) translateY(0px) rotateX(35.36deg);
      }
      &:nth-child(2){
        border-color: transparent transparent rgba(0,255,0,.2); 
        transform-origin: right bottom;
        transform: translateX(20px) translateY(0px) rotateY(-90deg) rotateX(-35.36deg);
      }
      &:nth-child(3){
        border-color: transparent transparent rgba(0,0,255,.2); 
        transform-origin: left bottom;
        transform: translateX(20px) translateY(0px) rotateY(90deg) rotateX(-35.36deg);
      }       
      &:nth-child(4){
        border-color: transparent transparent rgba(255,255,0,.2); 
        transform-origin: center bottom;
        transform: translateX(20px) translateY(0px) translateZ(-60px) rotateX(-35.36deg);
      }       
    }
  }
}

 .octa-space-wrap:last-child{
        transform-origin: center 71px -30px;
        transform: rotateX(180deg) translateY(38px);
  &>div{
    &:firs-child{
            border-color: transparent transparent rgba(255,0,255,.2);     
    }
    &:nth-child(2){
            border-color: transparent transparent rgba(0,255,255,.2);     
    }
    &:nth-child(3){
            border-color: transparent transparent rgba(0,165,255,.2);     
    }
    &:last-child{
            border-color: transparent transparent rgba(165,0,255,.2);     
    }
  }
} 

@keyframes octa-camera{
  0{
    transfrom:rotateY(0);
  }
  50%{
    transform: rotateY(180deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}

</style>
