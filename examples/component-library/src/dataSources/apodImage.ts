import type { ApodInfo } from '../types/fe2-plugins';
import type { DataSource, DataSourceInstance, DataSourceModule } from '@craftercms/studio-ui';

/**
 * APOD moved off api.nasa.gov/planetary/apod (offline 1 Dec 2026) onto the
 * science.nasa.gov WordPress API. `date=YYYY-MM-DD` is ignored there; a single
 * day is the YYMMDD path, and "today" is the first item of a one-item page.
 * https://api.nasa.gov/
 */
const APOD_ENDPOINT = 'https://science.nasa.gov/wp-json/wp/v2/apod-basic';
const DEFAULT_API_KEY = 'DEMO_KEY';

interface RawApod {
  date?: string;
  title?: string;
  explanation?: string;
  url?: string;
  hdurl?: string;
  copyright?: string;
  credit?: string;
  thumbnail_url?: string;
  service_version?: string;
}

function readApiKey(record: DataSource): string {
  const raw = record?.properties?.apiKey;
  if (raw == null || String(raw).trim() === '') return DEFAULT_API_KEY;
  return String(raw).trim();
}

/** `2026-11-18` → `261118`, the path segment this API actually honors. */
function toPathDate(date: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date.trim());
  if (!match) {
    throw new Error(`NASA APOD date must be YYYY-MM-DD (received "${date}").`);
  }
  return `${match[1].slice(2)}${match[2]}${match[3]}`;
}

function stripHtml(value: string | undefined): string {
  if (!value) return '';
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#0*39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^Explanation:\s*/i, '');
}

/**
 * The new payload's `url` is the article page. The picture is `hdurl`.
 * Explanation and credit fields arrive as HTML.
 */
function toApodInfo(entry: RawApod): ApodInfo {
  const imageUrl = entry.hdurl || '';
  const copyright = stripHtml(entry.copyright || entry.credit);
  return {
    date: entry.date ?? '',
    title: stripHtml(entry.title),
    explanation: stripHtml(entry.explanation),
    url: imageUrl,
    hdurl: entry.hdurl,
    copyright: copyright || undefined,
    thumbnail_url: entry.thumbnail_url,
    service_version: entry.service_version
  };
}

/** Fetches today's (or optional date) APOD entry from the WordPress APOD API. */
async function fetchApod(apiKey: string, options: { date?: string } = {}): Promise<ApodInfo> {
  const params = new URLSearchParams({ api_key: apiKey });
  let url = APOD_ENDPOINT;
  if (options.date) {
    url = `${APOD_ENDPOINT}/${toPathDate(options.date)}`;
  } else {
    params.set('per_page', '1');
  }

  const response = await fetch(`${url}?${params.toString()}`);
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`NASA APOD request failed (${response.status} ${response.statusText})${body ? `: ${body}` : ''}`);
  }
  const data = await response.json();
  if (Array.isArray(data) && !data.length) {
    throw new Error('NASA APOD returned an empty list.');
  }
  const entry = Array.isArray(data) ? data[0] : data;
  if (!entry || typeof entry !== 'object') {
    throw new Error('NASA APOD returned an unexpected payload.');
  }
  const apod = toApodInfo(entry as RawApod);
  if (!apod.hdurl && !apod.url) {
    throw new Error('NASA APOD did not include an image URL.');
  }
  return apod;
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
