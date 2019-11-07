import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from 'src/app/core/models';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class UserService {

    constructor(private http: HttpClient) {
    }

    public getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(environment.endPoint.usersUrl);
    }

    public createUser(user: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(environment.endPoint.usersUrl, user);
    }

    public editUser(id: string, user: UserModel): Observable<UserModel> {
        return this.http.put<UserModel>(`${environment.endPoint.usersUrl}/${id}`, user);
    }

    public deleteUser(id: string): Observable<UserModel> {
        return this.http.delete<UserModel>(`${environment.endPoint.usersUrl}/${id}`);
    }
}
