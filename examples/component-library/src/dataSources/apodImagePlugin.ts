import type { Fe2PluginDescriptor } from '../types/fe2-plugins';
import { apodImageDataSourceModule } from './apodImage';

/**
 * FE2 data-source plugin — NASA Astronomy Picture of the Day (APOD).
 *
 * Locator (form-definition): pluginId=org.craftercms.examples type=datasource name=apod-image filename=index.js
 * Asset path: /static-assets/plugins/org/craftercms/examples/datasource/apod-image/index.js
 */
const plugin: Fe2PluginDescriptor = {
  /** Runtime registry identity — not the same as form-definition locator `pluginId`. */
  id: 'org.craftercms.examples.datasource',
  dataSources: {
    /** Key must equal module.type and form-definition <type> */
    'apod-image': apodImageDataSourceModule
  }
};

export default plugin;
