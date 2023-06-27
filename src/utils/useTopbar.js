import { create } from 'zustand'

export const useTopbar = create((set, get) => ({
  isActive: '',

  setIsActive: (val) =>
    set(() => ({
      animeId: val,
    })),
}))
