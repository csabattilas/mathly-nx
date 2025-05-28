import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from, switchMap, take } from 'rxjs';
import { Auth } from '@angular/fire/auth';

export const SKIP_AUTH_HEADER = 'X-Skip-Auth';

/**
 * Interceptor that adds the Firebase authentication token to outgoing HTTP requests
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const auth = inject(Auth);

  if (req.headers.has(SKIP_AUTH_HEADER)) {
    const cleanReq = req.clone({
      headers: req.headers.delete(SKIP_AUTH_HEADER),
    });
    return next(cleanReq);
  }

  if (!auth.currentUser) {
    return next(req);
  }

  return from(auth.currentUser.getIdToken()).pipe(
    take(1),
    switchMap((token) => {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next(authReq);
    })
  );
};
