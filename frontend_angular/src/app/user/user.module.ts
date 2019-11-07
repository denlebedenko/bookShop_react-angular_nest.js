import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from 'src/app/user/user-routing.module';

import { UserListComponent } from 'src/app/user/user-list/user-list.component';
import { UserItemComponent } from './shared/user-item/user-item.component';
import { AddUserComponent } from 'src/app/user/shared/add-user/add-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserItemComponent,
    AddUserComponent,
    UserComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    CommonModule,
  ]
})
export class UserModule { }
