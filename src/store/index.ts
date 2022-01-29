import { createPinia, Pinia } from 'pinia';

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Pinia;
  }
}

declare module 'pinia' {
  interface Pinia {
    replaceState(state: never): void;
  }
}

export const store = createPinia();

store.replaceState = function (state: never) {
  store.state.value = state;
};
