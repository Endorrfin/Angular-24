import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSwitchMapComponent } from './tab-switch-map.component';

describe('TabSwitchMapComponent', () => {
  let component: TabSwitchMapComponent;
  let fixture: ComponentFixture<TabSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSwitchMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
