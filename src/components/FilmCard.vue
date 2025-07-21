<template>
  <div class="film-card" @click="$emit('click')">
    <img :src="film.Poster" alt="Film Poster" />
    <h3>{{ film.Title }}</h3>
    <p>{{ film.Year }}</p>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    film: Object,
  },
}
</script>

<style scoped>
.film-card {
  width: 200px;
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}
.film-card:hover {
  transform: scale(1.05);
}
.film-card img {
  width: 100%;
  height: auto;
}
</style>
