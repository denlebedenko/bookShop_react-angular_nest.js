import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthorModel } from 'src/app/core/models';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthorService {

    constructor(private http: HttpClient) {
    }

    public getAuthors(): Observable<AuthorModel[]> {
        return this.http.get<AuthorModel[]>(environment.endPoint.authorUrl);
    }

    public createAuthor(author: AuthorModel): Observable<AuthorModel> {
        return this.http.post<AuthorModel>(environment.endPoint.authorUrl, author);
    }

    public editAuthor(id: string, author: AuthorModel): Observable<AuthorModel> {
        return this.http.put<AuthorModel>(`${environment.endPoint.authorUrl}/${id}`, author);
    }

    public deleteAuthor(id: string): Observable<AuthorModel> {
        return this.http.delete<AuthorModel>(`${environment.endPoint.authorUrl}/${id}`);
    }
}
