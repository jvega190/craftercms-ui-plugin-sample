import type { ComponentType, ReactNode } from 'react';
import type { PluginDescriptor } from '@craftercms/studio-ui';

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

export interface DataSourceListItem extends Partial<ApodInfo> {
  key: string;
  value: string;
  apod?: ApodInfo;
}

export interface ApodDataSourceInstance {
  id: string;
  type: string;
  title?: string;
  interfaces: string[];
  capabilities: string[];
  getActions: () => unknown[];
  list?: () => Promise<ApodInfo>;
}

export interface ResolvedDataSource {
  instance?: ApodDataSourceInstance;
}

export interface ControlDataSources {
  status?: 'idle' | 'loading' | 'ready' | 'error' | string;
  instances?: ResolvedDataSource[];
}

export interface Fe2ControlField {
  id?: string;
  type?: string;
  [key: string]: unknown;
}

export interface Fe2ControlProps {
  value: ApodInfo;
  setValue: (next: ApodInfo) => void;
  field: Fe2ControlField;
  readonly?: boolean;
  dataSources?: ControlDataSources;
}

export interface DataSourceBinding {
  propertyName: string;
  interfaces: string[];
  selection: 'single' | 'multiple' | string;
}

export interface Fe2ControlDescriptor {
  Component: ComponentType<Fe2ControlProps>;
  dataSourceBindings?: DataSourceBinding[];
  valueRetriever?: (value: unknown) => ApodInfo;
  valueSerializer?: (field, value: ApodInfo) => string;
}

export interface DataSourceRecord {
  id: string;
  title?: string;
  type?: string;
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface DataSourceModule {
  apiVersion: number;
  type: string;
  interfaces: string[];
  capabilities: string[];
  create: (args: { record: DataSourceRecord }) => ApodDataSourceInstance;
}

export interface Fe2PluginDescriptor extends PluginDescriptor {
  controls?: Record<string, Fe2ControlDescriptor>;
  dataSources?: Record<string, DataSourceModule>;
}

export type FormsEngineFieldComponent = ComponentType<{
  field: Fe2ControlField;
  htmlFor?: string;
  children?: ReactNode;
}>;
