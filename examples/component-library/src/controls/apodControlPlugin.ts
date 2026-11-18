import { ComponentType } from 'react';
import type { ApodInfo } from '../types/fe2-plugins';
import ApodControl from './ApodControl';
import type { PluginDescriptor } from '@craftercms/studio-ui';
import { ControlProps } from '@craftercms/studio-ui/components/FormsEngine/types';

/**
 * FE2 control plugin — NASA Astronomy Picture of the Day (APOD).
 *
 * Locator (form-definition): pluginId=org.craftercms.examples type=control name=apod filename=index.js
 * Asset path: /static-assets/plugins/org/craftercms/examples/control/apod/index.js
 */
const plugin: PluginDescriptor = {
  /** Runtime registry identity — not the same as form-definition locator `pluginId`. */
  id: 'org.craftercms.examples.control',
  controls: {
    /** Key must equal field.type */
    apod: {
      Component: ApodControl as ComponentType<ControlProps>,
      dataSourceBindings: [{ propertyName: 'datasource', interfaces: ['apod-image'], selection: 'single' }],
      valueRetriever: (value) => {
        if (value == null || value === '') return null;
        if (typeof value === 'object') return value as ApodInfo;
        const text = String(value).trim();
        if (!text) return null;
        try {
          return JSON.parse(text) as ApodInfo;
        } catch {
          // Legacy / plain URL storage
          return { url: text, title: text, date: '', explanation: '' };
        }
      },
      valueSerializer: (value) => {
        const apod = value as ApodInfo | null | undefined;
        if (!apod || typeof apod !== 'object') return '';
        return JSON.stringify({
          date: apod.date ?? '',
          title: apod.title ?? '',
          explanation: apod.explanation ?? '',
          url: apod.url ?? '',
          hdurl: apod.hdurl ?? '',
          copyright: apod.copyright ?? '',
          thumbnail_url: apod.thumbnail_url ?? '',
          service_version: apod.service_version ?? ''
        });
      }
    }
  }
};

export default plugin;
