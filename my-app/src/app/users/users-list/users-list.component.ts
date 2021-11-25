import { Component, OnInit } from '@angular/core';
import { forkJoin, of, race, timer } from 'rxjs';
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
    this.userService.getAll().subscribe((users) => {
      this.users = users;
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
