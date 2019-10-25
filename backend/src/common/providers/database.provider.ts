import * as mongoose from 'mongoose';
import config from '../../config/constants';

export const DatabaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useFindAndModify: false,
        }),
    },
];
