import { create } from 'zustand'

export const useAnimeInfo = create((set, get) => ({
  animeId: '',

  setAnimeId: (id) =>
    set(() => ({
      animeId: id,
    })),
}))
