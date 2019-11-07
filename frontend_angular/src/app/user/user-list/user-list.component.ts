import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  public users: UserModel[];
  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.userList();
  }

  async userList(): Promise<void> {
    this.users = await this.userService.getUsers().toPromise();
  }
}
