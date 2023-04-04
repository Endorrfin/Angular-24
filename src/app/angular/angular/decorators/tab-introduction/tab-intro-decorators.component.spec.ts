import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroDecoratorsComponent } from './tab-intro-decorators.component';

describe('TabIntroductionComponent', () => {
  let component: TabIntroDecoratorsComponent;
  let fixture: ComponentFixture<TabIntroDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroDecoratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
