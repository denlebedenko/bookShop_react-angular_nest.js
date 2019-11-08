import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BookModel } from 'src/app/core/models/book.model';

import { Observable } from 'rxjs';
import { QueryBook } from '../models/query-books.model';
import { environment } from 'src/environments/environment';
import { StripeData } from '../models/stripeData.model';
import { CartResponse } from '../models/cart-res.model';

@Injectable()

export class BookService {
    public selectedBook = false;
    public editBook = false;

    constructor(private http: HttpClient) { }

    public getBooks(query: QueryBook): Observable<BookModel[]> {
        return this.http.post<BookModel[]>(environment.endPoint.booksUrl, query);
    }

    public createBook(book: BookModel): Observable<BookModel> {
        return this.http.post<BookModel>(`${environment.endPoint.booksUrl}/add`, book);
    }

    public deleteBook(id: string): Observable<BookModel> {
        return this.http.delete<BookModel>(`${environment.endPoint.booksUrl}/${id}`);
    }

    public updateBook(id: string, book: BookModel): Observable<BookModel> {
        return this.http.put<BookModel>(`${environment.endPoint.booksUrl}/${id}`, book);
    }

    public getCountPages(): Observable<number> {
        return this.http.get<number>(`${environment.endPoint.booksUrl}/count`);
    }

    public getTotalPrice(ids: string[]): Observable<CartResponse> {
        return this.http.post<CartResponse>(environment.endPoint.totalPriceUrl, ids);
     }

    public bookCountLength(id: number) {
        const checkLocalStg: string = localStorage.getItem('book');
        const bookList: Array<BookModel> = JSON.parse(checkLocalStg) || [];

        const countBooksChoice = bookList.filter(book => book.id  === id);

        this.selectedBook = countBooksChoice.length !== 0;

        if (this.selectedBook) {
            return countBooksChoice.length;
        }
    }

    public checkSelectBooks() {
        const checkLocalStg: string = localStorage.getItem('book');
        const bookList: Array<BookModel> = JSON.parse(checkLocalStg) || [];

        this.selectedBook = bookList.length !== 0;

    }

    public editbook() {
        this.editBook = this.editBook === undefined || !this.editBook;
    }

    public loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const stripeScript = window.document.createElement('script');
            stripeScript.id = 'stripe-script';
            stripeScript.type = 'text/javascript';
            stripeScript.src = 'https://checkout.stripe.com/checkout.js';
            window.document.body.appendChild(stripeScript);
        }
    }

    public pay(amount: string) {
        const handler = (window as any).StripeCheckout.configure({
            key: environment.endPoint.stripePublicKey,
            locale: 'auto',
            token: (token: any) => {
                this.createCustomer(token, amount).subscribe(res => {
                    alert('Token Created!!');
            });
        }
    });

        handler.open({
            name: 'BookShop',
            description: 'Fill in all the fields',
            amount: this.counterAmount(+amount),
        });
    }

    public createCustomer(token: string, amount: string) {

        const data: StripeData = {
            token,
            amount,
        };
        return this.http.post<any>(`${environment.endPoint.stripeUrl}`, data);

    }

    private counterAmount(amount: number) {
        return amount * 100;
    }
}

