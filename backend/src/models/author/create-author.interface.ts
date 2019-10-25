import { Types } from 'mongoose';

export interface AuthorCreateModel {
    firstName: string;
    lastName: string;
    books: [Types.ObjectId];
}
