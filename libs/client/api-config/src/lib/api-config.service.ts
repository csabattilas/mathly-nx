import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from './api-config.model';
import { ApiProvider } from './api-config.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  private currentProvider: ApiProvider;

  constructor(@Inject(API_CONFIG) private config: ApiConfig) {
    this.currentProvider = config.provider;
  }

  getBaseUrl(): string {
    return this.config.baseUrls[this.currentProvider];
  }

  setProvider(provider: ApiProvider): void {
    this.currentProvider = provider;
  }

  getCurrentProvider(): ApiProvider {
    return this.currentProvider;
  }

  getEndpointUrl(endpoint: string): string {
    return `${this.getBaseUrl()}/${endpoint}`;
  }

  getTimeout(): number {
    return this.config.timeout;
  }
}
