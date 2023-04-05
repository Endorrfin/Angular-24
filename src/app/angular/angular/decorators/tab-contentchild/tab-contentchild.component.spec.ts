import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentchildComponent } from './tab-contentchild.component';

describe('TabContentchildComponent', () => {
  let component: TabContentchildComponent;
  let fixture: ComponentFixture<TabContentchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContentchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
