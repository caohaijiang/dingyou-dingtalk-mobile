# nowa-dingtalk-salt-template ver 0.7.0
  这是邢台钉友软件，在nowa脚手架基础上，集成DingTalk客户端。目的是帮助大家尽快了解和掌握钉钉开发的入门知识.少走一些我已经走过从坑.

# 准备工作 

> 基础应用

1. [ Node ]( https://nodejs.org/en/ )

2. [ VScode ]( https://code.visualstudio.com/ ): 常用插件
```
    Auto Close Tag: 自动补全结束标签
    Auto Rename Tag: 自动修改结束标签
    Class autocomplete for HTML: 自动补全HTML代码
    Debugger for Chrome: 调试工具
    Guides: 显示网格线
    HTML Snippets: 包含html标签
    vscode-icons : 文件/首选项/文件图标主题进行设置
    auto-open markdown preview : 打开MD文档自动打开预览
```
3. Chrome: 

4. [ git (win) ](https://git-scm.com/) : 
    提示: mac: 包含在xcode. 启动xocde一次,安装辅助工具( 包含git )

5. [ Nowa (命令行版): ]( https://nowa-webpack.github.io/docs/an_zhuang.html )
    
    提示: NowaGUI体验: [win下载](http://lab.onbing.com/nowa-gui.exe)   [mac下载](http://lab.onbing.com/nowa-gui.dmg)
6. xcode (mac): iphone模拟器,appStore商店安装

> 辅助应用

1. navicat: 管理mysql数据库
2. xhsell/xfp (win): 管理服务器
3. moon (mac): 窗口管理工具
4. jsonmodeler (mac): json编写测试


# 开发软硬环境基础配置

## 1. 创建钉钉微应用
1. [ 创建团队,并且进入管理后台: ]( https://oa.dingtalk.com/?spm=a3140.7858860.2231602.8.TS6zcN#/login ) 

2. 进入 [ 企业应用 ], 新建应用: 
   提示1: 准备图标一枚,必用
   提示2: 首页地址填写为 ' http://192.168.10.11/ ',尾部的斜杠必须存在,否则就坑自己.
   提示3: 创建完成后,需要再次打开设置,复制 AgentID 存到文件备用 

3. 进入微应用设置,复制 CorpID和CorpSecret 存到文件备用

## 2. 部署鉴权服务器
    请把存档资料给后台开发同学,按钉钉官方demo开发鉴权服务,
    如没有,请先跳过进行页面开发体验(不要影响进度) ,或者等待配套的node版本鉴权服务...

## 3. iphone模拟器
1. [ 下载IOS开发版,存放'~App/Dingtalk.app'目录或自定义 ]( https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.CIcf6a&treeId=171&articleId=104908&docType=1) 
2. 启动模拟器： xcrun instruments -w 'iPhone 6 Plus'
3. 安装应用到模拟器；xcrun simctl install booted ~/App/Dingtalk.app 
> 为什么要用iphone调试? 因为安卓和苹果在手机上渲染内核不同,偶有兼容问题,缺乏调试环境就郁闷了.

## 4. Android真机
1. Android测试版,可作为开发版使用;
2. 真机开启usb调试,用usb数据线连接开发电脑
3. 打开Chrome,地址栏输入: chrome://inspect/#devices
4. 手机/钉钉/工作台: 打开自行创建的微应用应用, Chrome浏览器会检测到要被调试的页面.
> 为什么要用真机调试? 因为dingtak jsapi的console.log()打印信息,只有在这样调试环境才能看到.


# 体验进行时

1. 创建项目: 使用Nowa创建项目

    nowa init https://github.com/caohaijiang/nowa-dingtalk-antdmobile-template/archive/master.zip -a ding

    >   提示: -a ding 参数是别名, 下次本机使用 nowa init ding,就可以创建项目.

2. 启动项目: npm start 
3. 打开浏览器,地址输入: http://192.168.10.11:3000 , 并打开浏览器调试控制台.
4. 进行体验

    > 方式1: 浏览器打开 http://192.168.10.11/3000 预览,并打开浏览器的调试控制台 

    > 方式2: 
        mac: 模拟器打开钉钉进入自建微应用,并启用浏览器调试
        win: 真机usb联机电脑进入自建微应用,并启用浏览器调试

# 了解脚手架

## 依赖包

1. 环境构建
* nowa: [是基于 webpack 的前端开发解决方案集合。](http://nowa-webpack.github.io/docs/)

2. UI组件
* antd-mobile: [antd-mobile是阿里蚂蚁提供的一套ui组件库，希望帮助使用者更快更好地开发钉钉微应用界面。](https://mobile.ant.design/)

3. 路由层工具
* React-keeper: [更适合国人和nowa的路由库](https://github.com/Jias/natty-fetch)

4. 数据层解决工具

* natty-storage: [一个优秀的项目api资源管理库](https://github.com/Jias/natty-fetch)
* no-flux:  [一个简洁新兴的React数据状态处理库](https://github.com/fengsx/no-flux)
* unity-api: [一个方便的React数据和view交互管理库](https://github.com/fengsx/no-flux)
* json-server: [一个强大的模拟数据库](http://g.alicdn.com/platform/tingle-ui/1.1.18/docs/docs.html#tingle-dialog)    
* mock.js: [一个方便的模拟数据生成器](https://github.com/fengsx/no-flux)


## 目录结构
```
├── html  ---------------------------------- 
|   └── index.html  ------------------------
├── src  ----------------------------------- 
|   ├── apis  ------------------------------ api资源配置
|   ├── assets  ---------------------------- 静态资源
|   |   ├── icon  -------------------------- Svg图标
|   |   └── img  --------------------------- 图片
|   ├── components  ------------------------ 公共组件库
|   ├── config  ---------------------------- 多环境配置文件
|   ├── dings  ----------------------------- 封装钉钉的sdk,可不用封装api的类库,仅用其配置功能
|   ├── pages  -----------------------------
|   |   └── home  --------------------------
|   |       ├── components  ---------------- Page的私有组件
|   |       ├── pages  --------------------- 子页面(路由)
|   |       ├── index.js  ------------------ 路由配置
|   |       ├── PageHome.js  --------------- 连接view 和 state的进行业务处理的Page组件
|   |       ├── PageHome.less  -------------  
|   |       ├── PageLogic.js  -------------- 状态逻辑处理
|   |       └──PageHome.less  -------------- 默认不需要改变的状态,如固定的UI组件label 
|   ├── utils  ----------------------------- 
|   |    ├── index.js  --------------------- 小的通用函数
|   |    ├── middleware.js  ---------------- api处理中间件
|   |    └── shortcuts.js  ----------------- 待测试....
|   ├── index.js  -------------------------- 
|   ├── api.js  ---------------------------- api配置,
|   ├── ding.js  --------------------------- 钉钉的配置和初始化,
|   ├── noflux.js  ------------------------- noflux配置,可给组件对象塞全局对象呀,
|   └── routers.js  ------------------------ 前端顶层路由
├── .eslintrc  ----------------------------- 
├── .gitignore  ----------------------------
├── abc.json  ------------------------------ nowa环境配置
├── package.json  -------------------------- 
└── webpack.config.js  --------------------- 

```

# 开发应用 (Nowa常用命令行)

* 创建项目: nowa init ding
* 创建页面: nowa init page | nowa init page-note (带注释)
* 创建组件: nowa init mod (函数组件) | nowa init rmod(react组件)

# 其他待需要配套的项目
1. jsonSever: 模拟数据服务
2. dingAuth: 钉钉鉴权服务

# 待完善...
1. welcome 样式表需要修正
2. noflux的logicRender使用方法的demo
3. ding的类库优化
3. ding sdk: 支持isv




