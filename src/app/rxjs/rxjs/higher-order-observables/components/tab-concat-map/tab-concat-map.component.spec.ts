import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConcatMapComponent } from './tab-concat-map.component';

describe('TabConcatMapComponent', () => {
  let component: TabConcatMapComponent;
  let fixture: ComponentFixture<TabConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabConcatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
