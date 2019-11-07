import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from 'src/app/cart-page/cart-page.component';

import { AddBookComponent, BookListComponent } from 'src/app/books';

import { AuthGuard, AdminGuard } from 'src/app/shared/guards';
import { BookComponent } from './book/book.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'home',
    component: BookComponent,
    children: [
      {
        path: 'add-book',
        component: AddBookComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'cart',
        component: CartPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'users',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard, AdminGuard],
        pathMatch: 'full',
      },
      {
        path: 'authors',
        loadChildren: () => import('../authors/authors.module').then(m => m.AuthorsModule),
        canActivate: [AuthGuard, AdminGuard],
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
