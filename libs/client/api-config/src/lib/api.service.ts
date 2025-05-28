import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { ApiConfigService } from './api-config.service';

const SKIP_AUTH_HEADER = 'X-Skip-Auth';

/**
 * Unified service for making HTTP requests to the API
 * Supports authenticated and unauthenticated requests
 * Automatically applies base URL and timeout from configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  constructor(private apiConfig: ApiConfigService) {}

  // ===== AUTHENTICATED REQUESTS WITH API ENDPOINT =====

  /**
   * Make an authenticated HTTP GET request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @param params Optional query parameters
   * @returns An Observable of the response
   */
  get<T>(
    endpoint: string,
    params?: Record<
      string,
      string | number | boolean | ReadonlyArray<string | number | boolean>
    >
  ): Observable<T> {
    return this.http
      .get<T>(this.apiConfig.getEndpointUrl(endpoint), { params })
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Make an authenticated HTTP POST request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @param data The request body
   * @returns An Observable of the response
   */
  post<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D
  ): Observable<T> {
    return this.http
      .post<T>(this.apiConfig.getEndpointUrl(endpoint), data)
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Make an authenticated HTTP PUT request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @param data The request body
   * @returns An Observable of the response
   */
  put<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D
  ): Observable<T> {
    return this.http
      .put<T>(this.apiConfig.getEndpointUrl(endpoint), data)
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Make an authenticated HTTP DELETE request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @returns An Observable of the response
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http
      .delete<T>(this.apiConfig.getEndpointUrl(endpoint))
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  // ===== UNAUTHENTICATED REQUESTS =====

  /**
   * Make an unauthenticated HTTP GET request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @param params Optional query parameters
   * @returns An Observable of the response
   */
  getPublic<T>(
    endpoint: string,
    params?: Record<
      string,
      string | number | boolean | ReadonlyArray<string | number | boolean>
    >
  ): Observable<T> {
    const headers = this.addSkipAuthHeader();
    return this.http
      .get<T>(this.apiConfig.getEndpointUrl(endpoint), { params, headers })
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Make an unauthenticated HTTP POST request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @param data The request body
   * @returns An Observable of the response
   */
  postPublic<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D
  ): Observable<T> {
    const headers = this.addSkipAuthHeader();
    return this.http
      .post<T>(this.apiConfig.getEndpointUrl(endpoint), data, { headers })
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Make an unauthenticated HTTP PUT request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @param data The request body
   * @returns An Observable of the response
   */
  putPublic<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D
  ): Observable<T> {
    const headers = this.addSkipAuthHeader();
    return this.http
      .put<T>(this.apiConfig.getEndpointUrl(endpoint), data, { headers })
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Make an unauthenticated HTTP DELETE request to an API endpoint
   * @param endpoint The API endpoint (will be appended to the base URL)
   * @returns An Observable of the response
   */
  deletePublic<T>(endpoint: string): Observable<T> {
    const headers = this.addSkipAuthHeader();
    return this.http
      .delete<T>(this.apiConfig.getEndpointUrl(endpoint), { headers })
      .pipe(timeout(this.apiConfig.getTimeout()));
  }

  /**
   * Add the skip auth header to the provided headers
   * @param headers The headers to add the skip auth header to
   * @returns The headers with the skip auth header added
   */
  private addSkipAuthHeader(
    headers?: HttpHeaders | Record<string, string | string[]>
  ): HttpHeaders {
    let httpHeaders: HttpHeaders;

    if (headers instanceof HttpHeaders) {
      httpHeaders = headers;
    } else if (headers) {
      httpHeaders = new HttpHeaders(headers);
    } else {
      httpHeaders = new HttpHeaders();
    }

    return httpHeaders.set(SKIP_AUTH_HEADER, 'true');
  }
}
