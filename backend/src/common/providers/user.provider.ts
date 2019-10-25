import { Connection } from 'mongoose';
import { UserSchema } from '../../documents/user.document';

export const UsersProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
