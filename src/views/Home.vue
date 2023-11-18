<template>
    <div>
        <h2>Welcome to the Game Store!</h2>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/games">Game List</router-link>
        <router-link to="/cart">Shopping Cart</router-link>
        <router-link to="/profile">User Profile</router-link>
        <!-- Nội dung đồ họa -->
        <div ref="animationTarget" class="animation-target">
            <img src="@/assets/game-controller.png" alt="Game Controller" />
        </div>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.esm.min.js';

export default {
    mounted() {
        // Sử dụng Anime.js để thêm hiệu ứng
        anime({
            targets: '.animation-target',
            translateX: [100, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    },
};
</script>

<style scoped>
.animation-target {
    margin-top: 50px;
    text-align: center;
}

.animation-target img {
    width: 150px;
}
@import "../assets/form.css"; 
</style>
