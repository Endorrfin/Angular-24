import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocheckComponent } from './tab-docheck.component';

describe('TabDocheckComponent', () => {
  let component: TabDocheckComponent;
  let fixture: ComponentFixture<TabDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDocheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
