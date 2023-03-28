import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAfterviewcheckedComponent } from './tab-afterviewchecked.component';

describe('TabAfterviewcheckedComponent', () => {
  let component: TabAfterviewcheckedComponent;
  let fixture: ComponentFixture<TabAfterviewcheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAfterviewcheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAfterviewcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
