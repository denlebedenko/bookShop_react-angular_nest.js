import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BookRoutingModule } from 'src/app/books/book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SearchPipe } from 'src/app/shared/search.pipe';
import { BookItemComponent, BookListComponent, AddBookComponent } from 'src/app/books';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';

import { AuthGuard, AdminGuard } from 'src/app/shared/guards';
import { TokenInterceptorService } from 'src/app/authentication/token-interceptor.service';

import { ReactiveFormsModule  } from '@angular/forms';
import { BookComponent } from './book/book.component';



@NgModule ({
    declarations: [
        BookListComponent,
        SearchPipe,
        BookItemComponent,
        CartPageComponent,
        AddBookComponent,
        BookComponent,
    ],
    imports: [
        BookRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    bootstrap: [
        BookListComponent,
    ],
    providers: [
        AuthGuard,
        AdminGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
    ]
})


export class BookModule { }
