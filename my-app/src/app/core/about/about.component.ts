import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  nb = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.nb++;
  }

}
