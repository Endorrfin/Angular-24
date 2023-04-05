import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewchildrenComponent } from './tab-viewchildren.component';

describe('TabViewchildrenComponent', () => {
  let component: TabViewchildrenComponent;
  let fixture: ComponentFixture<TabViewchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewchildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
