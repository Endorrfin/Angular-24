import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHostlistenerComponent } from './tab-hostlistener.component';

describe('TabHostListenerComponent', () => {
  let component: TabHostlistenerComponent;
  let fixture: ComponentFixture<TabHostlistenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabHostlistenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabHostlistenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
