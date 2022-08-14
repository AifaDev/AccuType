import create from "zustand";

export const useKeys = create((set) => ({
  keys: {},
  addKey: (key) =>
    set((state) => {
      state.keys[key] = key;
    }),
  removeKey: (key) =>
    set((state) => {
      delete state.keys[key];
    }),
}));
