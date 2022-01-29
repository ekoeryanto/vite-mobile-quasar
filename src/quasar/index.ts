import { createApp as createVueApp, CreateAppFunction } from 'vue';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/id';
import quasarIconSet from 'quasar/icon-set/svg-material-icons-outlined';

import './app.scss';

export const createApp: CreateAppFunction<Element> = (
  rootComponent,
  rootProps
) => {
  const app = createVueApp(rootComponent, rootProps);

  app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,
    /*
        config: {
            brand: {
            // primary: '#e46262',
            // ... or all other brand colors
            },
            notify: {...}, // default set of options for Notify Quasar plugin
            loading: {...}, // default set of options for Loading Quasar plugin
            loadingBar: { ... }, // settings for LoadingBar Quasar plugin
            // ..and many more (check Installation card on each Quasar component/directive/plugin)
        }
        */
  });

  return app;
};
