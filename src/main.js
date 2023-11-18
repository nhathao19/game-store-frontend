import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

// Tạo store Vuex
const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
      // Chuyển hướng về trang đăng nhập sau khi đăng xuất
      router.push('/login');
    },
  },
actions: {
  async login({ commit }, credentials) {
    try {
      // Thực hiện xác thực người dùng, ví dụ: gửi request đăng nhập đến server
      const response = await axios.post('http://localhost:3000/api/login', credentials);

      // Lưu thông tin người dùng vào store
      commit('setUser', response.data.user);

      // Chuyển hướng đến trang chính sau khi đăng nhập thành công
      router.push('/');
    } catch (error) {
      console.error('Error logging in', error);
    }
  },
  // Thêm các actions khác cần thiết
},
  async register({ commit }, user) {
    try {
      // Thực hiện đăng ký người dùng, ví dụ: gửi request đăng ký đến server
      const response = await axios.post('http://localhost:3000/api/register', user);

      // Lưu thông tin người dùng vào store
      commit('setUser', response.data.user);

      // Chuyển hướng đến trang chính sau khi đăng ký thành công
      router.push('/');
    } catch (error) {
      console.error('Error registering', error);
    }
  },
});

// Tạo router Vue
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
    { path: '/login', component: () => import('./components/Login.vue') },
    { path: '/register', component: () => import('./components/Register.vue') },
    { path: '/games', component: () => import('./components/GameList.vue') },
  ],
    // Thêm các route cần thiết, ví dụ: đăng nhập, đăng xuất
});

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store);
app.use(router);
app.mount('#app');
