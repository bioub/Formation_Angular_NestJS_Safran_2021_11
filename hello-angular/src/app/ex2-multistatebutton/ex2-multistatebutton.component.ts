import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-multistatebutton',
  templateUrl: './ex2-multistatebutton.component.html',
  styleUrls: ['./ex2-multistatebutton.component.css']
})
export class Ex2MultistatebuttonComponent implements OnInit {

  items = ['Jean', 'Eric', 'Paul'];
  selected = 'Eric';

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const selectedIndex = this.items.indexOf(this.selected);
    this.selected = this.items[(selectedIndex + 1) % this.items.length];
  }

}
