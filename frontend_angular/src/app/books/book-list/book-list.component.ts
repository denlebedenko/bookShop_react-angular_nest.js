import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AuthService } from 'src/app/core/services/auth.service';
import { QueryBook } from 'src/app/core/models/query-books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})

export class BookListComponent implements OnInit {
  public searchStr: string;
  public books: BookModel[];
  private pager: string[];

  queryData: QueryBook = {
    page: '1',
    minPrice: '',
    maxPrice: '',
    typeBook: '',
  };

  constructor(
    public bookService: BookService,
    public authGuard: AuthGuard,
    public authService: AuthService
  ) {
    this.books = [];
    this.pager = [];
    this.searchStr = '';
  }


  ngOnInit() {

    this.getbookList();
    this.countPage();

  }

  async countPage(): Promise<void> {
    const counter = await this.bookService.getCountPages().toPromise();

    for (let i = 0; i < counter; i++) {
      this.pager.push((counter - i).toString());
    }

  }

  async getbookList(): Promise<void> {
    this.books = await this.bookService.getBooks(this.queryData).toPromise();
  }

  async changeQuery(): Promise<void> {
    this.books = await this.bookService.getBooks(this.queryData).toPromise();
  }

  async changePage(page: string): Promise<void> {
    this.queryData.page = page;
    this.books = await this.bookService.getBooks(this.queryData).toPromise();
  }

}


