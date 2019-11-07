import { Connection } from 'mongoose';
import { UserSchema } from '../../documents/user.document';
import { userModel } from './constants';

export const UsersProviders = [
    {
        provide: userModel,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
