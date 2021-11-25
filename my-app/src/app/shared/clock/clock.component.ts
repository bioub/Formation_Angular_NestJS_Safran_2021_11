import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy {
  // now = new Date();
  now$!: Observable<Date>;

  // private intervalId: any;
  private subscription!: Subscription;

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // à utiliser si le callback async (ici le callback de setInterval)
    // ne devrait pas lancer la détection
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log('Test');
    //     // if (condition) {
    //     //   this.cd.detectChanges();
    //     // }
    //   }, 1000);
    // });
    // this.intervalId = setInterval(() => {
    //   console.log('new date');
    //   this.now = new Date();
    // }, 1000);
    // this.subscription = interval(1000)
    //   .pipe(map(() => new Date()))
    //   .subscribe((now) => {
    //     console.log('new date');
    //     this.now = now;
    //   });

    this.now$ = interval(1000)
      .pipe(map(() => new Date()));
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalId);
    // this.subscription.unsubscribe();
  }

  hello() {
    // console.log('hello');
    const debut = Date.now();
    while (debut + 1000 > Date.now());
  }
}
