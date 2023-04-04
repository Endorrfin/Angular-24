import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInputComponent } from './tab-input.component';

describe('TabInputComponent', () => {
  let component: TabInputComponent;
  let fixture: ComponentFixture<TabInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
