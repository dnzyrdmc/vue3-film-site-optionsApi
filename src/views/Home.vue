<template>
  <div class="HomeView">
    <h1>Film Listesi</h1>
    <div class="film-container">
      <FilmCard
        v-for="film in films"
        :key="film.imdbID"
        :film="film"
        @click="goToDetail(film.imdbID)"
      />
    </div>
  </div>
</template>

<script>
import { getFilms } from '../services/filmService'
import FilmCard from '../components/FilmCard.vue'

export default {
  name: 'HomeView',
  components: { FilmCard },
  data() {
    return {
      films: [],
    }
  },
  async mounted() {
    this.films = await getFilms()
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/film/${id}`)
    },
  },
}
</script>

<style scoped>
.film-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
