import type { ApodInfo } from '../types/fe2-plugins';
import type { DataSource, DataSourceInstance, DataSourceModule } from '@craftercms/studio-ui';

const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod';
const DEFAULT_API_KEY = 'DEMO_KEY';

function readApiKey(record: DataSource): string {
  const raw = record?.properties?.apiKey;
  if (raw == null || String(raw).trim() === '') return DEFAULT_API_KEY;
  return String(raw).trim();
}

/** Fetches today's (or optional date) APOD entry from NASA Open APIs. */
async function fetchApod(apiKey: string, options: { date?: string } = {}): Promise<ApodInfo> {
  const params = new URLSearchParams({ api_key: apiKey });
  if (options.date) params.set('date', options.date);

  const response = await fetch(`${APOD_ENDPOINT}?${params.toString()}`);
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`NASA APOD request failed (${response.status} ${response.statusText})${body ? `: ${body}` : ''}`);
  }
  const data = await response.json();
  if (Array.isArray(data)) {
    if (!data.length) throw new Error('NASA APOD returned an empty list.');
    return data[0] as ApodInfo;
  }
  if (!data || typeof data !== 'object') {
    throw new Error('NASA APOD returned an unexpected payload.');
  }
  return data as ApodInfo;
}

export const apodImageDataSourceModule: DataSourceModule = {
  apiVersion: 1,
  type: 'apod-image',
  interfaces: ['apod-image'],
  capabilities: ['list'],
  create({ record }): DataSourceInstance {
    const apiKey = readApiKey(record);

    async function getApod(options?: { date?: string }) {
      return fetchApod(apiKey, options);
    }

    return {
      id: record.id,
      type: 'apod-image',
      title: record.title,
      interfaces: ['apod-image'],
      capabilities: ['list'],
      getActions: () => [],
      async list() {
        const apod = await getApod();
        return [{ key: apod.url, value: apod.title, apod }];
      }
    };
  }
};

export default apodImageDataSourceModule;
