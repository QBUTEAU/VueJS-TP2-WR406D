<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <img style="height: 100px; width: 100px;" :src="character.image" alt="photoCharacter"><br><br>
            <!-- <button class="btn btn-primary" @click="selectCharacter">Voir les détails</button> -->
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    character: Object
});

const selectCharacter = () => {
    emit('selectCharacter', props.character);
};
</script>