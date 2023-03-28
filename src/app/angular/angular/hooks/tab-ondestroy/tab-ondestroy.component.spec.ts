import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOndestroyComponent } from './tab-ondestroy.component';

describe('TabOndestroyComponent', () => {
  let component: TabOndestroyComponent;
  let fixture: ComponentFixture<TabOndestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOndestroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOndestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
