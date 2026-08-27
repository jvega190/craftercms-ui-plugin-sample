/** NASA Astronomy Picture of the Day payload */
export interface ApodInfo {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  copyright?: string;
  thumbnail_url?: string;
  service_version?: string;
}
