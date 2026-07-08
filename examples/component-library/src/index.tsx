import en from './i18n/translations/en.json';
import es from './i18n/translations/es.json';
import { PluginDescriptor } from '@craftercms/studio-ui';
import Translations from './components/Translations';

const plugin: PluginDescriptor = {
  id: 'org.craftercms.examples.componentLibrary',
  locales: {
    en,
    es
  },
  widgets: {
    'org.craftercms.examples.translations': Translations
  },
  scripts: [
    // Below are examples of how to load scripts into the Studio runtime
    // {
    //   src: 'https://code.jquery.com/jquery-3.5.1.min.js',
    //   integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
    //   crossorigin: 'anonymous'
    // },
    // 'script.js'
  ],
  stylesheets: [
    // Examples of how to load stylesheets into the Studio runtime
    // 'index.css'
  ]
};

export { Translations as Vanilla };

export default plugin;
