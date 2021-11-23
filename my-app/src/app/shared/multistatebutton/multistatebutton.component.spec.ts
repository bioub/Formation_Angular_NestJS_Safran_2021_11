import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistatebuttonComponent } from './multistatebutton.component';

describe('MultistatebuttonComponent', () => {
  let component: MultistatebuttonComponent;
  let fixture: ComponentFixture<MultistatebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultistatebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
