import { create } from 'zustand';

interface IFilter {
  filters: string[];
  add: (v: string) => void;
  remove: (v: string) => void;
}

export const useFilter = create<IFilter>((set) => ({
  filters: [],
  add: (value: string) => set((state) => ({ filters: [...state.filters, value] })),
  remove: (value: string) =>
    set((state) => ({ filters: state.filters.filter((oldValue) => oldValue !== value) })),
  clear: () => set({ filters: [] }),
}));
