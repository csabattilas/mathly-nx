import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCreateRequestDto, UserDto } from '@mathly-nx/dto';
import { ApiService } from '@mathly-nx/api-config';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryService {
  private readonly BASE_URL = 'users';

  private readonly apiService = inject(ApiService);

  /**
   * Get the currently authenticated user
   * @returns Observable with the current user data
   */
  getCurrentUser(): Observable<UserDto> {
    return this.apiService.get<UserDto>(`${this.BASE_URL}/me`);
  }

  /**
   * Create a new user
   * @param userData The user data to create
   * @returns Observable with the created user
   */
  createUser(userData: UserCreateRequestDto): Observable<UserDto> {
    return this.apiService.post<UserDto, UserCreateRequestDto>(
      this.BASE_URL,
      userData
    );
  }
}
