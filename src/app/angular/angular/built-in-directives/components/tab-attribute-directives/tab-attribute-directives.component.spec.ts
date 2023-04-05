import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAttributeDirectivesComponent } from './tab-attribute-directives.component';

describe('TabAttributeDirectivesComponent', () => {
  let component: TabAttributeDirectivesComponent;
  let fixture: ComponentFixture<TabAttributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAttributeDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
