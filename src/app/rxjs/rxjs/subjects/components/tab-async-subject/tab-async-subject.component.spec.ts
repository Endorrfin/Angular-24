import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAsyncSubjectComponent } from './tab-async-subject.component';

describe('TabAsyncSubjectComponent', () => {
  let component: TabAsyncSubjectComponent;
  let fixture: ComponentFixture<TabAsyncSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAsyncSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAsyncSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
