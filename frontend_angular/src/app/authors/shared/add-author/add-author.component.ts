import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss'],
  providers: [AuthorService],
})
export class AddAuthorComponent implements OnInit {

  authorData = {
    firstName: '',
    lastName: '',
    books: [],
  };

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  addAuthor() {
    const response = this.authorService.createAuthor(this.authorData).toPromise();
  }

}
