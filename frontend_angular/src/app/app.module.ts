
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AuthenticationModule } from 'src/app/authentication/authentication.module';

import { BookModule } from 'src/app/books/book.module';
import { UserModule } from 'src/app/user/user.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';

import { AuthorsModule } from './authors/authors.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    BookModule,
    AuthenticationModule,
    UserModule,
    AuthorsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
