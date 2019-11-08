import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import * as jwt from 'jsonwebtoken';

import { JwtPayload, UserCreateModel, LoginResponse, UserModel, AuthLoginModel } from '../models';

import { UserRepository } from '../repositories';
import { genSalt, hash, compare } from 'bcrypt';
import { UserDocument } from '../documents/user.document';

import User from '../documents/user.document';
import { ApplicationException } from '../common/filter/application-exception';
import { RegisterationResponse } from 'src/models/auth/register-res.model';
import { Environment } from '../environment/environment';
import { SendGridService } from './sendgrid.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UserRepository,
    private readonly config: Environment,
    private readonly sendService: SendGridService,
    ) {}

  async validatePayload(payload: JwtPayload): Promise<UserModel> {
   const user = await this.userService.findOneUser(payload.username);
   return user;
  }

  async register(registeruser: UserCreateModel): Promise<RegisterationResponse> {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);

    const user: UserDocument =  new User({
        username: registeruser.username,
        email: registeruser.email,
        password: await hash(registeruser.password, salt),
        role: registeruser.role,
    });

    const payload: JwtPayload = {
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const registerUser = await this.userRepository.create(user);
    const validtoken = jwt.sign(payload, this.config.jwtSecret);

    const validate = jwt.verify(validtoken, this.config.jwtSecret);

    const registeredUser = {
      username: user.username,
      email: user.email,
      role: user.role,
      token: validtoken,
    };

    this.sendService.send(registerUser.email);

    return registeredUser;
}

  async login(userAuth: AuthLoginModel): Promise<LoginResponse> {
    const { username, password } = userAuth;

    const user = await this.userService.findOneUser(username);

    if (!user) {
      throw new ApplicationException('Invalid credentails');
    }

    const checkValidPass: boolean = await compare(password, user.password);

    if (!checkValidPass) {
      throw new ApplicationException('Invalid password');
    }

    const payload: JwtPayload = {
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const validtoken = jwt.sign(payload, this.config.jwtSecret);

    const logginedUser: LoginResponse = {
      username: payload.username,
      role: payload.role,
      token: validtoken,
    };

    return logginedUser;
  }
}
