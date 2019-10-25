import { Injectable } from '@nestjs/common';

import { UserModel, UserCreateModel } from '../models';
import { UserRepository } from '../repositories';

import { genSalt, hash } from 'bcrypt';

import User, { UserDocument } from '../documents/user.document';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async create(newuser: UserCreateModel): Promise<UserModel> {

        const salt = await genSalt(10);

        const newUserModel: UserDocument = new User({
                username: newuser.username,
                email: newuser.email,
                password: await hash(newuser.password, salt),
                role: newuser.role,
        });

        const user: UserDocument = await this.userRepository.create(newUserModel);
        return user;

    }

    async findAll(page: number): Promise<UserModel[]> {
        const userModel: UserDocument[] = await this.userRepository.findAll(page);
        const users: UserModel[] = userModel.map((user: UserDocument) => {

            const usermodel: UserModel = {
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
                role: user.role,
            };

            return usermodel;
        });
        return users;
    }

    async findOneUserById(userid: string): Promise<UserModel> {
        const user: UserDocument = await this.userRepository.findOneById(userid);

        const findUser: UserModel = {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
        };

        return findUser;
    }

    async findOneUser(userName: string): Promise<UserModel | null> {
        const user: UserDocument = await this.userRepository.findOneByName(userName);
        return  user;
    }

    async update(userid: string, user: UserCreateModel): Promise<UserModel> {
        const userUpdate: UserDocument = await this.userRepository.update(userid, user);

        const updateUser: UserDocument = new User({
            id: userUpdate.id,
            username: userUpdate.username,
            email: userUpdate.email,
            password: userUpdate.password,
            role: userUpdate.role,
        });

        return updateUser;
    }

    async delete(userid: string): Promise<UserModel> {
        const user: UserDocument = await this.userRepository.delete(userid);

        const deletedUser: UserModel = {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
        };

        return deletedUser;
    }
}
