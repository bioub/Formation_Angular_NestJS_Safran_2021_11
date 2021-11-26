import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, of, race, timer } from 'rxjs';
import { GlobalState } from 'src/app/state.model';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { fetchUsers } from '../store/users.action';
import { UsersState } from '../store/users.reducer';
import { usersSelector } from '../store/users.selector';

@Component({
  selector: 'my-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  // providers: [
  //   {
  //     provide: UserService,
  //     useValue: {
  //       getAll() {
  //         return of([{id: 1, name: 'ABC'}])
  //       }
  //     }
  //   }
  // ]
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {

    // forkJoin([
    //   this.userService.getById(3),
    //   this.userService.getAll()
    // ]).subscribe((results) => {
    //   console.log(results);
    // })
    // race([
    //   this.userService.getAll(),
    //   timer(80),
    // ]).subscribe((result) => {
    //   console.log(result);
    //   if (result) {
    //     this.users = result;
    //   }
    // });

    // this.userService.getAll().subscribe((users) => {
    //   this.users = users;
    // });

    this.store.dispatch(fetchUsers());
    this.store.select(usersSelector).subscribe((users) => {
      this.users = users.items;
    });
  }

  exportToExcel() {
    // import('xlsx').then(({utils}) => {
    //   utils.aoa_to_sheet([
    //     "SheetJS".split(""),
    //     [1,2,3,4,5,6,7],
    //     [2,3,4,5,6,7,8]
    //   ]);
    // })
    // write(this.users);
  }
}
