import { BookModel } from "../book/book.model";

export interface CartResponse {
    totalPrice: number;
    booksInCart: BookModel[];
}