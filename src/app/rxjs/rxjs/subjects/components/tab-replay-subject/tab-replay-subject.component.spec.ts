import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReplaySubjectComponent } from './tab-replay-subject.component';

describe('TabReplaySubjectComponent', () => {
  let component: TabReplaySubjectComponent;
  let fixture: ComponentFixture<TabReplaySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabReplaySubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
