import { Component, OnInit, Input} from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input()user: UserModel;

  constructor(private userService: UserService) { }

  public updateUserInfo = false;

  ngOnInit() {
  }

  async deleteUser(id: string): Promise<UserModel> {
    const deletedUser = await this.userService.deleteUser(id).toPromise();
    location.reload();
    return deletedUser;

  }

  async updateUser(id: string, user: UserModel): Promise<UserModel> {
    const updatedUser = await this.userService.editUser(id, user).toPromise();
    location.reload();
    return updatedUser;
  }

  public editUser() {
    return this.updateUserInfo = true;
  }
}
