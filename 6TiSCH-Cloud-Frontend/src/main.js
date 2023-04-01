import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import router from './router'
import api from './api'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.prototype.$EventBus = new Vue()
Vue.prototype.$api = api
Vue.use(Vuesax)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCxlmDq-hB_CguPXR3OH_tTkf0X2HO3XdU',
    libraries: 'places,drawing,visualization', 
  },
  installComponents: true
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

