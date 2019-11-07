import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { BookModel } from '../models';
import { BookDocument } from '../documents/book.document';


@Injectable()

export class BookRepository {
    constructor(
        @Inject('BOOK_MODEL')
        private readonly bookModel: Model<BookDocument>,
    ) { }

    async create(book: BookDocument): Promise<BookDocument> {
        const newBook = new this.bookModel(book);
        return await newBook.save();
    }

    async findAll(page: number = 1, minPrice: number, maxPrice: number, type: string[]): Promise<BookDocument[]> {
        const countToSkip = 8 * (page - 1);

        const min = await this.bookModel.find().sort({ price: +1 }).limit(1);
        const findedMinPrice: number = min[0].price;

        const max = await this.bookModel.find().sort({ price: -1 }).limit(1);
        const findedMaxPrice: number = max[0].price;

        const query = {
            price: {
                $gte: minPrice && minPrice >= 0 ? minPrice : findedMinPrice,
                $lte: maxPrice && maxPrice > 0 ? maxPrice : findedMaxPrice,
            },
            type: { $in: type ? type : ['book', 'magazine'] },
        };
        const books = await this.bookModel.find(query).skip(countToSkip).limit(8).populate('authors').exec();
        return books;
    }

    async findOne(id: string): Promise<BookDocument> {
        const findedBook = await this.bookModel.findById(id).populate('authors').exec();
        return findedBook;
    }

    async update(id: string, book: BookModel): Promise<BookDocument> {
        return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
    }

    async delete(id: string): Promise<BookDocument> {
        return await this.bookModel.findByIdAndDelete(id);
    }

    async countPages(): Promise<number> {
        const countItem: number = await this.bookModel.find().countDocuments();
        const countPages: number = Math.ceil(countItem / 8);
        return countPages;
    }

    async booksInCart(ids: string[]): Promise<BookDocument[]> {
        const items = await this.bookModel.find({ _id: { $in: ids }});
        return items;
    }
}
