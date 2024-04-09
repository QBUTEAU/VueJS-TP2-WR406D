<script setup>
import { ref, defineProps } from 'vue'

defineProps({
    titre: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    auteur: {
        type: String,
        required: true,
    },
    dessinateur: {
        type: String,
        required: true,
    },
    annee: {
        type: String,
        required: true,
    },
    afficheImage: {
        type: Boolean,
        required: false,
    }


})

</script>

<template>
    <div class="serie">
        <h2>{{ titre }}</h2>
        <img v-if="afficheImage" :src="image" alt="couverture">
        <p>Auteur : {{ auteur }}</p>
        <p>Dessinateur : {{ dessinateur }}</p>
        <p>Année de parution : {{ annee }}</p>
    </div>
</template>

<style scoped>
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