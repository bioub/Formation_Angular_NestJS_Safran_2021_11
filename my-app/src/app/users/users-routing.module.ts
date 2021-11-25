import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { AdminGuard } from '../core/admin.guard';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', // url: /users
    component: UsersComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    data: {
      title: 'Les users',
    },
    children: [
      {
        path: 'add', // url: /users/add
        component: UserAddComponent,
        data: {
          title: 'Ajouter un user',
        },
      },
      {
        path: ':userId', // url: /users/123
        // matcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route) {
        //   console.log(segments);
        //   return {
        //     consumed: segments,
        //     posParams: {
        //       userId: segments[1],
        //     },
        //   };
        // },
        component: UserDetailsComponent,
        data: {
          title: "Details d'un user",
        },
      },
    ],
  },
];

/*
Créer 3 routes :
/users -> UsersComponent
/users/add -> UserAddComponent
/users/:userId -> UserDetailsComponent (l'url sera /users/123 par exemple)

Dans AppComponent ajouter un lien vers /users
Dans UsersComponent ajouter des liens vers /users/add et des exemples de User
Ex : Jean Dupont -> /users/1
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
