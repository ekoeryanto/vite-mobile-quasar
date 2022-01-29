import { createApp } from './quasar';
import App from './App.vue';
import createRouter from './router';
import { store } from './store';

const app = createApp(App);
const router = createRouter();

app.use(store).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
