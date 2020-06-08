import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMatchHeights from 'vue-match-heights';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;

Vue.use(VueMatchHeights);
Vue.use(VueScrollTo);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
