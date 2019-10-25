import { BookModel } from './book.model';

export interface AuthorModel {
    firstName: string;
    lastName: string;
    books: BookModel[];
}
