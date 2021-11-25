import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: 1,
      title: 'ABC',
      completed: true,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show todo.title', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    expect(nativeElement.textContent).toContain('ABC');
  });

  // it('should emit delete on button click', waitForAsync(() => {
  //   const nativeElement = fixture.nativeElement as HTMLElement;
  //   const buttonEl = nativeElement.querySelector('button') as HTMLButtonElement;

  //   component.delete.subscribe(() => {
  //     expect(true).toEqual(true);
  //   });

  //   buttonEl.dispatchEvent(new MouseEvent('click'));
  // }));

  it('should emit delete on button click', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    const buttonEl = nativeElement.querySelector('button') as HTMLButtonElement;

    const spy = jest.fn();

    component.delete.subscribe(spy);

    buttonEl.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(component.todo);
  });

  // describe('TodoItemComponent inputs', () => {
  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
  // })
});
