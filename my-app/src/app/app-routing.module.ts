import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [{
  path: '', // le path sans le slash de départ
  component: HomeComponent,
  data: {
    title: 'Home page',
  }
}, {
  path: 'about', // le path sans le slash de départ
  component: AboutComponent,
  data: {
    title: 'A propos'
  }
}, {
  path: '**', // pour toutes les autres URL (à placer en dernier)
  component: NotFoundComponent,
  data: {
    title: 'Not Found',
  }
  // redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
