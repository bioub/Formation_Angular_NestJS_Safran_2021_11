import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1HelloworldComponent } from './ex1-helloworld.component';

describe('Ex1HelloworldComponent', () => {
  let component: Ex1HelloworldComponent;
  let fixture: ComponentFixture<Ex1HelloworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1HelloworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1HelloworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
