# nuxt-example

> 这是 web 项目，采用 nuxt 框架的模板实例。

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

---

## vue 开发规范

### 组件化开发

> 单文件系统，样式局部作用域 `scoped`  
> 组件注册方式：1）公共组件全局注册 2）其余组件局部注册

### 组件命名规范

> 1、有意义的名词、简短、具有可读性  
> 2、以小写开头，采用短横线分割命名  
> 3、公共组件命名以公司名称简拼为命名空间(app-xx.vue)  
> 4、文件夹命名主要以功能模块代表命名  
> 同时还需要注意：必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字。app- 前缀作为命名空间: 如果非常通用的话可使用一个单词来命名，这样可以方便于其它项目里复用。

### vue 文件基本结构

```html
<template>
  <div>
    <!--必须在div中编写页面-->
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {},
  }
</script>
<!--声明语言，并且添加scoped-->
<style lang="scss" scoped></style>
```

### vue 文件方法声明顺序

```
- components
- props
- data
- created
- mounted
- activited
- update
- beforeRouteUpdate
- metods
- filter
- computed
- watch
```

### 注释规范

> 代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明。

##### 以下情况，务必添加注释

1. 公共组件使用说明
2. 各组件中重要函数或者类说明
3. 复杂的业务逻辑处理说明
4. 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述
5. 注释块必须以/**（至少两个星号）开头**/；
6. 单行注释使用//；

### 编码规范

> 为了开发效率，我们不强制要求完全按照 eslint 格式来编写代码，但是我们要做到尽量按照 ESLint 格式要求编写代码。  
> 如果开发人员不清楚 eslint 的规范，建议大家加上 eslint，写一段时间，就会养成良好的代码编写规范。  
> 另外很多 IDE 也有代码格式工具，但是不同的 IDE 格式话都不一样，所以建议搭建使用 vscode。格式化插件有：Beautify、Prettier。

### 如果大家有好的规范，可以随时补充。。。

---

## nuxt 结构化规范《对应目录说明》

已规范好各功能目录，对应功能类的都需要放到对应的文件夹里面，禁止开发人员私自新建目录。如果有特殊需要，目前满足不了的，可自行新建，但是需要在 readme 里面进行说明。

### 1. assets 资源目录

> 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。

### 2. components 组件目录

> 用于组织应用的 Vue.js 组件。如果比较大的项目，可根据 pages 下面的页面新建对应文件夹，在对应文件夹里面新建组件。

### 3. layouts 布局目录

> 可新建模板，即入口文件。可通过 `layout: 'example'`设置。

### 4. locales 国际化目录

> 指定需要翻译的文本。

### 5. middleware 中间件目录

> 存放应用的中间件

### 6. pages 页面目录

> 会读取该目录下所有的 .vue 文件并自动生成对应的路由配置。所以在此目录下面，**<font color='red'>不允许出现 xxx.css、xxx.scss、xxx.js、xxx.jpg 等，以及 xxx.vue 组件</font>**。

### 7. plugins 插件目录

> 用于组织那些需要在 根 vue.js 应用 实例化之前需要运行的 Javascript 插件。一般需要引入的插件都放在此下面。比如需要引入的 elementUI、axios 等。

### 8. static 静态文件目录

> 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

### 9. store

> 用于组织应用的 Vuex 状态树 文件。Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

### 10. utils 工具类目录

> 常用的工具类，封装好可以放在此目录下。注意跟 plugins 插件目录做区分。

---

## Axios

> 暴露全局参数，可直接使用 axios 相关方法，修改 **<font color='red'>baseUrl</font>** 在 config/env.js 里面。

```js
this.$axios

// 完整post请求规范为：
this.$axios({
  method: 'post',
  url: '/test',
  data: this.$qs.stringify({}), // 这里需不需要用qs转需要看后台接口需不需要
})
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    this.$message.error(error.msg || error.message || error)
  })

// 完整get请求规范为：
this.$axios({
  method: 'get',
  url: '/test',
  params: this.$qs.stringify({}), // 这里需不需要用qs转需要看后台接口需不需要
})
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    this.$message.error(error.msg || error.message || error)
  })
```

## qs

> 暴露全局参数，可直接采用 qs 的方法

```js
this.$qs
this.$qs.stringify()
```

## 全局 sass

> 统一全局 sass 方法，不用每个 vue 文件都引入，assets/css 里面封装了一些常用的变量和方法，同一个项目，都要用这里面的变量，方便后期维护，禁止每个文件自己建变量。

```js
~/assets/css/variables.scss
```

## 图片懒加载 Vue-Lazyload

> 修改 const containerWidth = container.offsetWidth \* scale 为 const containerWidth = container.offsetWidth，适配手机端自适应图片问题。  
> <font color='red'>如果遇到图片不更新 bug，大概率是因为没有写:key</font>。  
> github 地址 <https://github.com/hilongjw/vue-lazyload>

```html
<template>
  <div ref="container">
    <img v-lazy="imgUrl" />
    <div v-lazy:background-image="imgUrl"></div>

    <!-- with customer error and loading -->
    <img v-lazy="imgObj" />
    <div v-lazy:background-image="imgObj"></div>

    <!-- Customer scrollable element -->
    <img v-lazy.container="imgUrl" />
    <div v-lazy:background-image.container="img"></div>

    <!-- srcset -->
    <img v-lazy="'img.400px.jpg'" data-srcset="img.400px.jpg 400w, img.800px.jpg 800w, img.1200px.jpg 1200w" />
    <img v-lazy="imgUrl" :data-srcset="imgUrl' + '?size=400 400w, ' + imgUrl + ' ?size=800 800w, ' + imgUrl +'/1200.jpg 1200w'" />
  </div>
</template>
<style>
  img[lazy='loading'] {
    /*your style here*/
  }
  img[lazy='error'] {
    /*your style here*/
  }
  img[lazy='loaded'] {
    /*your style here*/
  }
  /*
  or background-image
  */
  .yourclass[lazy='loading'] {
    /*your style here*/
  }
  .yourclass[lazy='error'] {
    /*your style here*/
  }
  .yourclass[lazy='loaded'] {
    /*your style here*/
  }
</style>
```

## 富文本 vue-quill-editor

> 此富文本插件支持 spa 和 ssr 两种方式，我们采用 ssr 形式，以指令形式插入到 html 中。  
> github 地址 <https://github.com/surmon-china/vue-quill-editor>

如果不需要富文本，需要把 nuxt.config.js 中 css 模块关于 quill 引入去掉，然后把 plugins 模块中，vue-quill-editor 去掉。

```html
<!-- You can custom the "myQuillEditor" name used to find the quill instance in current component -->
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="quill-editor" v-model="content" v-quill:myQuillEditor="editorOption"></div>
</template>

<script>
  export default {
    data() {
      return {
        content: '<p>example content</p>',
        editorOption: {
          /* quill options */
        },
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.myQuillEditor)
    },
    methods: {
      onEditorChange(event) {
        console.log('onEditorChange')
      },
    },
    // Omit the same parts as in the following component sample code
    // ...
  }
</script>
```

## 轮播图 vue-awesome-swiper

> 基于 Swiper4、适用于 Vue 的轮播组件，支持服务端渲染和单页应用。  
> github 地址 <https://github.com/surmon-china/vue-awesome-swiper>

## store

> 参考地址 <https://zh.nuxtjs.org/examples/auth-routes/>

```js
// 为了让 Nuxt.js 使用 Vuex，我们创建一个 store/index.js 文件：
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// window.fetch() 的 Polyfill
require('whatwg-fetch')

const store = () =>
  new Vuex.Store({
    state: {
      authUser: null,
    },

    mutations: {
      SET_USER: function(state, user) {
        state.authUser = user
      },
    },

    actions: {
      // ...
    },
  })

export default store
```

## 数据持久化 vuex-persistedstate

> 可支持 localStorage、sessionStorage 和 cookie  
> 参考地址 <https://github.com/robinvdvleuten/vuex-persistedstate>

```js
// nuxt.config.js
plugins: [{ src: '~/plugins/localStorage.js', ssr: false }]

// ~/plugins/localStorage.js
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'yourkey',
        paths: [...]
        ...
    })(store)
  })
}
```

## 自定义主题 Element

> 在项目中改变 SCSS 变量，可在 plugins/element-variables.scss 里面设置

```js
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
// $--font-path: '~element-ui/lib/theme-chalk/fonts';
/* 由于更新问题，改成下面的 */
$--font-path: '../node_modules/element-ui/lib/theme-chalk/fonts';

@import "~element-ui/packages/theme-chalk/src/index";
```

## 深度作用选择器

```css
<style scoped>
.a >>> .b { /* ... */ }

/* Sass 之类的预处理器无法正确解析 >>>，所以用/deep/代替 */
/deep/.a { /* ... */ }
</style>
```
