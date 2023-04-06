import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabForkjoinComponent } from './tab-forkjoin.component';

describe('TabForkjoinComponent', () => {
  let component: TabForkjoinComponent;
  let fixture: ComponentFixture<TabForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabForkjoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
