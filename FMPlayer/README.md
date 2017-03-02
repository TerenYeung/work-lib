
#### 需求分析
- FM电台播放器

#### 功能分析
- 开关控件
- 可拖拽面板
- 电台频道选择
- 分享功能
- 黑胶转盘特效
- 歌词展示
- 音量调节
- 进度调节

#### 设计稿
[设计稿](https://terenyeung.github.com/work-lib/FMPlayer/img/原型图.jpg)

#### 技术选型
- 库：jquery@1.9.1/draggabilly@2.1；
- 图标：iconfont.css；
- 设计模式：混合设计模式，从功能和组件进行划分模块；
- 构建工具：gulp
- 其他：stylus

#### 命名空间
- fm为一级命名空间
- 根据播放器的控件类型创建二级命名空间
命名空间结构大致如下：
- fm
  - fm-open
  - fm-player
  - fm-panel
      + fm-header
      + fm-list-panel
      + fm-share-panel
      + fm-disk
      + fm-controls
      + fm-lyric
      + fm-progress

#### api来源
采用第三方封装后的百度FM的api;

#### 
