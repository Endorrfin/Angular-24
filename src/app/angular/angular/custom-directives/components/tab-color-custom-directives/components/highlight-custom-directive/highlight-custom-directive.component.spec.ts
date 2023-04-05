import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCustomDirectiveComponent } from './highlight-custom-directive.component';

describe('HighlightCustomDirectiveComponent', () => {
  let component: HighlightCustomDirectiveComponent;
  let fixture: ComponentFixture<HighlightCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightCustomDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
