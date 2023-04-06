import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExhaustMapComponent } from './tab-exhaust-map.component';

describe('TabExhaustMapComponent', () => {
  let component: TabExhaustMapComponent;
  let fixture: ComponentFixture<TabExhaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExhaustMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabExhaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
