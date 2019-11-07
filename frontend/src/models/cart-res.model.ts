import { BookModel } from "./book.model";

export interface CartResponse {
    totalPrice: number;
    books: BookModel[];
}