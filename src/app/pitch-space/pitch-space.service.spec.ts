import { TestBed } from '@angular/core/testing';

import { PitchSpaceService } from './pitch-space.service';

describe('PitchSpaceService', () => {
  let service: PitchSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PitchSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
