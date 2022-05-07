import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

private TOKEN_KEY = 'auth-token';
private USER_KEY = 'auth-user';

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, user);
  }

    public getUser(): string | null {
      let user = window.sessionStorage.getItem(this.USER_KEY);
      return user;
    }
}
