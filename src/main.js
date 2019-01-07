// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import loading from '@/components/loading'
import '@/css/wykj-reset.css'
import '@/css/animation.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
/*
 * vue 扩展
 * 增加请求接口
 */
Vue.prototype.axios=axios;
Vue.component('model-loading',loading);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:function(){
    parkingSpace:[]
  },
  router,
  components: { App },
  template: '<App/>'
})
