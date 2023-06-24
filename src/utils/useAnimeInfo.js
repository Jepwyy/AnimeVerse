import { create } from 'zustand'

export const useAnimeInfo = create((set, get) => ({
  animeInfo: [],

  setAnimeInfo: (info) =>
    set((state) => ({
      animeInfo: [...state.animeInfo, info],
    })),
}))
