import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBehaviorSubjectComponent } from './tab-behavior-subject.component';

describe('TabBehaviorSubjectComponent', () => {
  let component: TabBehaviorSubjectComponent;
  let fixture: ComponentFixture<TabBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBehaviorSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
