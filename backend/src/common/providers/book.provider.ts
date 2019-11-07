import { Connection } from 'mongoose';
import { BookSchema } from '../../documents/book.document';
import { bookModel } from './constants';

export const BooksProviders = [
    {
        provide: bookModel,
        useFactory: (connection: Connection) => connection.model('Book', BookSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
