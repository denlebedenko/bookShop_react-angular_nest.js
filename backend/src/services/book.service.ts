import { Injectable } from '@nestjs/common';

import { BookCreateModel, BookModel } from '../models';
import { BookRepository } from '../repositories';
import Book, { BookDocument } from '../documents/book.document';
import { QueryBook } from '../models/filter/query.interface';

@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository) {}

    async create(book: BookCreateModel): Promise<BookModel> {
        const newBook: BookDocument = new Book({
            title: book.title,
            price: book.price,
            authors: book.authors,
            genre: book.genre,
            description: book.description,
            coverUrl: book.coverUrl,
        });
        return await this.bookRepository.create(newBook);
    }

    async findAll(query: QueryBook): Promise<BookModel[]> {

        const findBooksQuery = await this.bookRepository.findAll(
            query.page,
            query.minPrice,
            query.maxPrice,
            query.typeBook,
        );

        const books: BookModel[] = findBooksQuery.map((book: BookDocument) => {

            const findedBooks: BookModel = {
                id: book.id,
                title: book.title,
                price: book.price,
                authors: book.authors,
                genre: book.genre,
                description: book.description,
                coverUrl: book.coverUrl,
                type: book.type,
            };
            return findedBooks;
        });

        return books;
    }

    async findOneBookById(bookid: string): Promise<BookModel> {
        const book: BookDocument = await this.bookRepository.findOne(bookid);

        const findedBook: BookModel = {
            id: book.id,
            title: book.title,
            price: book.price,
            authors: book.authors,
            genre: book.genre,
            description: book.description,
            coverUrl: book.coverUrl,
            type: book.type,
        };

        return findedBook;
    }

    async update(bookid: string, book: BookCreateModel): Promise<BookModel> {
        const booksmodel: BookDocument = await this.bookRepository.update(bookid, book);

        const updatedBook: BookDocument = new Book({
            title: booksmodel.title,
            price: booksmodel.price,
            authors: booksmodel.authors,
            genre: booksmodel.genre,
            description: booksmodel.description,
            coverUrl: booksmodel.coverUrl,
        });

        return updatedBook;
    }

    async delete(bookid: string): Promise<BookModel> {
        const booksmodel: BookDocument = await this.bookRepository.delete(bookid);

        const deletedBook: BookModel = {
            id: booksmodel.id,
            title: booksmodel.title,
            price: booksmodel.price,
            authors: booksmodel.authors,
            genre: booksmodel.genre,
            description: booksmodel.description,
            coverUrl: booksmodel.coverUrl,
            type: booksmodel.type,
        };

        return deletedBook;
    }

    async countPages(): Promise<number> {
        const count = await this.bookRepository.countPages();
        return count;
    }

    async getBooksinCart(bookIdList: string[]) {
        const result: Map<string, number> = new Map();

        bookIdList.forEach((item, index, array) => {
            if (result.has(item)) {
                let keyValue: number = result.get(item);
                result.set(item, ++keyValue);
                return;
            }
            result.set(item, 1);
        });

        const books: BookDocument[] = await this.bookRepository.booksInCart(bookIdList);

        const totalPrice: number = books.reduce((amount, book, index, array) => {
            if (result.has(book.id)) {
                const quantity: number = result.get(book.id);
                amount += book.price * quantity;
            }
            return amount;
        }, 0);

        return {
            totalPrice,
            books,
        };
    }
}
