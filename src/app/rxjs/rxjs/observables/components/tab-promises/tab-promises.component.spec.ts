import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPromisesComponent } from './tab-promises.component';

describe('TabPromisesComponent', () => {
  let component: TabPromisesComponent;
  let fixture: ComponentFixture<TabPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPromisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
