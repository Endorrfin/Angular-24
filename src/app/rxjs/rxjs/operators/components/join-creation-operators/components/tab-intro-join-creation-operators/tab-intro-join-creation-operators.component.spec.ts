import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIntroJoinCreationOperatorsComponent } from './tab-intro-join-creation-operators.component';

describe('TabIntroJoinCreationOperatorsComponent', () => {
  let component: TabIntroJoinCreationOperatorsComponent;
  let fixture: ComponentFixture<TabIntroJoinCreationOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIntroJoinCreationOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIntroJoinCreationOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
