import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import GameList from '@/views/GameList.vue'; // Thêm import

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/games', component: GameList }, // Thêm route mới
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
