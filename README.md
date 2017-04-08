# dingyou-dingtalk-mobile
  钉友公司提供的钉钉微应用开发模板
  这是 [ 钉钉快速开发入门指南 ] (https://caohaijiang.gitbooks.io/dingtalkdevguide/content/)的配套代码模板. 
  在Nowa-GUI的开发环境下, 集成了本团队在开发过程中的实践经验,选择了一些常见好学好懂的项目依赖包。目的是帮助大家尽快了解和掌握钉钉开发的入门知识.少走一些坑.

---

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
|   ├── dings  ----------------------------- 钉钉的jsapi接口优化
|   ├── pages  -----------------------------
|   |   └── home  --------------------------
|   |       ├── components  ---------------- Page的私有组件
|   |       ├── pages  --------------------- 子页面(路由)
|   |       ├── index.js  ------------------ 路由配置
|   |       ├── PageHome.js  --------------- 连接view 和 state的进行业务处理的Page组件
|   |       ├── PageHome.less  ------------- 页面的样式文件
|   |       ├── PageLogic.js  -------------- React状态的逻辑处理
|   |       └── PageConst.less  ------------ 默认不需要改变的状态,如固定的UI组件label,也用在临时模拟数据调试上.
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
