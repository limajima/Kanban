import Vue from 'vue';
import App from './App.vue';
import GSignInButton from 'vue-google-signin-button'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(GSignInButton)
Vue.use(VueSimpleAlert);
new Vue({
  render: h => h(App),
}).$mount('#app');