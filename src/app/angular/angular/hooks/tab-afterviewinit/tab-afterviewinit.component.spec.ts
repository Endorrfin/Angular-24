import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfterviewinitComponent } from './tab-afterviewinit.component';

describe('TabAfterviewinitComponent', () => {
  let component: TabAfterviewinitComponent;
  let fixture: ComponentFixture<TabAfterviewinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAfterviewinitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfterviewinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
