<template>
    <h1>Articles</h1>
    <div class="row">
        <div class="col-12">
            <h2>Liste des articles</h2>
            <div v-if="data">
                <div v-for="article in data['hydra:member']" :key="article.id">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.content }}</p>
                </div>
            </div>
            <div v-else>
                <p>Chargement en cours...</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h2>Ajouter un article</h2>
            <form @submit.prevent="addArticle">
                <label for="titre">Titre</label>
                <input v-model="newArticle.title" type="text" id="titre" name="titre" required class="form-control">

                <label for="contenu">Contenu</label>
                <textarea v-model="newArticle.content" id="contenu" name="contenu" required
                    class="form-control"></textarea>

                <button class="btn btn-primary">Ajouter</button>
            </form>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);
const newArticle = ref({ title: '', content: '' });
const error = ref(null);

const getArticles = async () => {
    try {
        const response = await axios.get('https://exercice2.davidannebicque.com/api/articles');
        data.value = response.data;
    } catch (err) {
        error.value = err.message;
    }
};

const addArticle = async () => {
    try {
        await axios.post('https://exercice2.davidannebicque.com/api/articles', newArticle.value);
        newArticle.value = { title: '', content: '' };
        await getArticles();
    } catch (err) {
        error.value = err.message;
    }
};

getArticles();

</script>
