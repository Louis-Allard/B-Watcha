import Vue from 'vue';
import BoostrapVue from 'bootstrap-vue';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(BoostrapVue);



new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
}).$mount('#app')


