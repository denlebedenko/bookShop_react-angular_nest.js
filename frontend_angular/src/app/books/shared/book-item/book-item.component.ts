import { Component, Input, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: [
        './book-item.component.scss'
    ],
    providers: [BookService]
})
export class BookItemComponent implements AfterContentChecked {
  @Input()book;
  @Input()authors;

  constructor(private changeDetector: ChangeDetectorRef,
              public bookService: BookService,
              public authService: AuthService) {
    this.bookService.checkSelectBooks(this.book);
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  async updateBook(id: string, book: BookModel): Promise<BookModel> {
    const updatedBook = await this.bookService.updateBook(id, book).toPromise();
    location.reload();
    return updatedBook;
  }

  public async deleteBook(id: string): Promise<BookModel> {
    const deletedBook = await this.bookService.deleteBook(id).toPromise();
    location.reload();
    return deletedBook;
  }

  public buyBtn() {
    this.bookService.selectedBook = true;

    const checkLocalStg: string = localStorage.getItem('book');
    const bookList: Array <BookModel> = JSON.parse(checkLocalStg) || [];

    bookList.push(this.book);

    const bookString: string = JSON.stringify(bookList);
    localStorage.setItem('book', bookString);
  }

  public cancelChoiceBtn(id: number) {
    const checkLocalStg: string = localStorage.getItem('book');
    const bookList: Array <BookModel> = JSON.parse(checkLocalStg) || [];

    const findBook = bookList.findIndex(book => book.id === id);
    bookList.splice(findBook, 1);

    if (!bookList.some(book => book.id === id)) {
      this.bookService.selectedBook = false;
    }

    const bookString: string = JSON.stringify(bookList);
    localStorage.setItem('book', bookString);
  }
}
