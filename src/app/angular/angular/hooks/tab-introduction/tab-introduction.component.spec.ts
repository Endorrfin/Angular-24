import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroductionComponent } from './tab-introduction.component';

describe('TabIntroductionComponent', () => {
  let component: TabIntroductionComponent;
  let fixture: ComponentFixture<TabIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
