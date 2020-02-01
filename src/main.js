import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';
import Card from '@/components/Card.vue';

Vue.component('Navbar', Navbar);
Vue.component('Footer', Footer);
Vue.component('Header', Header);
Vue.component('Container', Container);
Vue.component('Card', Card);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
