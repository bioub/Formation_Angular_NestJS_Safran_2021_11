import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { delay, Observable } from 'rxjs';
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
    const user$ = this.httpClient.get<User>(
      environment.backendUrl + '/users/' + id
    );

    if (id == "2") {
      return user$.pipe(delay(3000));
    }

    return user$;
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(
      environment.backendUrl + '/users',
      user,
    );
  }
}
