<template>
    <main style="margin-left: 20px;">
        <h1>Personnages</h1>

        <div class="row">
            <div class="col-12">
                Vous avez séléctionné <strong>{{ selection.length }}</strong> personnage(s).
                <div v-for="character in selection" :key="character.id" class="col-3">
                    <strong>{{ character.name }}</strong>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-8">
                <div v-if="data">
                    <p> {{ data.results.length }} éléments affichés sur les {{ data.info.count }} disponibles</p>
                    <nav class="boutons">
                        <button @click="prevPage" :disabled="!data.info.prev">Précédent</button>
                        <button @click="nextPage" :disabled="!data.info.next">Suivant</button>
                    </nav>
                    <div class="liste-persos">
                        <div v-for="character in data.results" :key="character.id" class="perso">
                            <Personnage :character="character" />
                            <button @click="selectCharacter(character)">Sélectionner</button>
                            <button @click="showDetails(character)">Voir les détails</button>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>Chargement en cours...</p>
                </div>
            </div>
            <div class="col-3 card-body card-info">
                <p>Afficher le détail d'un personnage avec une route imbriquée.</p>
                <div class="alert alert-info" v-if="!detailedCharacter">
                    Veuillez sélectionner un personnage
                </div>
                <div v-else class="perso-details">
                    <!-- Ici doit s'afficher le détail d'un personnage selectionné dans la liste à gauche -->
                    <h2>{{ detailedCharacter.name }}</h2>
                    <img :src="detailedCharacter.image" alt="character image">
                    <p><strong>Genre :</strong> {{ detailedCharacter.gender }}</p>
                    <p><strong>Espèce :</strong> {{ detailedCharacter.species }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Personnage from '@//components/Personnage.vue';

const data = ref(null);
const selection = ref([]);
let selectedCharacter = ref(null);
let detailedCharacter = ref(null);

onMounted(async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    data.value = response.data;
});

const selectCharacter = (character) => {
    const index = selection.value.findIndex(c => c.id === character.id);
    if (index === -1) {
        selection.value.push(character);
        selectedCharacter.value = character;
    } else {
        selection.value.splice(index, 1);
        selectedCharacter.value = null;
    }
};

const showDetails = (character) => {
    detailedCharacter.value = character;
};

const nextPage = async () => {
    if (data.value.info.next) {
        const response = await axios.get(data.value.info.next);
        data.value = response.data;
    }
};

const prevPage = async () => {
    if (data.value.info.prev) {
        const response = await axios.get(data.value.info.prev);
        data.value = response.data;
    }
};
</script>

<style scoped>
.liste-persos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card-title {
    font-size: 14px !important;
}

.perso {
    width: 300px;
    height: 300px;
    text-align: center;
}

.boutons {
    display: flex;
    margin-bottom: 20px;
}

.card-info {
    position: fixed;
    right: 50px;
    top: 50px;
}

.perso-details {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    text-align: center;
}
</style>