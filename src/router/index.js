import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // adicione suas rotas aqui
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
