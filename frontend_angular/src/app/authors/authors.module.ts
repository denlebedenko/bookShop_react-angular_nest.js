import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorComponent } from './shared/author/author.component';
import { AddAuthorComponent } from './shared/add-author/add-author.component';
import { AuthorsMainComponent } from './authors-main/authors-main.component';

import { SharedModule } from '../shared/shared.module';
import { AuthorsRoutingModule } from './authors-routing.module';

@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorComponent,
    AddAuthorComponent,
    AuthorsMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
