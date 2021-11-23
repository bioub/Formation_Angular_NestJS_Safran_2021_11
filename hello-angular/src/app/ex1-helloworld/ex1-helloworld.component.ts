import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1-helloworld',
  templateUrl: './ex1-helloworld.component.html',
  styleUrls: ['./ex1-helloworld.component.css']
})
export class Ex1HelloworldComponent implements OnInit {

  name = 'Toto';

  constructor() { }

  ngOnInit(): void {
  }

  updateName(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    this.name = inputEl.value;
  }
}
