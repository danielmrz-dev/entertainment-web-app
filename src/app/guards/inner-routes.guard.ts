import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { LoginService } from '../services/login.service';

export const innerRoutesGuard: CanActivateFn = async (route, state) => {
    const router = inject(Router);
    
    const isLogged = await verifyLogged();
    
    if (isLogged) {
      if (state.url !== '/browse') {
        router.navigate(['/browse']);
      }
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
};

async function verifyLogged(): Promise<boolean> {
  const loginService = inject(LoginService);
  return firstValueFrom(loginService.isLogged$);
}

