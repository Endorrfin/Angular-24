import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroBuildInDirectivesComponent } from './tab-intro-build-in-directives.component';

describe('TabIntroBuildInDirectivesComponent', () => {
  let component: TabIntroBuildInDirectivesComponent;
  let fixture: ComponentFixture<TabIntroBuildInDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroBuildInDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroBuildInDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
