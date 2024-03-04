import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token-service.service';

export const AuthGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);
  console.log('En guard, route: ', route);
  if (tokenService.getToken()){
    return true;
  }else{
    return true;
  }


}
