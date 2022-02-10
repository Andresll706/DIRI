import { TestBed } from '@angular/core/testing';

import { SpotiService } from './spoti.service';

describe('SpotiService', () => {
  let service: SpotiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
