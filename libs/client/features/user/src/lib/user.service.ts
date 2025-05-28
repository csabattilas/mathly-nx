import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@mathly-nx/api-config';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiService = inject(ApiService);
  /**
   * Get the currently authenticated user
   * @returns Observable with the current user data
   */
  getCurrentUser(): Observable<User> {
    return this.apiService.get<User>('users/me');
  }

  /**
   * Create a new user
   * @param userData The user data to create
   * @returns Observable with the created user
   */
  createUser(userData: Partial<User>): Observable<User> {
    return this.apiService.post<User>('users', userData);
  }
}
