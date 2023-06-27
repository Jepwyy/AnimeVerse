import axios from 'axios'

export default axios.create({
  baseURL: 'https://anime-verse-api.vercel.app/main/',
  withCredentials: false,
})
