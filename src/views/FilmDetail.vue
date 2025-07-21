<template>
  <div v-if="film">
    <h1>{{ film.Title }}</h1>
    <img :src="film.Poster" alt="Poster" />
    <p><strong>Yönetmen:</strong> {{ film.Director }}</p>
    <p><strong>Oyuncular:</strong> {{ film.Actors }}</p>
    <p><strong>Tür:</strong> {{ film.Genre }}</p>
    <p><strong>Açıklama:</strong> {{ film.Plot }}</p>
    <router-link to="/">← Geri Dön</router-link>
  </div>
</template>

<script>
import { getFilmDetail } from '../services/filmService'

export default {
  name: 'FilmDetail',
  data() {
    return {
      film: null,
    }
  },
  async mounted() {
    const id = this.$route.params.id
    this.film = await getFilmDetail(id)
  },
}
</script>
