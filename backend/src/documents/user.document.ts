import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export interface UserDocument extends Document {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
}

export const UserSchema: Schema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {default: 'user', type: String},
});

export default mongoose.model<UserDocument>('User', UserSchema);
