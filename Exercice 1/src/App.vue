<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink class="routes" to="/">Home</RouterLink>
    <RouterLink class="routes" to="/nom">Nom</RouterLink>
    <RouterLink class="routes" to="/bd">BD</RouterLink>
    <RouterLink class="routes" to="/series">Séries</RouterLink>
    <RouterView></RouterView>
</template>

<style scoped>
.routes {
    margin: 10px;
    font-weight: 900;
    text-transform: uppercase;
    color: green;
}

.routes:hover {
    color: red;
    text-decoration: underline;
    text-underline-offset: 5px;
}
</style>