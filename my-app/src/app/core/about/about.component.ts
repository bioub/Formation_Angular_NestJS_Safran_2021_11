import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/state.model';
import { increment } from '../store/core.action';
import { countSelector } from '../store/core.selector';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  nb$!: Observable<number>;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
    // this.store.subscribe((state) => {
    //   this.nb = countSelector(state);
    // });
    // this.store.select(countSelector).subscribe((count) => {
    //   this.nb = count;
    // });
    this.nb$ = this.store.select(countSelector);
  }

  onIncrement() {
    this.store.dispatch(increment({step: 1})); // .dispatch({type: 'INCREMENT', step: 1})
  }

}
