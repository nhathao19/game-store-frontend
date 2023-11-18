<template>
    <div>
        <h2>Shopping Cart</h2>
        <ul>
            <li v-for="item in cartItems" :key="item.id">
                <h3>{{ item.title }}</h3>
                <p>Price: {{ item.price }}$</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [],
        };
    },
    methods: {
        // Các phương thức xử lý giỏ hàng
    },
};
</script>
