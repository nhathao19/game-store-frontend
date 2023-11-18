import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import GameList from '@/views/GameList.vue';
import GameDetail from '@/views/GameDetail.vue';
import Cart from '@/views/Cart.vue'; // Thêm import

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/games', component: GameList },
  { path: '/games/:id', component: GameDetail },
  { path: '/cart', component: Cart }, // Thêm route mới
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
