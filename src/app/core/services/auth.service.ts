import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { IUser } from '../../auth/user.model';
import { IAuthData } from '../../auth/auth-data.model';
@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private user: IUser;
  constructor(private router: Router) { }
  public registerUser(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authenticated();
  }
  public login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authenticated();
  }
  public logout() {
    this.user = null;
    this.authChange.next(false);
      this.router.navigate(['/login']);
  }
  public getUser() {
    return { ...this.user };
  }
  public isAuth() {
    return !!this.user;
  }
  private authenticated() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
