import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewchildComponent } from './tab-viewchild.component';

describe('TabViewchildComponent', () => {
  let component: TabViewchildComponent;
  let fixture: ComponentFixture<TabViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
