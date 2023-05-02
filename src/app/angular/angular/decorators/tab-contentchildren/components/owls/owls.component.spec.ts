import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlsComponent } from './owls.component';

describe('OwlsComponent', () => {
  let component: OwlsComponent;
  let fixture: ComponentFixture<OwlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
