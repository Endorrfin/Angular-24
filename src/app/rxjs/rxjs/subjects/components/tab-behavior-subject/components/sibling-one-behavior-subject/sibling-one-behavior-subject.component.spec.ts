import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingOneBehaviorSubjectComponent } from './sibling-one-behavior-subject.component';

describe('ChildBehaviorSubjectComponent', () => {
  let component: SiblingOneBehaviorSubjectComponent;
  let fixture: ComponentFixture<SiblingOneBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingOneBehaviorSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingOneBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
