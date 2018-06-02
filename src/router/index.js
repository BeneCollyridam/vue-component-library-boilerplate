import Vue from 'vue';
import Router from 'vue-router';
import Hello from './views/hello';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
