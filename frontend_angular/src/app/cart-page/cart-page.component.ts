import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';
import { isArray } from 'util';
import { BookService } from 'src/app/core/services/book.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  providers: [BookService],
})
export class CartPageComponent implements OnInit {

  checkLocalStg: string = localStorage.getItem('book');

  books: Array<BookModel> = [];
  total: number;

  constructor(public bookService: BookService,
  ) {
  }

  ngOnInit() {
    this.countTotalPrice();
    this.bookService.loadStripe();
    this.checkDuplicateBooks();
  }

  async countTotalPrice(): Promise<void> {
    let bookList: Array<BookModel>;
    bookList = JSON.parse(this.checkLocalStg) || [];

    const bookIds = bookList.map(book => book.id.toString());

    const books = await this.bookService.getTotalPrice(bookIds).toPromise()
      .then(res => {
        const { totalPrice, booksInCart } = res;
        this.total = totalPrice;
        this.books = booksInCart;
      });
  }

  checkDuplicateBooks() {
    let bookList: Array<BookModel>;
    bookList = JSON.parse(this.checkLocalStg) || [];
  }

  clearCartBtn() {
    localStorage.removeItem('book');
    this.books = [];
  }

  checkLengthCart() {
    let bookList: Array<BookModel>;
    bookList = JSON.parse(this.checkLocalStg) || [];

    if (isArray(bookList) && bookList.length === 0) {
      this.books = [];
    }
  }
}

