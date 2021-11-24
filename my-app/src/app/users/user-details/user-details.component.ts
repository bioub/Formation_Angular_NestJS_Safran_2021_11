import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // valeur à un instant t (au moment où le composant s'affiche la première)
    // console.log(this.activatedRoute.snapshot.paramMap.get('userId'));

    // observable = changement de valeur de le temps
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      console.log(paramMap.get('userId'));
    });
  }

}
