import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      environment.backendUrl + '/users'
    );
  }

  getById(id: string | number): Observable<User> {
    return this.httpClient.get<User>(
      environment.backendUrl + '/users/' + id
    );
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(
      environment.backendUrl + '/users',
      user,
    );
  }
}
