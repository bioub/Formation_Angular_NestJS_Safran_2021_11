import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './shared/user.service';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserAddComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  providers: [
    // {
    //   provide: UserService,
    //   useValue: new UserService(),
    // }
    // {
    //   provide: UserService,
    //   useFactory: function() {
    //     return new UserService();
    //   }
    // }
    // {
    //   provide: UserService,
    //   useExisting: UserFakeService,
    // }
    // {
    //   provide: UserService,
    //   useClass: UserService,
    // }
    // UserService
  ]
})
export class UsersModule { }
