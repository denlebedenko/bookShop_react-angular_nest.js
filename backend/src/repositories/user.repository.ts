import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { UserModel } from '../models';
import { UserDocument } from '../documents/user.document';
import { userModel } from '../common/providers/constants';

@Injectable()

export class UserRepository {
    constructor(
        @Inject(userModel)
        private readonly userModels: Model<UserDocument>,
    ) { }

    async create(user: UserDocument): Promise<UserDocument> {
        const newUser = new this.userModels(user);
        return await newUser.save();
    }

    async findAll(page: number = 1): Promise<UserDocument[]> {
        const countToSkip = 8 * (page - 1);

        const findedUsers = await this.userModels.find().skip(countToSkip).limit(10);
        return findedUsers;
    }

    async findOneById(id: string): Promise <UserDocument> {
        const findOneUser = await this.userModels.findById(id);
        return findOneUser;
    }

    async findOneByName(name: string): Promise<UserDocument> {
        const findedUser = await this.userModels.findOne({username: name});
        return findedUser;
    }

    async update(id: string, user: UserModel): Promise <UserDocument> {
        const updatedUser = await this.userModels.findByIdAndUpdate(id, user, {new: true});
        return updatedUser;
    }

    async delete(id: string): Promise<UserDocument> {
        const deletedUser = await this.userModels.findByIdAndDelete(id);
        return deletedUser;
    }
}
