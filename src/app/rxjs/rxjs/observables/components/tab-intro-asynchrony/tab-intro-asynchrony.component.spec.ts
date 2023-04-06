import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroAsynchronyComponent } from './tab-intro-asynchrony.component';

describe('TabIntroAsynchronouslyComponent', () => {
  let component: TabIntroAsynchronyComponent;
  let fixture: ComponentFixture<TabIntroAsynchronyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroAsynchronyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroAsynchronyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
