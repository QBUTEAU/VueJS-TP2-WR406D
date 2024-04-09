<template>
    <div v-if="character">
        <h2>{{ character.name }}</h2>
        <img :src="character.image" alt="photoCharacter">
        <p>Genre : {{ character.gender }}</p>
        <p>Espèce : {{ character.species }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    id: String
});

const character = ref(null);

onMounted(async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${props.id}`);
    character.value = response.data;
});
</script>