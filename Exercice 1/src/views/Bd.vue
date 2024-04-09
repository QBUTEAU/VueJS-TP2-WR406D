<script setup>
import BdAffichage from '@/components/BdAffichage.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const recup = ref([])

let afficheImage = ref(true)

onMounted(async () => {
    const response = await axios.get('https://exercice1.davidannebicque.com/api/bd.php')
    recup.value = response.data
});

</script>

<template>
    <div>
        <h1>Bandes dessinées</h1>

        <div>
            Afficher les images <input type="checkbox" v-model="afficheImage">
        </div>


        <div class="liste-bd">
            <BdAffichage v-for="bd in recup" :titre="bd.titre" :image="bd.image_url" :auteur="bd.auteur"
                :dessinateur="bd.dessinateur" :annee="bd.annee" :afficheImage="afficheImage">
            </BdAffichage>
        </div>
    </div>
</template>

<style scoped>
.liste-bd {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>