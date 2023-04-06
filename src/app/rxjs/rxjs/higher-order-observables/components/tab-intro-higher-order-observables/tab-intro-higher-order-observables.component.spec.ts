import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroHigherOrderObservablesComponent } from './tab-intro-higher-order-observables.component';

describe('TabIntroHigherOrderObservablesComponent', () => {
  let component: TabIntroHigherOrderObservablesComponent;
  let fixture: ComponentFixture<TabIntroHigherOrderObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroHigherOrderObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroHigherOrderObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
