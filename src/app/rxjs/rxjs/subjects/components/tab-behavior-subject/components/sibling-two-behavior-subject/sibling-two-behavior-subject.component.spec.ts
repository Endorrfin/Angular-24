import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingTwoBehaviorSubjectComponent } from './sibling-two-behavior-subject.component';

describe('SiblingTwoBehaviorSubjectComponent', () => {
  let component: SiblingTwoBehaviorSubjectComponent;
  let fixture: ComponentFixture<SiblingTwoBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingTwoBehaviorSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingTwoBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
