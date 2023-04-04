import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySavingComponent } from './energy-saving.component';

describe('EnergySavingComponent', () => {
  let component: EnergySavingComponent;
  let fixture: ComponentFixture<EnergySavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergySavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergySavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
