import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHostbindingComponent } from './tab-hostbinding.component';

describe('TabHostbindingComponent', () => {
  let component: TabHostbindingComponent;
  let fixture: ComponentFixture<TabHostbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabHostbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabHostbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
