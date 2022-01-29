import { defineStore } from 'pinia';
import { Dark } from 'quasar';

const $themeDark = localStorage.getItem('$theme.dark');
const mode = $themeDark ? JSON.parse($themeDark) : 'auto';

export const useTheme = defineStore('$theme', {
  state: () => ({
    dark: mode as unknown as typeof Dark.mode,
  }),
  getters: {
    classes(state) {
      return state.dark ? ['bg-dark', `text-light`] : [`bg-light`, `text-dark`];
    },
    background(state) {
      return state.dark ? 'bg-dark' : 'bg-light';
    },
    color(state) {
      return state.dark ? 'dark' : 'light';
    },
  },
  actions: {
    initializeColor() {
      Dark.set(this.dark);
    },
    toggleDark() {
      Dark.toggle();
      this.dark = Dark.isActive;
      localStorage.setItem('$theme.dark', JSON.stringify(this.dark));
    },
    genStyle(light = 'light') {
      return this.dark
        ? ['bg-dark', `text-${light}`]
        : [`bg-${light}`, `text-dark`];
    },
  },
});
