import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface BookDocument extends Document {
  title: string;
  price: number;
  authors: any[];
  genre: string;
  description: string;
  coverUrl: string;
  type: string;
}

export const BookSchema: Schema = new Schema({
  title: String,
  price: Number,
  authors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Authors',
    }],
  genre: String,
  description: String,
  coverUrl: String,
  type: {default: 'book', type: String},
});

export default mongoose.model<BookDocument>('Books', BookSchema);
