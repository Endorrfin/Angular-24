import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroductionHooksComponent } from './tab-introduction-hooks.component';

describe('TabIntroductionComponent', () => {
  let component: TabIntroductionHooksComponent;
  let fixture: ComponentFixture<TabIntroductionHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroductionHooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroductionHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
