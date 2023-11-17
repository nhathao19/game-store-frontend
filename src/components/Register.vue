<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="register">
            <label for="username">Username:</label>
            <input type="text" v-model="username" required />
            <div v-if="usernameError" class="error">{{ usernameError }}</div>

            <label for="email">Email:</label>
            <input type="email" v-model="email" required />
            <div v-if="emailError" class="error">{{ emailError }}</div>

            <label for="password">Password:</label>
            <input type="password" v-model="password" required />
            <div v-if="passwordError" class="error">{{ passwordError }}</div>

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterComponent", // Set a multi-word component name
    data() {
        return {
            username: "",
            email: "",
            password: "",
            usernameError: "",
            emailError: "",
            passwordError: "",
        };
    },
    methods: {
        register() {
            // Reset errors
            this.usernameError = "";
            this.emailError = "";
            this.passwordError = "";

            // Validate username
            if (!this.username.trim()) {
                this.usernameError = "Username is required.";
                return;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                this.emailError = "Invalid email format.";
                return;
            }

            // Validate password
            if (this.password.length < 6) {
                this.passwordError = "Password must be at least 6 characters.";
                return;
            }

            // Call registration action from store
            this.$store.dispatch("register", {
                username: this.username,
                email: this.email,
                password: this.password,
            });
        },
    },
};
</script>

<style>
.error {
    color: red;
    margin-top: 5px;
}
</style>
