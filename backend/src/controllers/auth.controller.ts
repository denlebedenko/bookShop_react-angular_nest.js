import { Controller, Get, Request, Post, UseGuards, Body, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService, UserService } from '../services';

import { ApiUseTags, ApiResponse , ApiBearerAuth } from '@nestjs/swagger';
import { AuthLoginModel, UserCreateModel, LoginResponse } from '../models';
import { ApplicationException } from '../common/filter/application-exception';

@ApiUseTags('Auth')
@ApiBearerAuth()
@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly userService: UserService) {}

@ApiResponse({ status: 200, description: 'successfully logining user.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
@Post('login')
  async login(@Body() user: AuthLoginModel): Promise<LoginResponse> {
    const userLogin: LoginResponse = await this.authService.login(user);
    return userLogin;
  }

@UseGuards(AuthGuard('jwt'))
@Get('me')
@ApiResponse({ status: 200, description: 'successfully get user.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
  getProfile(@Request() req) {
    return req.user;
  }

@ApiResponse({ status: 201, description: 'successfully register user.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
@Post('register')
  async regiser(@Body() user: UserCreateModel, @Response() res): Promise<UserCreateModel> {

    if (!(user && user.username && user.password && user.email)) {
      throw new ApplicationException('Fill in the form fields');
    }
    const checkUser = await this.userService.findOneUser(user.username);

    if (checkUser) {
      throw new ApplicationException ('Sorry, but this name is busy');
    }
    const newUser = await this.authService.register(user);
    return  newUser;
  }
}
