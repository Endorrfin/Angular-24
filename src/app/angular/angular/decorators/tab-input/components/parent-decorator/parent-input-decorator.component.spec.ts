import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInputDecoratorComponent } from './parent-input-decorator.component';

describe('ParentDecoratorComponent', () => {
  let component: ParentInputDecoratorComponent;
  let fixture: ComponentFixture<ParentInputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInputDecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentInputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
