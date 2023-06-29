import { create } from 'zustand'
import axios from '../api/api'

export const useAnimeInfo = create((set, get) => ({
  animeInfo: [],

  fetchAnimeInfo: async (id) => {
    try {
      const response = await axios.get(
        `meta/anilist/info/${id}?provider=gogoanime`
      )

      set(() => ({ animeInfo: response.data }))

      return response.data // Return the fetched data
    } catch (error) {
      console.error('Error occurred while fetching anime info:', error)
      throw error
    }
  },
}))
