import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffalloComponent } from './buffalo.component';

describe('BuffalloComponent', () => {
  let component: BuffalloComponent;
  let fixture: ComponentFixture<BuffalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffalloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
