import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import FilmDetail from '../views/FilmDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/film/:id', name: 'FilmDetail', component: FilmDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
