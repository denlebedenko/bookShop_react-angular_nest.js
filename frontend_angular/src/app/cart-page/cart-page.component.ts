import { Component, OnInit} from '@angular/core';
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
  books: Array<BookModel> = JSON.parse(this.checkLocalStg) || [];
  totalPrice: number = this.countTotalPrice();

  constructor(public bookService: BookService) {
    this.checkDuplicateBooks();
    this.countTotalPrice();
  }

  ngOnInit() {
    this.bookService.loadStripe();
  }


  checkDuplicateBooks() {
    let bookList: Array<BookModel>;
    let checkLocalStg: string;

    checkLocalStg = localStorage.getItem('book');
    bookList = JSON.parse(checkLocalStg) || [];

    const uniqIds: boolean[] = [];
    const filtered = bookList.filter(obj => !uniqIds[obj.id] && (uniqIds[obj.id] = true));
    this.books = filtered;
  }

  clearCartBtn() {
    localStorage.removeItem('book');
    this.books = [];
  }

  checkLengthCart() {
    let bookList: Array<BookModel>;
    let checkLocalStg: string;

    checkLocalStg = localStorage.getItem('book');
    bookList = JSON.parse(checkLocalStg) || [];

    if (isArray(bookList) && bookList.length === 0) {
      this.books = [];
    }
  }

  countTotalPrice() {
    let bookList: Array <BookModel>;
    let checkLocalStg: string;
    let countSum: number;

    countSum = 0;
    checkLocalStg = localStorage.getItem('book');
    bookList = JSON.parse(checkLocalStg) || [];

    for (const key of bookList) {
      countSum += key.price;
    }
    return countSum;
  }
}

