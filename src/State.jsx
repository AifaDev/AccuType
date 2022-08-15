import create from "zustand";

export const useKeys = create((set) => ({
  keys: {},
  focused: false,
  addKey: (key) =>
    set((state) => {
      state.keys[key] = key;

    }),
  removeKey: (key) =>
    set((state) => {
      delete state.keys[key];

    }),
  setFocus: (bool) =>
    set((state) => {
      state.focused = bool;
    }),
}));
