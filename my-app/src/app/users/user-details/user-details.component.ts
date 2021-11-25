import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, mergeMap, switchMap } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    // valeur à un instant t (au moment où le composant s'affiche la première)
    // console.log(this.activatedRoute.snapshot.paramMap.get('userId'));

    // observable = changement de valeur de le temps

    // MAL ECRIT : CALLBACK HELL + BUG si id: 2 est bcp plus lent que le reste
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService
    //     .getById(paramMap.get('userId') as string)
    //     .subscribe((user) => {
    //       this.user = user;
    //     });
    // });
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('userId') as string),
        switchMap((userId) => this.userService.getById(userId)),
      )
      .subscribe((user) => {
        this.user = user;
      });
  }
}
