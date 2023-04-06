import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabObservablesComponent } from './tab-observables.component';

describe('TabObservablesComponent', () => {
  let component: TabObservablesComponent;
  let fixture: ComponentFixture<TabObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
