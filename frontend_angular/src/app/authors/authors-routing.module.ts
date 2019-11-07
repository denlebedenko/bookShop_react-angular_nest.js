import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AddAuthorComponent } from './shared/add-author/add-author.component';
import { AuthorsMainComponent } from './authors-main/authors-main.component';
import { AuthGuard, AdminGuard } from '../shared/guards';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'authors',
        pathMatch: 'full',
        canActivate: [AuthGuard, AdminGuard],
    },
    {
        path: 'authors',
        component: AuthorsMainComponent,
        children: [
            {
                path: '',
                component: AuthorsListComponent,
                pathMatch: 'full',
            },
            {
                path: 'add-author',
                component: AddAuthorComponent,
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsRoutingModule { }
