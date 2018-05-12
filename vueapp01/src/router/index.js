import Vue from 'vue';
import Router from 'vue-router';
import todoapp from '@/components/TodoApp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoapp',
      component: todoapp,
    },
  ],
});
