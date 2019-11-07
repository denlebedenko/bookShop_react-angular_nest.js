import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserRegisterModel } from 'src/app/core/models/user-register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registerUserData: UserRegisterModel = {
    email: '',
    password: '',
    username: '',
  };

  constructor(private authService: AuthService) { }

 async registerUser() {
  const mail = await this.authService.sendMail(this.registerUserData.email).toPromise();
  const registeredUser = await this.authService.registerUser(this.registerUserData).toPromise();

  return {mail, registeredUser};
  }
}
