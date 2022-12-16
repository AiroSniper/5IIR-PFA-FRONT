import { TestBed } from '@angular/core/testing';

import { PlayerSpaceService } from './player-space.service';

describe('PlayerSpaceService', () => {
  let service: PlayerSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
