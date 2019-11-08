import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from 'src/app/user/shared/add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { AuthGuard, AdminGuard } from '../shared/guards';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
    },
    {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
            {
                path: '',
                component: UserListComponent,
                pathMatch: 'full',
            },
            {
                path: 'add-user',
                component: AddUserComponent,
                pathMatch: 'full',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
