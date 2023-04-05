import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAttributeDirectivesComponent } from './color-attribute-directives.component';

describe('ColorAtributeDirectivesComponent', () => {
  let component: ColorAttributeDirectivesComponent;
  let fixture: ComponentFixture<ColorAttributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAttributeDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
