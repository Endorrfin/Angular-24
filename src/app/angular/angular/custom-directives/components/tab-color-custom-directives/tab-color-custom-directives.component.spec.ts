import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabColorCustomDirectivesComponent } from './tab-color-custom-directives.component';

describe('TabColorCustomDirectivesComponent', () => {
  let component: TabColorCustomDirectivesComponent;
  let fixture: ComponentFixture<TabColorCustomDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabColorCustomDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabColorCustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
