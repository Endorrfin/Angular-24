import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAftercontentinitComponent } from './tab-aftercontentinit.component';

describe('TabAftercontentinitComponent', () => {
  let component: TabAftercontentinitComponent;
  let fixture: ComponentFixture<TabAftercontentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAftercontentinitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAftercontentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
