import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFlatMapComponent } from './tab-flat-map.component';

describe('TabFlatMapComponent', () => {
  let component: TabFlatMapComponent;
  let fixture: ComponentFixture<TabFlatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFlatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFlatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
