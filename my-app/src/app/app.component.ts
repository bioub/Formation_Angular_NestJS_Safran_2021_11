import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'my-app';

  constructor(router: Router, title: Title) {
    console.log(router.config)
    router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        title.setTitle(event.snapshot.data['title']);
      }
    })
  }
}
