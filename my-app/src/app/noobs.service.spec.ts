import { TestBed } from '@angular/core/testing';

import { NoobsService } from './noobs.service';

describe('NoobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoobsService = TestBed.get(NoobsService);
    expect(service).toBeTruthy();
  });
});
