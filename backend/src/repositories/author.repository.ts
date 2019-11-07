import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { AuthorDocument } from '../documents/author.document';

@Injectable()

export class AuthorRepository {
    constructor(
        @Inject('AUTHOR_MODEL')
        private readonly authorModel: Model<AuthorDocument>,
    ) { }

    async create(user: AuthorDocument): Promise<AuthorDocument> {
        const newAuthor = new this.authorModel(user);
        return await newAuthor.save();
    }

    async findAll(page: number = 1): Promise<AuthorDocument[]> {
        const countToSkip = 10 * (page - 1);
        const findedAuthor = await this.authorModel.find().skip(countToSkip).limit(10)
        .populate('books')
        .exec();
        return findedAuthor;
    }

    async findOneById(id: string): Promise<AuthorDocument> {
        const findedAuthor = await this.authorModel.findById(id)
            .populate('books')
            .exec();
        return findedAuthor;
    }

    async findOneByName(name: string): Promise<AuthorDocument> {
        const findedAuthor = await this.authorModel.findOne({ firstname: name });
        return findedAuthor;
    }

    async update(id: string, author: AuthorDocument): Promise<AuthorDocument> {
        const updatedAuthor = await this.authorModel.findByIdAndUpdate(id, author, { new: true });
        return updatedAuthor;
    }

    async delete(id: string): Promise<AuthorDocument> {
        return await this.authorModel.findByIdAndDelete(id);
    }
}
