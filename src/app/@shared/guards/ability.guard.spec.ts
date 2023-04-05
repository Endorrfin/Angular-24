import { TestBed } from '@angular/core/testing';

import { AbilityGuard } from './ability.guard';

describe('AbilityGuard', () => {
  let guard: AbilityGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbilityGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
