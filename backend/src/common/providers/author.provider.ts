import { Connection } from 'mongoose';
import { AuthorSchema } from '../../documents/author.document';
import { authorModel } from './constants';

export const AuthorProviders = [
    {
        provide: authorModel,
        useFactory: (connection: Connection) => connection.model('Author', AuthorSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
