import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './dashboard/Dashboard';
import DashboardRoutes from './dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [...DashboardRoutes.routes],
    },
  ],
});
