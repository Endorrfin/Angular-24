import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTrackByComponent } from './tab-track-by.component';

describe('TabTrackByComponent', () => {
  let component: TabTrackByComponent;
  let fixture: ComponentFixture<TabTrackByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTrackByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
