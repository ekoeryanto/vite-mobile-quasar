import { Pinia } from 'pinia';
import {
  createMemoryHistory,
  createRouter as createVueRouter,
  createWebHistory,
} from 'vue-router';
import { useNavigation } from '../store/navigation';
import { store } from '../store';

import routes from './routes';

export default function createRouter() {
  const createHistory = import.meta.env.SSR
    ? createMemoryHistory
    : createWebHistory;

  const router = createVueRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(
      import.meta.env.SSR ? undefined : import.meta.env.BASE_URL
    ),
  });

  router.goBack = () => {
    const segments = router.currentRoute.value.path.split('/');
    if (segments.length > 2) {
      segments.pop();
      const path = segments.join('/');
      router.push(path);
    }
  };

  const navigation = useNavigation(store);

  router.afterEach((to, from) => {
    const fromRootPath = `/${from.path.split('/')[1]}`;
    const toRootPath = `/${to.path.split('/')[1]}`;

    // if we navigated to a different 'section', don't use page transition
    navigation.usePageTransition = fromRootPath === toRootPath;
    if (
      navigation.usePageTransition &&
      from.path === to.path &&
      to.path !== toRootPath
    ) {
      router.push(toRootPath);
    }

    // update to property on nav item, whenever we change route
    navigation.setRoot(toRootPath, to.path);
  });

  return router;
}

declare module 'vue-router' {
  interface Router {
    goBack: () => void;
  }
}
