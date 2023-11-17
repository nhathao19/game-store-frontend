<template>
  <div id="app">
    <h1>Game Store</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>

    <router-view />
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.title }} - {{ game.price }}$</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.getGames();
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      // Gọi action đăng xuất từ store
      this.$store.disqatch('logout');
    },
    async getGames() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/games');
        this.games = response.data;
      } catch (error) {
        console.error('Error fetching games', error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
