import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  return authService.verifyToken().pipe(
    catchError(() => {
      return router.navigate(['/login']);
    }),
    map(() => {
      return true
    })
  )
};
