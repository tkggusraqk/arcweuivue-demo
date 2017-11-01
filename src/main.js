// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import ArcWeUi from '@/index.js'
import ArcWeUI from 'arcweui-vue'
import 'arcweui-vue/dist/arcweui-vue.min.css'

Vue.use(ArcWeUI)
Vue.config.productionTip = false
Vue.config.errorHandler = function(err, vm, info) {
  console.log('err:')
  console.log(err)
  console.log('vm:')
  console.log(vm)
  console.log('info:')
  console.log(info)
}
window.onerror = (message) => {
  console.log('onerror:')
  console.log(message)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
