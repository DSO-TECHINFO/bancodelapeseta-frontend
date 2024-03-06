import { Injectable } from '@angular/core';

const ACCESS_TOKEN = "accessToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.setItem(ACCESS_TOKEN, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(ACCESS_TOKEN);
  }

  public removeToken(): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
