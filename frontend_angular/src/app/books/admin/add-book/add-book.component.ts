import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/services/book.service';
import { BookModel } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  providers: [BookService]
})
export class AddBookComponent {

  constructor(private bookService: BookService,
              private router: Router) { }

  bookData: BookModel = {
    title: '',
    price: 0,
    authors: [],
    genre: '',
    description: '',
    coverUrl: '',
    type: '',
  };

 async addBook() {
    await this.bookService.createBook(this.bookData)
    .toPromise()
    .then(
      res => {
        this.router.navigate(['/list']);
      })
    .catch(err => console.log(err));
  }
}
