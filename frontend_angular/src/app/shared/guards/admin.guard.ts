import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const jwtHelper: JwtHelperService = new JwtHelperService();

    const token: string = localStorage.getItem('token');
    const user: UserModel = jwtHelper.decodeToken(token);

    if (token) {
      if (user.role === 'admin') {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
        }
      } else {
        return false;
      }
   }
}
