import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards, Response, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { BookService } from '../services';
import { BookModel, BookCreateModel } from '../models';
import { Roles } from '../common/guards/roles.decorator';
import { RoleGuard } from '../common/guards/role.guard';
import { QueryBook } from '../models/filter/query.interface';

@ApiUseTags('books')
@ApiBearerAuth()
@Controller('books')

export class BookController {

    constructor(private readonly bookService: BookService,
    ) { }

    @Post('add')
    @Roles('admin')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiOperation({ title: 'Create book' })
    @ApiResponse({status: 201, description: 'The book has been successfully created.', type: BookCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    create(@Response() res, @Body() book: BookCreateModel): Promise<BookModel> {

        if (!(book && book.title && book.price && book.authors && book.genre && book.description && book.coverUrl)) {
            return res.status(HttpStatus.FORBIDDEN).json('Please fill in all form fields');
        }

        const createBook = this.bookService.create(book);
        return createBook;
    }

    @Post()
    @ApiResponse({status: 200, description: 'successfully.', type: BookCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll(@Body() query: QueryBook ): Promise<BookModel[]> {
        const findBooks = this.bookService.findAll(query);
        return findBooks;
    }

    @Get('count')
    @ApiResponse({status: 200, description: 'successfully.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    countPages(): Promise<number> {
        const count = this.bookService.countPages();
        return count;
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'The found book', type: BookCreateModel})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('id') id: string): Promise<BookModel> {
        const findOneBook = this.bookService.findOneBookById(id);
        return findOneBook;
    }

    @Put(':id')
    @Roles('admin')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiResponse({status: 200, description: 'successfully.', type: BookCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    update( @Param('id') id: string, @Body() book: BookCreateModel): Promise<BookModel> {
        const updateBook = this.bookService.update(id, book);
        return updateBook;
    }

    @Delete(':id')
    @Roles('admin')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @ApiResponse({status: 200, description: 'successfully', type: BookCreateModel })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    delete(@Param('id') id: string): Promise<BookModel> {
        const deleteBook = this.bookService.delete(id);
        return deleteBook;
    }

    @Post('cart')
    getCart(@Body() bookId)  {
        const books = this.bookService.getBooksinCart(bookId);
        return books;
    }
}
