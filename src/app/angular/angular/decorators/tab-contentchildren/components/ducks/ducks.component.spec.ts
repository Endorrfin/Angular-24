import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucksComponent } from './ducks.component';

describe('DucksComponent', () => {
  let component: DucksComponent;
  let fixture: ComponentFixture<DucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
