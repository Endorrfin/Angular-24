import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowsComponent } from './crows.component';

describe('CrowsComponent', () => {
  let component: CrowsComponent;
  let fixture: ComponentFixture<CrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
