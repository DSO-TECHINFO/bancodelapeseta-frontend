import { HttpInterceptorFn} from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token-service.service';

export const TokenInterceptorService: HttpInterceptorFn = (req, next) => {

  let tokenService = inject(TokenService);
  let interceptReq = req;
  const token = tokenService.getToken();

  if(token != null){
    interceptReq = req.clone({ setHeaders: {'Authorization': `Bearer ${token}`}})
  }
  console.log('Request: ', interceptReq);

  return next(interceptReq);
}
