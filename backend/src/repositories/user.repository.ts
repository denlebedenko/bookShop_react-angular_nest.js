import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { UserModel } from '../models';
import { UserDocument } from '../documents/user.document';

@Injectable()

export class UserRepository {
    constructor(
        @Inject('USER_MODEL')
        private readonly userModel: Model<UserDocument>,
    ) { }

    async create(user: UserDocument): Promise<UserDocument> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async findAll(page: number = 1): Promise<UserDocument[]> {
        const countToSkip = 8 * (page - 1);

        const findedUsers = await this.userModel.find().skip(countToSkip).limit(10);
        return findedUsers;
    }

    async findOneById(id: string): Promise <UserDocument> {
        const findOneUser = await this.userModel.findById(id);
        return findOneUser;
    }

    async findOneByName(name: string): Promise<UserDocument> {
        const findedUser = await this.userModel.findOne({username: name});
        return findedUser;
    }

    async update(id: string, user: UserModel): Promise <UserDocument> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, user, {new: true});
        return updatedUser;
    }

    async delete(id: string): Promise<UserDocument> {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        return deletedUser;
    }
}
