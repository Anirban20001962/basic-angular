import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private email: string;
  private isAuth: boolean;

  constructor() {}

  get getEamil() {
    return this.email;
  }

  get getIsAuth() {
    return this.isAuth;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  set setIsAuth(val: boolean) {
    this.isAuth = val;
  }
}
