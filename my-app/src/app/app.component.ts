import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { kebabCase } from 'lodash-es';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true,
})
export class AppComponent {
  title = 'my-app';

  constructor(router: Router, title: Title) {
    console.log(router.config);
    // router.events.subscribe((event) => {
    //   if (event instanceof ActivationEnd) {
    //     title.setTitle(event.snapshot.data['title']);
    //   }
    // })

    router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event) => {
        title.setTitle((event as ActivationEnd).snapshot.data['title']);
      });
  }

  kebabCase(v: string) {
    console.log('kebabCase');
    return kebabCase(v);
  }
}
