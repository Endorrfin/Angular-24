import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOnchangesComponent } from './tab-onchanges.component';

describe('TabOnchangesComponent', () => {
  let component: TabOnchangesComponent;
  let fixture: ComponentFixture<TabOnchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOnchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
