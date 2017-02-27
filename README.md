### My Work About FE
#### 这是Teren琢磨FE以来留下的一些小作品，一方面作为检验技能的试金石，另一方面也是学习成果的一定呈现

#### 整个作品库内容包括以下几部分：
1.通用库的封装

封装的方法包括数据类型判断、对象或数组的深浅拷贝、表单验证、class操作、ajax以及获取鼠标或触摸点坐标在内的基本方法；

2.基于Canvas的动画学习

使用HTML5的Canvas元素，将基本的动画运动效果（线性运动、非线性运动、重力运动、波形运动、圆周运动以及缩放等）在页面上得以呈现；

3.基于Require.js的轮播组件

使用Require.js对轮播组件进行模块化封装，main.js中可设置Slide、Fade、FullPage和ThreeD四种不同轮播方式。每个模块独立并且具有各自的样式，便于代码维护，轮播实例使用混合设计模式，能够创建功能相同的不同实例；

4.jquery插件集合

jquery插件集合包括手风琴、日历、回到顶部、StickUp和tab等jquery插件,开箱即用；

5.Mock Website

参照<a href="https://www.templatemonster.com/cn/demo/61206.html">templatemonster</a>的页面模板，实现页面的基本布局，局部采用flex布局，基于CommonJS进行模块化编程，实现诸如StickUp、Carousel、rotate3D等组件开发，样式语言使用Stylus，利用Webpack进行模块打包；

6.响应式简历页面开发

简历页面使用响应式布局，能在全屏、宽度小于1000px以及宽度小于600px下3种情形呈现特定样式，能较好支持移动端设备的页面呈现效果；使用Less语言进行样式开发，使用gulp进行任务流的自动构建；页面还包含accordion和goTop等常见的功能组件；

7.基于Node的命令行小工具——中英文翻译器

这是一款简洁的基于Node的命令行翻译小工具，能将单词、句子等实现中英文的互译。main.js文件引入colors.js和yargs.js模块实现代码高亮和输入参数捕获功能，通过Node内置的http模块实现数据通信功能，数据库所采用的是有道云翻译version1.1；
