import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

}
