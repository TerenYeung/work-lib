<template>
  <div id="aboutPanel" v-show="'ABOUT' === navInfo">
      <div class="profile">
        <a href="#"><img src="../assets/images/profile.png" alt=""></a>
      </div>
      <div class="paragraph">
         <ul class="basis-info">
           <li><h3>Basis Info</h3></li>
           <li><p>中文名：杨嘉龙</p></li>
           <li><p>学校：中国矿业大学</p></li>
           <li><p>学历：本科</p></li>
           <li><p>学位：金融学学士</p></li>
           <li><p>英语水平：CET-6</p></li>
           <li><p>奖项：院学习优秀奖学金；校网球团体赛5th</p></li>
           <li><p>爱好：篮球、网球、看足球、音乐</p></li>
           <li><p>求职意向：前端开发工程师</p></li>
           <li><p>薪资：面议</p></li> 
         </ul>
         <ul class="fe-road">
           <li><h3>Teren's Road to FE</h3></li>
           <li>
             <p><strong>○ Think-Google-Ask</strong>以及<strong>Copy-Run-Modify</strong>目前是我学习前端的主要方法；</p>
           </li>
           <li>
             <p>○ 学习新的库/框架，会对照文档进行copy-run-modify，这一点可从Teren关于<a href="http://www.jianshu.com/p/3e874fef936d" style="text-decoration:underline">vue</a>的一篇博文可见；</p>
           </li>
           <li>
             <p>○ 对于项目开发中遇到的问题，进行解构逐个击破；对于生疏技术，结合google、文档、stackoverflow、MDN和社区等手段去fixed up;</p>
           </li>
           <li>
             <p>○ 各种库与框架风起云涌，但核心依旧是HTML+CSS+JavaScript;</p>
           </li>
           <li>
             <p>○ HTML语义化、CSS可视化是我学习二者的侧重点；</p>
           </li>
           <li>
             <p>○ JavaScript是前端开发的核心，也是前端作为工程师这个职位的体现；coding经历了松散代码 >> 设计模式/封装 >> 模块化/组件化 >> 页面性能优化等阶段；
             </p>
           </li>
           <li>
             <p>○ 现在，前端知识更新非常快，我在拥抱变化中时刻仰望星空后，紧接着脚踏实地；</p>
           </li>
           <li>
             <p>○ 篇幅有限，更多思想碰撞期待会面时交流...</p>
           </li>           
         </ul>
      </div>
      <div class="skill-map">
      <hr>
         <h3>Skill Map</h3>
         <div id="skill-chart" :style="{width:'600px',height:'400px'}"></div>       
      </div>
  </div>
</template>

<script>

import echarts from "echarts"

export default {
  name: 'AboutPanel',
  props:['navInfo'],
  data () {
    return {
      chartOption:{
          textStyle: {
              color: '#333',
              fontWeight:'600'
          },
          itemStyle: {
            normal: {
                color: '#333',
            }
          },
          radar: {
              shape: 'circle',
              indicator: [
                 { name: 'HTML', max: 100},
                 { name: 'CSS', max: 100},
                 { name: 'JavaScript', max: 100},
                 { name: 'less', max: 100},
                 { name: 'Bootstrap', max: 100},
                 { name: 'Vue', max: 100},
                 { name: 'PhotoShop', max: 100}
              ]
          },
          series: [{
              name: '技能分布',
              type: 'radar',
              data : [
                  {
                      value : [80, 75, 70, 70, 50, 50,60],
                      name : '技能分布'
                  }
              ]
          }]
      }
    }
  },
  mounted (){
    var myChart = echarts.init(document.getElementById('skill-chart'));
    myChart.setOption(this.chartOption);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  p{
    font-size: 1.4rem;
  }
  h3{
    font-size: 1.8rem;
  }
  hr{
    // border: none;/
    // border: 1px solid #333;
    width: 99.2rem;
    margin: 3rem auto;
  }
  #aboutPanel{
    width: 99.2rem;
    // border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .profile{
    // border: 1px solid;
    img{
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      transition: transform 1s;
      &:hover{
        cursor: pointer;
        transform: rotateZ(360deg)
      }
    }
  }
  #skill-chart{
    margin: 0 auto;
  }
  .paragraph{
    // overflow: hidden;
  }
  .basis-info{
    float: left;
    width: 30rem;
    // border: 1px solid;
    li{
      h3{text-align: center}
      text-align: left;
      line-height: 2;
      padding-left: 2rem;
    }
  }
  .fe-road{
    float: left;
    // border: 1px solid;
    width: 69rem;
    li{
      h3{text-align: center}
      text-align: left;
      line-height: 2;
      padding-left: 3rem; 
      padding-right: 2rem;     
    }
  }
</style>
