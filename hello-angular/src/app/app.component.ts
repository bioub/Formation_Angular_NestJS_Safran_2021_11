import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prenoms = ['Michel', 'Thierry', 'Philippe'];
  selectedPrenom = 'Philippe';

  
}
