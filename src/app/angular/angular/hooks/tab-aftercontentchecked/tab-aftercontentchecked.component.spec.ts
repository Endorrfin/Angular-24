import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAftercontentcheckedComponent } from './tab-aftercontentchecked.component';

describe('TabAftercontentcheckedComponent', () => {
  let component: TabAftercontentcheckedComponent;
  let fixture: ComponentFixture<TabAftercontentcheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAftercontentcheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAftercontentcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
