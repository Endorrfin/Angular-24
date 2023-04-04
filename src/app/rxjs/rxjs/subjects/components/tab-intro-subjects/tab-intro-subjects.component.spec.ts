import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroSubjectsComponent } from './tab-intro-subjects.component';

describe('TabIntroSubjectsComponent', () => {
  let component: TabIntroSubjectsComponent;
  let fixture: ComponentFixture<TabIntroSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
