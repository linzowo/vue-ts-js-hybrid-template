import Vue from 'vue'
import ElementUI from 'element-ui'
// eslint-disable-next-line import/extensions
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import DvFullScreenContainer from './components/fullScreenContainer/index'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import '@/icons' // icon
import '@/permission'

// set ElementUI lang to EN
Vue.use(ElementUI)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false // permission control

document.documentElement.style.fontSize = `${process.env.VUE_APP_ROOT_FONT_SIZE}px`
// document.documentElement.style.fontSize = `192px`
Vue.use(DvFullScreenContainer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
