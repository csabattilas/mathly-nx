import { Injectable, inject } from '@angular/core';
import { from, Observable, switchMap, catchError } from 'rxjs';
import { Auth, signInWithPopup } from '@angular/fire/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { UserRepositoryService } from '@mathly-nx/repository';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly userRepositoryService = inject(UserRepositoryService);

  public signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  public signInGoogle(): Observable<string> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
      switchMap((userCredential) => {
        // Get user information from the credential
        const { user } = userCredential;

        // Get the ID token
        return from(user.getIdToken()).pipe(
          switchMap((token) => {
            // The token is already in the auth header via the interceptor
            return this.userRepositoryService.getCurrentUser().pipe(
              switchMap(() => from([token])),
              catchError((error) => {
                console.error('Failed to initialize user in backend:', error);
                // Still return the token even if backend initialization fails
                return from([token]);
              })
            );
          })
        );
      })
    );
  }

  public get id(): string | undefined {
    return this.auth.currentUser?.uid;
  }
}
