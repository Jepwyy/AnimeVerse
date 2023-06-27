import { create } from 'zustand'
import axios from '../api/api'
export const useAnimeInfo = create((set, get) => ({
  animeInfo: [],

  // fetchAnimeInfo: (id) =>
  //   set((state) => {
  //     axios
  //       .get(`meta/anilist/info/${id}?provider=gogoanime`)
  //       .then((res) => res.data)
  //       .then((info) => {
  //         state.setAnimeInfo(info)
  //       })
  //   }),
  fetchAnimeInfo: async (id) => {
    const response = await axios.get(
      `meta/anilist/info/${id}?provider=gogoanime`
    )

    set(() => ({ animeInfo: response.data }))
  },
}))
