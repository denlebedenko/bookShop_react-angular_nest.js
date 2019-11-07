import { Component, OnInit, Input } from '@angular/core';
import { BookModel, AuthorModel } from 'src/app/core/models';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input()author: AuthorModel;
  @Input()books: BookModel[];

  constructor(public authorService: AuthorService) {
  }

  ngOnInit() {
  }

  async deleteAuthor(id: string) {
    const deletedAuthor = await this.authorService.deleteAuthor(id).toPromise();
    location.reload();
    return deletedAuthor;
  }

}
