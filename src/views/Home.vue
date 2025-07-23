<template>
  <div class="HomeView">
    <h1>Filtreler</h1>
    <hr>
    <form @submit.prevent="filterName" class="forms">
      <p>İsim Seç</p>
      <input type="text" id="fname" name="fname" v-model="movieName"><br><br>
      <input type="submit" value="Film Ara">
    </form>
    <hr>
    <br>

    <div class="centeredItems">
      <p>Tarih Seç</p>
      <VueDatePicker
        v-model="date"
        @update:model-value="DateChange"
        :format="'yyyy'"
        yearPicker 
        autoApply 
      />
    </div>

    <hr>
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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'HomeView',
  components: { FilmCard, VueDatePicker },
  data() {
    return {
      films: [],
      date: null, 
      allFilms: [],
      movieName: null,
    }
  },
  async mounted() {
    this.allFilms = await getFilms();
    this.films = this.allFilms;
  },
  methods: {
    DateChange(newYearValue) {
      this.date = newYearValue; 

      if (newYearValue) {
        const selectedYear = newYearValue;
        this.films = this.allFilms.filter(film => film.Year === String(selectedYear));
      } else {
        this.films = this.allFilms; 
      }
    },

    filterName(){
      if(this.movieName){
        const newName = this.movieName;
        this.films = this.allFilms.filter(film =>
        film.Title === String(newName)
        )
      }else{
          this.films = this.allFilms;
        }
    },

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

h1{
  text-align: center;
}
.forms{
  text-align: center;
}
p{
  text-align: center;
}
.centeredItems{
  text-align: center;
  padding-left: 40%; 
  padding-right: 40%;
}
</style>

