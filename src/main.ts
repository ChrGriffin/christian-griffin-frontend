import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMatchHeights from 'vue-match-heights';

Vue.config.productionTip = false;

Vue.use(VueMatchHeights);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
