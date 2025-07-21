import axios from 'axios'

const API_KEY = 'c4dd33d1' 
const BASE_URL = 'https://www.omdbapi.com/'

export async function getFilms() {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=batman&type=movie`)
  return response.data.Search
}

export async function getFilmDetail(id) {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`)
  return response.data
}
