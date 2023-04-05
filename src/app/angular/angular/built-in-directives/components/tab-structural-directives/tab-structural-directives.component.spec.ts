import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStructuralDirectivesComponent } from './tab-structural-directives.component';

describe('TabStructuralDirectivesComponent', () => {
  let component: TabStructuralDirectivesComponent;
  let fixture: ComponentFixture<TabStructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabStructuralDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
