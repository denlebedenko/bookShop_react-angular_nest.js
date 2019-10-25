import { Injectable } from '@nestjs/common';

import { AuthorCreateModel, AuthorModel } from '../models';
import { AuthorRepository } from '../repositories';
import Author, { AuthorDocument } from '../documents/author.documents';

@Injectable()

export class AuthorService {
    constructor(private readonly authorRepository: AuthorRepository) { }

    async createAuthor(author: AuthorCreateModel): Promise<AuthorModel> {
        const newAuthor: AuthorDocument = new Author ({
            firstName: author.firstName,
            lastName: author.lastName,
            books: author.books,
        });
        return await this.authorRepository.create(newAuthor);
    }

    async getAllAuthors(page: number): Promise<AuthorModel[]> {
        const authorModel: AuthorDocument[] = await this.authorRepository.findAll(page);

        const authors: AuthorModel[] = authorModel.map((author: AuthorDocument) => {

            const authorsModel: AuthorModel = {
                id: author.id,
                firstName: author.firstName,
                lastName: author.lastName,
                books: author.books,
            };
            return authorsModel;
        });
        return authors;
    }

    async findAuthorById(id: string): Promise<AuthorModel>  {
        const author: AuthorDocument = await this.authorRepository.findOneById(id);

        const findedAuthor: AuthorModel = {
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName,
            books: author.books,
        };

        return findedAuthor;
    }

    async updateAuthor(id: string, author: AuthorDocument): Promise<AuthorModel> {

        const updatedAuthor: AuthorDocument = await this.authorRepository.update(id, author);

        const authormodel: AuthorDocument = new Author({
            firstName: updatedAuthor.firstName,
            lastName: updatedAuthor.lastName,
            books: updatedAuthor.books,
        });

        return authormodel;
    }

    async deleteAuthor(id: string): Promise<AuthorModel> {
        const author = await this.authorRepository.delete(id);

        const deletedAuthor: AuthorModel = {
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName,
            books: author.books,
        };

        return deletedAuthor;
    }
}
