import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentchildrenComponent } from './tab-contentchildren.component';

describe('TabContentchildrenComponent', () => {
  let component: TabContentchildrenComponent;
  let fixture: ComponentFixture<TabContentchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContentchildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
