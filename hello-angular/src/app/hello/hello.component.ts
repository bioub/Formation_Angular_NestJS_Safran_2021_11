import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  // template: '<p>hello {{ name }} !</p>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name = 'Romain';

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.name = this.name + '!';
    // }, 1000);
  }

}
