import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/core/models/user-login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUserData: UserLoginModel = {
                  username: '',
                  password: '',
                  token: ''
                  };

  constructor(private authService: AuthService,
              private router: Router) { }

async loginUser() {
  const loggingUser = await this.authService.loginUser(this.loginUserData).toPromise();

  localStorage.setItem('token', loggingUser.token);

  this.router.navigate(['/home']);
  }
}
