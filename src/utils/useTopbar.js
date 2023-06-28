import { create } from 'zustand'

export const useTopbar = create((set, get) => ({
  advanceSearch: '',

  setAdvanceSearch: (val) =>
    set(() => ({
      advanceSearch: val,
    })),
}))
