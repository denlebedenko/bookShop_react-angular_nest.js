import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from '../services';
import { UserModel, UserCreateModel } from '../models';
import { Roles } from '../common/guards/roles.decorator';
import { RoleGuard } from '../common/guards/role.guard';

@ApiUseTags('users')
@ApiBearerAuth()

@Controller('users')

export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @Roles('admin')
    @ApiOperation({ title: 'Create user' })
    @ApiResponse({status: 201, description: 'The user has been successfully created.', type: UserCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    create(@Body() user: UserCreateModel): Promise<UserModel> {
        const createUser = this.userService.create(user);
        return createUser;
    }

    @Get()
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @Roles('admin')
    @ApiResponse({status: 200, description: 'successfully.', type: UserCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll(@Query('page') page: number): Promise<UserModel[]> {
        const findUsers = this.userService.findAll(page);
        return findUsers;
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @Roles('admin')
    @ApiResponse({status: 200, description: 'the found user.', type: UserCreateModel })
    @ApiResponse({status: 403, description: 'Forbidden.'})
    findOne(@Param('id') id: string): Promise<UserModel> {
        const findOneUser = this.userService.findOneUserById(id);
        return findOneUser;
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @Roles('admin')
    @ApiResponse({status: 200, description: 'successfully.', type: UserCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    update( @Param('id') id: string, @Body() user: UserCreateModel): Promise<UserModel> {
        const updateUser = this.userService.update(id, user);
        return updateUser;
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @Roles('admin')
    @ApiResponse({status: 200, description: 'successfully.', type: UserCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    delete(@Param('id') id: string): Promise<UserModel> {
        const deleteUser = this.userService.delete(id);
        return deleteUser;
    }
}
