// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from '@/router';
import App from '@/app';
import VueComponentLibrary from '@/lib';

Vue.config.productionTip = false;

VueComponentLibrary.registerComponents();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
