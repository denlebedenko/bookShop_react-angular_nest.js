import { Component, OnInit } from '@angular/core';

import { AuthorModel } from 'src/app/core/models';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
  providers: [AuthorService]
})
export class AuthorsListComponent implements OnInit {

  public authors: AuthorModel[];

  constructor(private authorService: AuthorService) {
    this.authors = [];
  }

  ngOnInit() {
    this.getAuthors();
  }

  async getAuthors(): Promise<void> {
    this.authors = await this.authorService.getAuthors().toPromise();
  }
}
