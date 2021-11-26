import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../shared/user.service';
import { fetchUsersSuccess } from './users.action';

@Injectable()
export class UsersEffect {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('FETCH_USERS'),
    // tap(() => console.log('FETCH_USERS')),
    mergeMap(() => this.userService.getAll()
      .pipe(
        map(users => fetchUsersSuccess({users})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
