import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/core/models';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  userData: UserModel = {
    username: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  async addUser() {
    const response = await this.userService.createUser(this.userData).toPromise();
    this.router.navigate(['/home/users']);
  }
}
