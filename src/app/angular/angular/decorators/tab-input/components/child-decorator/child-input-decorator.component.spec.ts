import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputDecoratorComponent } from './child-input-decorator.component';

describe('ChildDecoratorComponent', () => {
  let component: ChildInputDecoratorComponent;
  let fixture: ComponentFixture<ChildInputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInputDecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
