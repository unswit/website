import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

Vue.component('Navbar', Navbar);
Vue.component('Footer', Footer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
