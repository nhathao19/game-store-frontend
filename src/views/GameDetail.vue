<template>
    <div>
        <h2>{{ game.title }}</h2>
        <p>{{ game.description }}</p>
        <p>Price: {{ game.price }}$</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            game: {},
        };
    },
    mounted() {
        this.getGameDetails();
    },
    methods: {
        async getGameDetails() {
            try {
                const gameId = this.$route.params.id;
                const response = await this.$axios.get(`http://localhost:3000/api/games/${gameId}`);
                this.game = response.data;
            } catch (error) {
                console.error('Error fetching game details', error);
            }
        },
    },
};
</script>
