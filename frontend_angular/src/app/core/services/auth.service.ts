import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserLoginModel, UserRegisterModel, UserModel } from 'src/app/core/models';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }


  jwtHelper: JwtHelperService = new JwtHelperService();

  registerUser(user: UserRegisterModel) {
    return this.http.post<UserRegisterModel>(environment.endPoint.registerUrl, user);
  }

  loginUser(user: UserLoginModel) {
    return this.http.post<UserLoginModel>(environment.endPoint.loginUrl, user);
  }

  loggedIn() {
    const token: string = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
  }

  checkUserRole() {
    const token: string = localStorage.getItem('token');
    const user: UserModel = this.jwtHelper.decodeToken(token);
    return token && user.role === 'admin';
  }

  getToken() {
    return localStorage.getItem('token');
  }

  sendMail(body) {
    return this.http.post(environment.endPoint.sendGridUrl, body);
  }
}
