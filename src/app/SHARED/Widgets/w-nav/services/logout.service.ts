import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private tokenService: TokenService, private router: Router) { }

  public logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }

}
