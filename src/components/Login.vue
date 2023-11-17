<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required />

            <label for="password">Password:</label>
            <input type="password" v-model="password" required />

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent', // Change the component name
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // Gọi action đăng nhập từ store
            this.$store.dispatch('login', { username: this.username, password: this.password });
        },
    },
};
</script>
