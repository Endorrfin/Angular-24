import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMergeMapComponent } from './tab-merge-map.component';

describe('TabMergeMapComponent', () => {
  let component: TabMergeMapComponent;
  let fixture: ComponentFixture<TabMergeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMergeMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
