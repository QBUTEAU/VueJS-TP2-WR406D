<script>
import axios from 'axios';

export default {
    data() {
        return {
            series: [],
        };
    },
    mounted() {
        this.fetchSeries();
    },
    methods: {
        async fetchSeries() {
            try {
                const response = await axios.get('https://exercice1.davidannebicque.com/api/series.php');
                this.series = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des séries :', error);
            }
        },
    },
};
</script>

<template>
    <h1>Séries</h1>
    <div class="liste-series">
        <div v-for="serie in series" :key="serie.titre">
            <div class="serie">
                <h2>{{ serie.titre }}</h2>
                <p>Auteur : {{ serie.auteur }}</p>
                <p>Dessinateur : {{ serie.dessinateur }}</p>
                <p>Catégorie : {{ serie.categorie }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.liste-series {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.serie {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    text-align: center;
}

h2 {
    margin: 0;
}
</style>