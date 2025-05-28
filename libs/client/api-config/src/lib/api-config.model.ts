import { ApiProvider } from './api-config.enum';
import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  provider: ApiProvider;
  baseUrls: Record<ApiProvider, string>;
  timeout: number; // Timeout in milliseconds
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  provider: ApiProvider.MATHLY,
  baseUrls: {
    [ApiProvider.MATHLY]: '/api',
    [ApiProvider.PYTHON]: 'http://localhost:3333/api',
    [ApiProvider.MOCK]: '/mock-api',
  },
  timeout: 30000, // Default timeout: 30 seconds
};

// Using an InjectionToken without a factory allows us to provide the value from the environment
export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');
