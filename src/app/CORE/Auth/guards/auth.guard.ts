import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token-service.service';

export const AuthGuard: CanActivateFn = (route, state) => {


  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.getToken()){
    const url = router.createUrlTree(['/dashboard']);
    return url;
  }else{
    return true;
  }

}
