import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2MultistatebuttonComponent } from './ex2-multistatebutton.component';

describe('Ex2MultistatebuttonComponent', () => {
  let component: Ex2MultistatebuttonComponent;
  let fixture: ComponentFixture<Ex2MultistatebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2MultistatebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2MultistatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
