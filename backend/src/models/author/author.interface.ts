import { BookModel } from '../book/book.interface';

export interface AuthorModel {
    id?: string;
    firstName: string;
    lastName: string;
    books: BookModel[];
}
