import { create } from 'zustand'

export const useComparison = create((set) => ({
  items: [],
  currentSector: null,
  sectors: [
    'santé', 'éducation', 'agriculture', 
    'finance', 'technologie', 'transport',
    'énergie', 'immobilier', 'tourisme'
  ],
  
  addItem: (item) => set((state) => {
    // Éviter les doublons
    if (state.items.some(i => i.id === item.id)) {
      return state
    }
    // Limiter à 3 produits max pour les non connectés
    if (state.items.length >= 3) {
      return state
    }
    return { items: [...state.items, item] }
  }),

  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(i => i.id !== itemId)
  })),

  setSector: (sector) => set({ currentSector: sector }),

  clearComparison: () => set({ items: [], currentSector: null }),

  getItemsBySector: (sector) => {
    return state.items.filter(i => i.sector === sector)
  }
}))

export default useComparison
