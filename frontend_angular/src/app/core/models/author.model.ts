import { BookModel } from 'src/app/core/models/book.model';

export interface AuthorModel {
    firstName: string;
    lastName: string;
    books: BookModel[];
}
