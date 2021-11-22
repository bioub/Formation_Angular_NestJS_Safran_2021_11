import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = {
    username: 'romain',
    email: 'romain.bohdanowicz@formation.tech',
    isAdmin: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
