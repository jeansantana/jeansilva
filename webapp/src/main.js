import Vue from 'vue';
// import routes from './routes';
import i18n from './i18n';
import Router from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import Resume from './pages/Resume.vue';
import Error from './pages/404.vue';

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/resume', component: Resume, name: 'resume' },
    { path: '*', component: Error, name: '404' },
  ]
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')

