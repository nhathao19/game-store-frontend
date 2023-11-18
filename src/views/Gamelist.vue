<template>
    <div>
        <h2>Game List</h2>
        <ul>
            <li v-for="game in games" :key="game.id">
                <h3>{{ game.title }}</h3>
                <p>{{ game.description }}</p>
                <p>Price: {{ game.price }}$</p>
            </li>
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
    methods: {
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
