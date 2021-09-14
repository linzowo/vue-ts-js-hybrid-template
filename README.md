# VUE-TS-JS 混合开发-管理端-基础模板

## 简介
这是一个基于element-admin-template的管理端基础开发框架，可以使用TS和JS混合开发，方便js向ts过度过程中使用或平时使用也可以。

## 特殊注意事项

### 自适应容器

采用的`DATAV`中的`DvFullScreenContainer`组件，默认容器尺寸为`1920 * 1080`如需要其他尺寸请在`src\components\fullScreenContainer\src\main.vue`内进行修改

```js
const [width, height] = [1920, 1080]
```

### px转rem

此框架内置了px转rem插件，开发过程中可直接使用设计稿中的px尺寸值进行开发，线上会自动转为rem尺寸。默认使用的是 基于`1920 * 1080`的设计稿进行的处理，如果你要使用其他尺寸的设计稿请替换`.env.development 和 .env.production`中的内容

```js
// 请修改为对应的尺寸 此处默认取的 1920 / 10
VUE_APP_ROOT_FONT_SIZE = 192
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
