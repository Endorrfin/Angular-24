import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgTemplateOutletComponent } from './tab-ng-template-outlet.component';

describe('TabNgTemplateOutletComponent', () => {
  let component: TabNgTemplateOutletComponent;
  let fixture: ComponentFixture<TabNgTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgTemplateOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
