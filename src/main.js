import Vue from 'vue'
import App from './App.vue'
import './index.css'
import {router} from "@/routes";
import VCalendar from 'v-calendar'
Vue.config.productionTip = false
Vue.use(VCalendar);
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
