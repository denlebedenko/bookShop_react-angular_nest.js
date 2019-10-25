import { Connection } from 'mongoose';
import { BookSchema } from '../../documents/book.document';

export const BooksProviders = [
    {
        provide: 'BOOK_MODEL',
        useFactory: (connection: Connection) => connection.model('Book', BookSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
