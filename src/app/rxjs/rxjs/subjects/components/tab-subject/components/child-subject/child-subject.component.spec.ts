import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSubjectComponent } from './child-subject.component';

describe('ChildSubjectComponent', () => {
  let component: ChildSubjectComponent;
  let fixture: ComponentFixture<ChildSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
