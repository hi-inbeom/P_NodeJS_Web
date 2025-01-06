import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import AppHeader from '../components/common/AppHeader.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'app-header',
    component: AppHeader,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
