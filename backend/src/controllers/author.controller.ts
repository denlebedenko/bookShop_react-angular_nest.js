import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthorService } from '../services';
import { AuthorModel, AuthorCreateModel } from '../models';
import { Roles } from '../common/guards/roles.decorator';
import { RoleGuard } from '../common/guards/role.guard';
import { AuthorDocument } from 'src/documents/author.documents';

@ApiUseTags('authors')
@ApiBearerAuth()
@Controller('authors')

export class AuthorController {

    constructor(private readonly authorService: AuthorService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiResponse({status: 200, description: 'successfully.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Roles('admin')
    getAuthors(@Query() page: number): Promise<AuthorModel[]> {
        const authorsList = this.authorService.getAllAuthors(page);
        return authorsList;
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiResponse({status: 200, description: 'successfully.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Roles('admin')
    getAuthor(@Param('id') id: string): Promise<AuthorModel> {
        const author = this.authorService.findAuthorById(id);
        return author;
    }

    @Post()
    @ApiOperation({ title: 'Create user' })
    @ApiResponse({status: 201, description: 'The user has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @Roles('admin')
    newAuthor(@Body() body: AuthorCreateModel) {
        const newAuthor = this.authorService.createAuthor(body);
        return newAuthor;
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiResponse({status: 200, description: 'successfully.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Roles('admin')
    updateAuthor(@Param('id') id: string, @Body() body: AuthorDocument) {
        const updatedAuthors = this.authorService.updateAuthor(id, body);
        return updatedAuthors;
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiResponse({status: 200, description: 'successfully.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Roles('admin')
    deletedAuthor(@Param('id') id: string) {
        const deletedAuthor = this.authorService.deleteAuthor(id);
        return deletedAuthor;
    }

}
