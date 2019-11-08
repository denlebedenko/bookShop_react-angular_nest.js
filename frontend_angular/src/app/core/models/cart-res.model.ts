import { BookModel } from 'src/app/core/models/book.model';

export interface CartResponse {
    totalPrice: number;
    booksInCart: BookModel[];
}
