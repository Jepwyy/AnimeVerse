import { create } from 'zustand'

export const useAnimeInfo = create((set, get) => ({
  bears: 0,
  test: 'test',

  setTest: (num) =>
    set(() => ({
      test: num,
    })),
}))
