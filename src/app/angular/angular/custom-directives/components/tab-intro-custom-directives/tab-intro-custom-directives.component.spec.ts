import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroCustomDirectivesComponent } from './tab-intro-custom-directives.component';

describe('TabIntroCustomDirectivesComponent', () => {
  let component: TabIntroCustomDirectivesComponent;
  let fixture: ComponentFixture<TabIntroCustomDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroCustomDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroCustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
