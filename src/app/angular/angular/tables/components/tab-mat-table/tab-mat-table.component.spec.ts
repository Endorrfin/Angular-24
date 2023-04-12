import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMatTableComponent } from './tab-mat-table.component';

describe('TabMatTableComponent', () => {
  let component: TabMatTableComponent;
  let fixture: ComponentFixture<TabMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
