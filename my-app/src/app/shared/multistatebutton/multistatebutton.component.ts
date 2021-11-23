import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multistatebutton',
  templateUrl: './multistatebutton.component.html',
  styleUrls: ['./multistatebutton.component.css']
})
export class MultistatebuttonComponent implements OnInit {

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
