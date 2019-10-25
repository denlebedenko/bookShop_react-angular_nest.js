import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface AuthorDocument extends Document {
    firstName: string;
    lastName: string;
    books: any[];
}

export const AuthorSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    books: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Books',
            }],
});

export default mongoose.model<AuthorDocument>('Authors', AuthorSchema);
