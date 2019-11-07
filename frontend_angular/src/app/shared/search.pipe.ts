import { Pipe, PipeTransform } from '@angular/core';
import { BookModel } from 'src/app/core/models/book.model';
@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(books: BookModel[] , value: string) {
        return books.filter(book => {
            if (book.title.includes(value)) {
                return book.title.includes(value);
            }
        });
    }
}
